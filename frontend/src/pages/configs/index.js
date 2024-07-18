import React from "react";
import { Container, MainContent } from "../../assets/styles/global";
import Header from "../../components/common/header";
import { ConfigSettings, Content, Title } from "./styles";
import { GoGear } from "react-icons/go";
import ThemeBtn from "../../components/specific/theme";

export default function Configs(){
    return(
        <Container>
            <Header />
            <MainContent $height="100vh" $heightMediaStyles="90.5vh">
                <Content>
                    <Title>
                        <GoGear />
                        <h3>Configurations</h3>
                    </Title>
                    <ConfigSettings>
                        <span>Get your best theme:</span>
                        <ThemeBtn />
                    </ConfigSettings>
                </Content>
            </MainContent>
        </Container>
    );
}