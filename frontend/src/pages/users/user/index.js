import React, { useEffect, useState } from "react";
import { Container, MainContent } from "../../../assets/styles/global";
import Header from "../../../components/common/header";
import Content from "../../../components/specific/content";
import { FaUser } from "react-icons/fa";
import Input from "../../../components/common/input";
import { jwtDecode } from "jwt-decode";
import { Inputs, Picture } from "./styles";
import Button from "../../../components/common/button";

export default function User() {
    const [user, setUser] = useState({ username: "", email: "", profilePicture: "" });

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setUser({
                    username: decodedToken.username || "",
                    email: decodedToken.email || "",
                    profilePicture: decodedToken.profilePicture || ""
                });
            } catch (error) {
                console.error("Failed to decode token:", error);
                setUser({ username: "", email: "", profilePicture: "" });
            }
        }
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        window.location.href = "/";
    };

    return (
        <Container>
            <Header />
            <MainContent $height="100vh" $heightMediaStyles="90.5vh">
                <Content icon={<FaUser />} title="Your User" height="60vh">
                    <Inputs>
                        <Picture $background={user.profilePicture} />
                        <Input 
                            value={user.username}
                            readOnly={true}
                        />
                        <Input 
                            value={user.email}
                            readOnly={true}
                        />
                        <Button onClick={handleLogout} title="Logout" background="#8906E6" border="none" color="#fff" />
                    </Inputs>
               </Content>
            </MainContent>
        </Container>
    );
}