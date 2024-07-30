import React from "react";
import { BackgroundLogo, Container, Inputs, Log, StyledToast } from "./styles";
import { FaLock, FaUser } from "react-icons/fa";
import Input from "../../components/common/input";
import Button from "../../components/common/button";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { handleLogin } from "../../services/controllers/users/handleLogin";

export default function Login() {
    const notify = (message, type) => {
        toast(message, { type: type });
    };

    const handleClick = async () => {
        try {
            await handleLogin();
            notify("Login was a success", "success");
        } catch (error) {
            notify("Incorrect email or password", "error");
        }
    };

    return (
        <Container>
            <Log>
                <BackgroundLogo />
                <Inputs>
                    <Input 
                        icon={<FaUser />} 
                        type="text"
                        placeholder="Username" 
                        id="username"
                    />
                    <Input 
                        icon={<FaLock />}
                        type="password"
                        placeholder="Password"
                        id="password"
                    />
                    <Button 
                        title="Enter" 
                        background="#8906E680"
                        border="none"
                        onClick={handleClick}
                    />
                    <StyledToast />
                </Inputs>
            </Log>
        </Container>
    );
}