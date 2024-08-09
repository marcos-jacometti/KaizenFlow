import React, { useState, useEffect } from "react";
import { Container, Inputs, StyledToast, Up, Close } from "./styles";
import Input from "../../../../common/input";
import Button from "../../../../common/button";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

export default function UpdateAction({ visible, setVisible, actionId, fetchActions }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [responsible, setResponsible] = useState(null);
    const [dueDate, setDueDate] = useState("");
    const [status, setStatus] = useState("");
    const [allUsers, setAllUsers] = useState([]);
    const [userOptions, setUserOptions] = useState([]);

    const notify = (message, type) => {
        toast(message, { type: type });
    };

    const handleUpdate = async () => {
        if (!title || !description || !responsible || !dueDate || !status) {
            notify("All fields are required", "error");
            return;
        }

        try {
        await axios.put(`${process.env.REACT_APP_BACKEND_URL}apiActionsUpdate/actions/${actionId.id}`, {
                title,
                description,
                responsible: responsible.value,
                due_date: dueDate,
                status,
            });
            notify("Action updated successfully", "success");
            fetchActions();
        } catch (error) {
            console.error("Error updating action:", error);
            notify("Failed to update action", "error");
        }
    };

    useEffect(() => {
        if (actionId){
            setTitle(actionId.title || "");
            setDescription(actionId.description || "");
            setResponsible(allUsers.find(user => user.value === actionId.responsible) || null);
            setDueDate(formatDate(actionId.due_date || ""));
            setStatus(actionId.status || "");
        }

        const fetchUsers = async () => {
            try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/users`);
                const users = response.data.map(user => ({
                    value: user.id,
                    label: user.username
                }));
                setAllUsers(users);
                setUserOptions(users);
            } catch (error) {
                console.error("Error fetching users:", error);
                notify("Error fetching users", "error");
            }
        };
        fetchUsers();
    }, [actionId]);

    const formatDate = (date) => {
        if (!date) return "";
        const d = new Date(date);
        return d.toISOString().split('T')[0];
    };

    return (
        <Container $visible={visible}>
            <Up>
                <Close>
                    <button onClick={() => setVisible(false)}>
                        <IoClose />
                    </button>
                </Close>
                <h3>Update action!</h3>
                <Inputs>
                    <Input
                        placeholder="Title"
                        width="20vw"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        icon={<AiOutlineFundProjectionScreen />}
                    />
                    <Input
                        placeholder="Description"
                        width="20vw"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        icon={<AiOutlineFundProjectionScreen />}
                    />
                    <Select
                        placeholder="Select Responsible"
                        options={userOptions}
                        value={responsible}
                        onChange={(option) => setResponsible(option)}
                        classNamePrefix="react-select"
                    />
                    <Input
                        type="date"
                        placeholder="Due Date"
                        width="20vw"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        icon={<AiOutlineFundProjectionScreen />}
                    />
                    <Select
                        placeholder="Select Status"
                        options={[
                            { value: 'In Progress', label: 'In Progress' },
                            { value: 'Delayed', label: 'Delayed' },
                            { value: 'Completed', label: 'Completed' }
                        ]}
                        value={{ value: status, label: status }}
                        onChange={(option) => setStatus(option.value)}
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
            </Up>
            <StyledToast />
        </Container>
    );
}