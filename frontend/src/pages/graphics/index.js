import React from "react";
import { Container, MainContent } from "../../assets/styles/global"; 
import Header from "../../components/common/header";
import { Content } from "./styles";

export default function Graphics(){
    return(
        <Container>
            <Header />
            <MainContent $height="auto" $margin="6vw" $bottom="3vw" $heightMediaStyles="auto">
                <Content>
                    
                </Content>
            </MainContent>
        </Container>
    );
}