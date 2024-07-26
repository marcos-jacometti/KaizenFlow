import React from "react";
import { Container, MainContent } from "../../assets/styles/global"; 
import Header from "../../components/common/header";
import { Content } from "./styles";
import Card from "../../components/common/card";
import AllActions from "../../components/specific/charts/TotalActionsChart";
import ActionsDetails from "../../components/specific/charts/ActionsDetails";
import AttendancePercentage from "../../components/specific/charts/TotalAttendance";
import ProjectsUsersColumnChart from "../../components/specific/charts/ProjectAndMembers";

export default function Graphics(){
    return(
        <Container>
            <Header />
            <MainContent $height="auto" $margin="6vw" $bottom="3vw" $heightMediaStyles="auto">
                <Content>
                    <Card height="50vh" width="50vw" justify="center" color="#000" direction="column" align="center">
                        <h4>Total of Actions</h4>
                        <ActionsDetails />
                    </Card>
                    <Card height="50vh" width="25vw" justify="center" color="#000" direction="column" align="center">
                        <h4>% of Completed Actions</h4>
                        <AllActions />
                    </Card>
                    <Card height="50vh" width="50vw" justify="center" color="#000" direction="column" align="center">
                        <h4>Total of Projects and Members</h4>
                        <ProjectsUsersColumnChart />
                    </Card>
                    <Card height="50vh" width="25vw" justify="center" color="#000" direction="column" align="center">
                        <h4>% of Participation</h4>
                        <AttendancePercentage />
                    </Card>
                </Content>
            </MainContent>
        </Container>
    );
}