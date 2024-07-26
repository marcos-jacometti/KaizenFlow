import React, { useState, useEffect } from "react";
import { Close, Container, Inputs, Up, StyledToast } from "./styles";
import { IoClose } from "react-icons/io5";
import Input from "../../../../common/input";
import Button from "../../../../common/button";
import { toast } from "react-toastify";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

export default function CreateAction({ visible, setVisible, projectId }) {
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
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/users");
                const users = response.data;
                setAllUsers(users);
                setUserOptions(users.map(user => ({
                    value: user.id,
                    label: user.username,
                })));
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleSubmit = async () => {
        if (!title || !description || !responsible || !dueDate || !status) {
            notify("Please fill in all fields", "error");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/apiCreate/actions", {
                project_id: projectId,
                title,
                description,
                responsible,
                due_date: dueDate,
                status,
            });
            notify("Action created successfully", "success");
        } catch (error) {
            console.error("Error details:", error.response ? error.response.data : error.message);
            notify("Failed to create action", "error");
        }
    };

    return (
        <Container $visible={visible}>
            <Up>
                <Close>
                    <button onClick={() => setVisible(false)}>
                        <IoClose />
                    </button>
                </Close>
                <h3>Create a new action!</h3>
                <Inputs>
                    <Input
                        placeholder="Title"
                        icon={<AiOutlineFundProjectionScreen />}
                        width="20vw"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Input
                        placeholder="Description"
                        icon={<AiOutlineFundProjectionScreen />}
                        width="20vw"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Select
                        placeholder="Select Responsible User"
                        options={userOptions}
                        value={userOptions.find(option => option.value === responsible)}
                        onChange={(option) => setResponsible(option ? option.value : '')}
                        classNamePrefix="react-select"
                    />
                    <Input
                        type="date"
                        placeholder="Due Date"
                        icon={<AiOutlineFundProjectionScreen />}
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
                        value={{ value: status, label: status }}
                        onChange={(option) => setStatus(option ? option.value : '')}
                        classNamePrefix="react-select"
                    />
                    <Button
                        title="Create Action"
                        background="#8906E6"
                        border="none"
                        color="#fff"
                        onClick={handleSubmit}
                    />
                </Inputs>
                <StyledToast />
            </Up>
        </Container>
    );
}
