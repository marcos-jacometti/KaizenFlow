const express = require('express');
const router = express.Router();
const { dbConnection } = require('../db/dbConnection');

router.get('/project/:projectId/attendance-details', async (req, res) => {
    const { projectId } = req.params;

    if (!projectId) {
        return res.status(400).json({ error: 'Project ID is required' });
    }

    const totalMeetingsQuery = 'SELECT COUNT(*) as total FROM attendance WHERE project_id = ?';
    const totalMeetingsPromise = new Promise((resolve, reject) => {
        dbConnection.query(totalMeetingsQuery, [projectId], (err, results) => {
            if (err) return reject(err);
            resolve(results[0].total);
        });
    });

    const attendanceQuery = `
        SELECT 
            u.id as user_id, 
            u.username,
            COUNT(CASE WHEN a.status = 'P' THEN 1 END) as present_count,
            COUNT(CASE WHEN a.status = 'A' THEN 1 END) as absent_count
        FROM attendance a
        JOIN users u ON a.user_id = u.id
        WHERE a.project_id = ?
        GROUP BY u.id
    `;
    const attendancePromise = new Promise((resolve, reject) => {
        dbConnection.query(attendanceQuery, [projectId], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });

    try {
        const [totalMeetings, attendance] = await Promise.all([totalMeetingsPromise, attendancePromise]);

        const detailedAttendance = attendance.map(member => {
            const totalCount = member.present_count + member.absent_count;
            const percentage = totalCount > 0 
                ? Math.round((member.present_count / totalCount) * 100)
                : 0;

            return {
                ...member,
                percentage: percentage
            };
        });

        res.json({ totalMeetings, attendance: detailedAttendance });
    } catch (error) {
        console.error('Error fetching attendance details:', error);
        res.status(500).send('Error fetching attendance details');
    }
});

module.exports = router;