import React from "react";
import { Container, MainContent } from "../../assets/styles/global";
import Header from "../../components/common/header";
import { Content } from "./styles";
import Card from "../../components/common/card";
import AttendancePercentage from "../../components/specific/charts/TotalAttendance";
import AllActions from "../../components/specific/charts/TotalActionsChart";
import img from "../../assets/images/desktop.png";
import projects from "../../assets/images/projects.png"

export default function HomePage(){
    return(
        <Container>
            <Header />
            <MainContent $height="auto" $margin="6vw" $bottom="3vw" $heightMediaStyles="auto">
                <Content>
                <Card height="50vh" width="50vw" padding="3vh" color="#fff" text="Whats is Kaizen? Click here to read our article" align="end" background={img} link="/article01" />
                <Card height="50vh" width="25vw" justify="center" color="#000" direction="column" align="center">
                    <h4>% of Participation</h4>
                    <AttendancePercentage />
                </Card>
                <Card height="50vh" width="25vw" justify="center" color="#000" direction="column" align="center">
                    <h4>% of Completed Actions</h4>
                    <AllActions />
                </Card>
                <Card height="50vh" width="50vw" padding="3vh" color="#fff" text="Click here to see our projects!" align="end" background={projects} link="/projects" />
                </Content>
            </MainContent>
        </Container>
    );
}