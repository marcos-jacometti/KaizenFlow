import React, { useState, useEffect } from "react";
import { Close, Container, Inputs, Up, StyledToast } from "./styles";
import { IoClose } from "react-icons/io5";
import Input from "../../../../common/input";
import Button from "../../../../common/button";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { FaCalendarAlt } from "react-icons/fa";

export default function UpdateAction({ visible, setVisible, actionId, fetchActions }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [responsible, setResponsible] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [status, setStatus] = useState("");
    const [allUsers, setAllUsers] = useState([]);
    const [userOptions, setUserOptions] = useState([]);

    const notify = (message, type) => {
        toast(message, { type: type });
    };

    useEffect(() => {
        const fetchActionDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/apiActionsUpdate/actions/${actionId}`);
                const action = response.data;
                setTitle(action.title || "");
                setDescription(action.description || "");
                setResponsible(action.responsible || "");
                setDueDate(action.due_date || "");
                setStatus(action.status || "");
            } catch (error) {
                console.error('Error fetching action details:', error);
                notify("Error fetching action details", "error");
            }
        };

        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/users");
                const users = response.data;
                const options = users.map(user => ({
                    value: user.id,
                    label: user.username
                }));
                setAllUsers(users);
                setUserOptions(options);
            } catch (error) {
                console.error("Error fetching users:", error);
                notify("Error fetching users", "error");
            }
        };

        if (actionId) {
            fetchActionDetails();
        }
        fetchUsers();
    }, [actionId]);

    const handleUpdate = async () => {
        if (!title || !description || !responsible || !dueDate || !status) {
            notify("Please fill in all fields", "error");
            return;
        }

        try {
            await axios.put(`http://localhost:3000/apiActionsUpdate/actions/${actionId}`, {
                title,
                description,
                responsible,
                dueDate,
                status,
            });
            notify("Action updated successfully", "success");
            fetchActions();
            setVisible(false);
        } catch (error) {
            console.error('Failed to update action:', error);
            notify("Failed to update action", "error");
        }
    };

    const selectedResponsible = userOptions.find(option => option.value === responsible);
    const selectedStatus = [{ value: status, label: status }];

    return (
        <Container $visible={visible}>
            <Up>
                <Close>
                    <button onClick={() => setVisible(false)}>
                        <IoClose />
                    </button>
                </Close>
                <h3>Update Action</h3>
                <Inputs>
                    <Input
                        placeholder="Title"
                        icon={<FaCalendarAlt />}
                        width="20vw"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Input
                        placeholder="Description"
                        icon={<FaCalendarAlt />}
                        width="20vw"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Select
                        placeholder="Select Responsible"
                        options={userOptions}
                        value={selectedResponsible}
                        onChange={(option) => setResponsible(option ? option.value : '')}
                        classNamePrefix="react-select"
                    />
                    <Input
                        type="date"
                        placeholder="Due Date"
                        icon={<FaCalendarAlt />}
                        width="20vw"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                    <Select
                        placeholder="Select Status"
                        options={[
                            { value: 'In Progress', label: 'In Progress' },
                            { value: 'Delayed', label: 'Delayed' },
                            { value: 'Completed', label: 'Completed' }
                        ]}
                        value={selectedStatus[0] || null}
                        onChange={(option) => setStatus(option ? option.value : '')}
                        classNamePrefix="react-select"
                    />
                    <Button
                        title="Update Action"
                        background="#8906E6"
                        border="none"
                        color="#fff"
                        onClick={handleUpdate}
                    />
                </Inputs>
                <StyledToast />
            </Up>
        </Container>
    );
}