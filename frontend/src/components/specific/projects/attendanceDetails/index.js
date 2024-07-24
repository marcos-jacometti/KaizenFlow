import React, { useEffect, useState } from "react";
import { Container, Members, Status, Title } from "./styles";
import axios from "axios";

const getStatusBackgroundColor = (percentage) => {
    if (percentage >= 80) return '#4caf50';
    if (percentage >= 50) return '#ffeb3b';
    if(percentage <= 49) return '#f44336';
    return '#f4f4f5'; 
};

export default function AttendanceDetails({ projectId }) {
    const [attendance, setAttendance] = useState([]);
    const [totalMeetings, setTotalMeetings] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!projectId) {
            setError("Invalid project ID");
            return;
        }

        const fetchAttendanceDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/attendance/project/${projectId}/attendance-details`);
                setTotalMeetings(response.data.totalMeetings);
                setAttendance(response.data.attendance);
            } catch (error) {
                console.error("Error fetching attendance details:", error);
                setError("Error fetching attendance details");
            }
        };

        fetchAttendanceDetails();
    }, [projectId]);

    return (
        <Container>
            <Title>
                <h5>Members</h5>
                <h5>Status</h5>
            </Title>
            {error ? (
                <p>{error}</p>
            ) : attendance.length === 0 ? (
                <p>No attendance data available.</p>
            ) : (
                attendance.map((member) => (
                    <Members key={member.user_id}>
                        <span>{member.username}</span>
                        <span>
                            <Status $background={getStatusBackgroundColor(member.percentage)} />
                            {member.percentage}%
                        </span>
                    </Members>
                ))
            )}
        </Container>
    );
}