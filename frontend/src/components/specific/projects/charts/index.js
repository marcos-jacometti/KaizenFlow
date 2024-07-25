import React, { useState } from "react";
import { Container } from "./styles";
import Card from "../../../common/card";
import AttendanceDetails from "../attendanceDetails";
import RadialBarChart from "../../charts/radial";
import ColumnProjects from "../../charts/columnProjects";
import ActionChart from "../../charts/actionsChart";

const getStatusColor = (percentage) => {
    if (percentage >= 80) return '#4caf50';
    if (percentage >= 50) return '#ffeb3b';
    return '#f44336';
};

export default function Charts({ projectId }) {
    const [totalAttendancePercentage, setTotalAttendancePercentage] = useState(0);

    return (
        <Container>
            <AttendanceDetails projectId={projectId} setTotalAttendancePercentage={setTotalAttendancePercentage} />
            <Card height="40vh" width="30vw" justify="center" color="#000" direction="column" align="center">
                <h4>% of Participation</h4>
                <RadialBarChart 
                    percentage={totalAttendancePercentage} 
                    color={getStatusColor(totalAttendancePercentage)} 
                />
            </Card>
            <Card height="40vh" width="30vw" justify="center" color="#000" direction="column" align="center">
                <h4>Total of Project Actions</h4>
                <ColumnProjects projectId={projectId}/>
            </Card>
            <Card height="40vh" width="30vw" justify="center" color="#000" direction="column" align="center">
                <h4>% of Completed Actions</h4>
                <ActionChart projectId={projectId}/>
            </Card>
        </Container>
    );
}