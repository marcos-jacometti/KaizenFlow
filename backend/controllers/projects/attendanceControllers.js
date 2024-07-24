const express = require('express');
const router = express.Router();
const { dbConnection } = require('../../db/dbConnection');

router.post('/attendance', async (req, res) => {
    const { projectId, attendance } = req.body;

    if (!projectId) {
        return res.status(400).send('Project ID is required');
    }

    const validAttendance = attendance.filter(item => item.userId && item.status);
    if (validAttendance.length === 0) {
        return res.status(400).send('No valid attendance records provided');
    }

    const createAttendanceQuery = `
        INSERT INTO attendance (project_id, user_id, date, status)
        VALUES ?
    `;

    const attendanceValues = validAttendance.map(item => [projectId, item.userId, item.date, item.status]);

    dbConnection.query(createAttendanceQuery, [attendanceValues], (err) => {
        if (err) {
            console.error('Error creating attendance:', err);
            return res.status(500).send('Error creating attendance');
        }

        res.status(200).send('Attendance created successfully');
    });
});

module.exports = router;