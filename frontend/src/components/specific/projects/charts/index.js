import React from "react";
import { Container } from "./styles";
import Card from "../../../common/card";
import ColumnProjects from "../../charts/columnProjects";
import AttendanceDetails from "../attendanceDetails";

export default function Charts({ projectId }){
    return(
        <Container>
            <AttendanceDetails projectId={projectId}/>
            <Card height="40vh" width="30vw" justify="center" color="#000" direction="column" align="center">
                <ColumnProjects />
            </Card>
        </Container>
    );
}