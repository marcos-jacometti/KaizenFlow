import React from "react";
import { Container, MainContent } from "../../assets/styles/global"; 
import Header from "../../components/common/header";
import { Content } from "./styles";
import Card from "../../components/common/card";
import RadialBarChart from "../../components/specific/charts/radial";
import ColumnChart from "../../components/specific/charts/columnTeams";
import ColumnTeams from "../../components/specific/charts/columnTeams";
import ColumnProjects from "../../components/specific/charts/columnProjects";
import ColumnThemes from "../../components/specific/charts/columnThemes";

export default function Graphics(){
    return(
        <Container>
            <Header />
            <MainContent $height="auto" $margin="6vw" $bottom="3vw" $heightMediaStyles="auto">
                <Content>
                    <Card height="55vh" width="50vw" justify="center" color="#000" direction="column" align="center">
                        <h4>Number of Members</h4>
                        <ColumnTeams />
                    </Card>
                    <Card height="55vh" width="20vw" justify="center" color="#000" direction="column" align="center">
                        <h4>% of Participation of Both Teams</h4>
                        <RadialBarChart />
                    </Card>
                    <Card height="40vh" width="35vw" justify="center" color="#000" direction="column" align="center">
                        <h4>Project Themes</h4>
                        <ColumnThemes />
                    </Card>
                    <Card height="40vh" width="35vw" justify="center" color="#000" direction="column" align="center">
                        <h4>Number of Projects</h4>
                        <ColumnProjects />
                    </Card>
                </Content>
            </MainContent>
        </Container>
    );
}