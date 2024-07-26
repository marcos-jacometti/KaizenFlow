import React, { useState, useEffect } from "react";
import { Container, Inputs, StyledToast } from "./styles";
import Input from "../../../common/input";
import Button from "../../../common/button";
import { toast } from "react-toastify";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

export default function Details({ project }) {
    const [projectNumber, setProjectNumber] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [members, setMembers] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    const notify = (message, type) => {
        toast(message, { type: type });
    };

    const handleUpdate = async () => {
        if (!projectNumber || !name || !description || !Array.isArray(members) || members.length === 0) {
            notify("All fields are required", "error");
            return;
        }

        try {
            await axios.put(`http://localhost:3000/only/project/${project.id}`, {
                project_number: projectNumber,
                name,
                description,
                members: members.map(member => member.value)
            });
            notify("Project updated", "success");
        } catch (error) {
            console.error("Error updating project:", error);
            notify("Failed to update project", "error");
        }
    };

    useEffect(() => {
        if (project) {
            setProjectNumber(project.project_number || "");
            setName(project.name || "");
            setDescription(project.description || "");
            setMembers(project.members ? project.members.map(member => ({ value: member.id, label: member.username })) : []);
        }
    }, [project]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/users");
                setAllUsers(response.data.map(user => ({ value: user.id, label: user.username })));
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <Container>
            <h4>Details about the project:</h4>
            <Inputs>
                <Input 
                    placeholder="Project Number"
                    width="20vw"
                    value={projectNumber}
                    onChange={(e) => setProjectNumber(e.target.value)}
                    icon={<AiOutlineFundProjectionScreen />}
                />
                <Input 
                    placeholder="Name"
                    width="20vw"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    placeholder="Select Members"
                    options={allUsers}
                    isMulti
                    value={members}
                    onChange={setMembers}
                    classNamePrefix="react-select"
                />
                <Button 
                    title="Update"
                    background="#8906E6"
                    border="none"
                    color="#fff"
                    onClick={handleUpdate}
                />
            </Inputs>
            <StyledToast />
        </Container>
    );
}