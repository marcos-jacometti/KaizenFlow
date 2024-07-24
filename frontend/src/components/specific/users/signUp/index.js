import React, { useState } from "react";
import { Close, Container, Inputs, Up, StyledToast } from "./styles";
import { IoClose } from "react-icons/io5";
import Input from "../../../common/input";
import { FaCamera, FaLock, FaUser } from "react-icons/fa";
import { MdConfirmationNumber, MdEmail } from "react-icons/md";
import Button from "../../../common/button";
import { handleCreateUser } from "../../../../services/controllers/users/handleCreateUser";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp({ visible, setVisible }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);

    const notify = (message, type) => {
        toast(message, { type: type });
    };

    const handleClick = async () => {
        if (!username || !email || !password || !profilePicture) {
            notify("Please fill in all fields", "error");
            return;
        }

        try {
            await handleCreateUser(username, email, password, profilePicture);
            notify("User created successfully", "success");
        } catch (error) {
            console.error("Error creating user:", error);
            notify("Failed to create user", "error");
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
                <h3>Create a new user!</h3>
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
                        placeholder="Profile Picture"
                        width="20vw"
                        icon={<FaCamera />}
                        type="file"
                        onChange={(e) => setProfilePicture(e.target.files[0])}
                    />
                    <Button 
                        title="Register"
                        background="#8906E6"
                        border="none"
                        color="#fff"
                        onClick={handleClick}
                    />
                    <StyledToast />
                </Inputs>
            </Up>
        </Container>
    );
}