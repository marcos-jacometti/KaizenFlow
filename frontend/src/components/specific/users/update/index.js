import React, { useState, useEffect } from "react";
import { Close, Container, Inputs, StyledToast, Up } from "./styles";
import { IoClose } from "react-icons/io5";
import Input from "../../../common/input";
import { FaCamera, FaLock, FaUser } from "react-icons/fa";
import { MdConfirmationNumber, MdEmail } from "react-icons/md";
import Button from "../../../common/button";
import { toast } from "react-toastify";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateUser({ visible, setVisible, user }) {
    const [username, setUsername] = useState(user.username || "");
    const [email, setEmail] = useState(user.email || "");
    const [password, setPassword] = useState("");
    const [project, setProject] = useState(user.project || "");
    const [profilePicture, setProfilePicture] = useState(null);

    const notify = (message, type) => {
        toast(message, { type: type });
    };

    const handleUpdate = async () => {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('project', project);
        if (profilePicture) {
            formData.append('profilePicture', profilePicture);
        }

        try {
            await axios.put(`http://localhost:3000/update/user/${user.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            notify("User updated successfully", "success");
        } catch (error) {
            console.error("Error updating user:", error);
            notify("Failed to update user", "error");
        }
    };

    useEffect(() => {
        if (user) {
            setUsername(user.username);
            setEmail(user.email);
            setProject(user.project);
        }
    }, [user]);

    return (
        <Container $visible={visible}>
            <Up>
                <Close>
                    <button onClick={() => setVisible(false)}>
                        <IoClose />
                    </button>
                </Close>
                <h3>Update User!</h3>
                <Inputs>
                    <Input 
                        placeholder="Username"
                        icon={<FaUser />}
                        width="20vw"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input 
                        placeholder="Email"
                        icon={<MdEmail />}
                        type="email"
                        width="20vw"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                        placeholder="Password"
                        icon={<FaLock />}
                        type="password"
                        width="20vw"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input 
                        placeholder="Number of Project"
                        width="20vw"
                        icon={<MdConfirmationNumber />}
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                    />
                    <Input 
                        placeholder="Profile Picture"
                        width="20vw"
                        icon={<FaCamera />}
                        type="file"
                        onChange={(e) => setProfilePicture(e.target.files[0])}
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
            </Up>
        </Container>
    );
}