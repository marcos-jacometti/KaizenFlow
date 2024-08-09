import React, { useState, useEffect } from "react";
import { Close, Container, Inputs, Up, StyledToast } from "./styles";
import { IoClose } from "react-icons/io5";
import Input from "../../../common/input";
import Button from "../../../common/button";
import { toast } from "react-toastify";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { handleCreateProject } from "../../../../services/controllers/projects/handleCreateProject";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

export default function CreateProject({ visible, setVisible }) {
    const [projectNumber, setProjectNumber] = useState("");
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [allUsers, setAllUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);

    const notify = (message, type) => {
        toast(message, { type: type });
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/users`);
                setAllUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleSubmit = async () => {
        if (!projectNumber || !projectName || !description || selectedUsers.length === 0) {
            notify("Please fill in all fields", "error");
            return;
        }

        try {
            await handleCreateProject(projectNumber, projectName, description, selectedUsers);
            notify("Project created successfully", "success");
        } catch (error) {
            notify("Failed to create project", "error");
        }
    };

    const userOptions = allUsers.map(user => ({
        value: user.id,
        label: user.username,
    }));

    return (
        <Container $visible={visible}>
            <Up>
                <Close>
                    <button onClick={() => setVisible(false)}>
                        <IoClose />
                    </button>
                </Close>
                <h3>Create a new project!</h3>
                <Inputs>
                    <Input
                        placeholder="Project Number"
                        icon={<AiOutlineFundProjectionScreen />}
                        width="20vw"
                        value={projectNumber}
                        onChange={(e) => setProjectNumber(e.target.value)}
                    />
                    <Input
                        placeholder="Project Name"
                        icon={<AiOutlineFundProjectionScreen />}
                        width="20vw"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                    />
                    <Input
                        placeholder="Description"
                        icon={<AiOutlineFundProjectionScreen />}
                        width="20vw"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Select
                        placeholder="Select Users"
                        options={userOptions}
                        isMulti
                        value={selectedUsers}
                        onChange={setSelectedUsers}
                        classNamePrefix="react-select"
                    />
                    <Button
                        title="Create Project"
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