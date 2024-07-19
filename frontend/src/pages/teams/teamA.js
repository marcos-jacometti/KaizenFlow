import React from "react";
import { Container, MainContent } from "../../assets/styles/global";
import Header from "../../components/common/header";
import { Buttons, Content, StyledToast, Title, Wrap } from "./styles";
import Button from "../../components/common/button";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function TeamA(){
    const notify = (message, type) => {
        toast(message, { type: type });
    };

    const handleClick = async () => {
        notify("Success", "success");
    };

    const handleCancel = () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => checkbox.checked = false);
    };

    return(
        <Container>
            <Header />
            <MainContent $height="100vh">
                <Content>
                    <Title>
                        <h5>Name</h5>
                        <h5>P</h5>
                        <h5>A</h5>
                    </Title>
                    <Wrap>
                        <span>Amélie Dupont</span>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                    </Wrap>
                    <Wrap>
                        <span>Émile Lefebvre</span>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                    </Wrap>
                    <Wrap>
                        <span>Chloé Dubois</span>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                    </Wrap>
                    <Wrap>
                        <span>Louis Martin</span>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                    </Wrap>
                    <Wrap>
                        <span>Antoine Cruz</span>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                    </Wrap>
                </Content>
                <Buttons>
                    <Button onClick={handleCancel} title="Cancel" border="0.3vh solid #8906e6" />
                    <Button onClick={handleClick} title="Ok" background="#8906E6" border="none" color="#fff" />
                    <StyledToast />
                </Buttons>
            </MainContent>
        </Container>
    );
}