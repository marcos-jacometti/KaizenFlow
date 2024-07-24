import React, { useState } from "react";
import { Container, List, Members, StyledToast, Title } from "./styles";
import Button from "../../../common/button";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const formatDateForDisplay = (dateStr) => {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
};

const getDateForBackend = () => {
    const date = new Date();
    return date.toISOString().split('T')[0];
};

export default function AttendanceList({ members, projectId }) {
    const [attendance, setAttendance] = useState(members.map(member => ({
        username: member.username,
        userId: member.id,
        date: getDateForBackend(),
        status: ''
    })));

    const notify = (message, type) => {
        toast(message, { type: type });
    };

    const handleCheckboxChange = (userId, status) => {
        setAttendance(attendance.map(item => 
            item.userId === userId ? { ...item, status: item.status === status ? '' : status } : item
        ));
    };

    const handleCreateAttendance = async () => {
        if (!projectId) {
            notify("Project ID is missing", "error");
            return;
        }

        if (attendance.some(item => !item.status)) {
            notify("Please mark attendances", "error");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/list/attendance", {
                projectId,
                attendance
            });

            if (response.status === 200) {
                notify("Attendance registered", "success");
                setAttendance(members.map(member => ({
                    username: member.username,
                    userId: member.id,
                    date: getDateForBackend(),
                    status: ''
                })));
            } else {
                throw new Error("Failed to create attendance");
            }
        } catch (error) {
            console.error("Error creating attendance", error);
            notify("Error creating attendance", "error");
        }
    };

    return (
        <Container>
            <List>
                <Title>
                    <h5>Members</h5>
                    <h5>Date</h5>
                    <h5>P</h5>
                    <h5>A</h5>
                </Title>
                {members.map((member) => (
                    <Members key={member.id}>
                        <span>{member.username}</span>
                        <span>{formatDateForDisplay(getDateForBackend())}</span>
                        <input
                            type="checkbox"
                            checked={attendance.find(item => item.userId === member.id)?.status === 'P'}
                            onChange={() => handleCheckboxChange(member.id, 'P')}
                        />
                        <input
                            type="checkbox"
                            checked={attendance.find(item => item.userId === member.id)?.status === 'A'}
                            onChange={() => handleCheckboxChange(member.id, 'A')}
                        />
                    </Members>
                ))}
            </List>
            <Button
                title="Register"
                background="#8906E6"
                border="none"
                color="#fff"
                onClick={handleCreateAttendance}
            />
            <StyledToast />
        </Container>
    );
}