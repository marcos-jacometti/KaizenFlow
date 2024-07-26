import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, MainContent } from "../../assets/styles/global";
import Header from "../../components/common/header";
import Content from "../../components/specific/content";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { Features, ButtonGroup, Button } from "./styles";
import Actions from "../../components/specific/projects/actions/actionsCard";
import AttendanceList from "../../components/specific/projects/attendanceList";
import Charts from "../../components/specific/projects/charts";
import Details from "../../components/specific/projects/details";

export default function SelectedProject() {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [selectedFeature, setSelectedFeature] = useState('actions');

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/selected/projects/${projectId}`);
                setProject(response.data);
            } catch (error) {
                console.error("Error fetching project details:", error);
            }
        };

        fetchProject();
    }, [projectId]);

    const renderFeature = () => {
        switch (selectedFeature) {
            case 'actions':
                return <Actions projectId={project.id} />;
            case 'attendanceList':
                return <AttendanceList members={project.members} projectId={project.id} />;
            case 'charts':
                return <Charts projectId={project.id} />;
            case 'details':
                return <Details project={project}/>;
            default:
                return null;
        }
    };

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Header />
            <MainContent $height="100vh" $heightMediaStyles="auto">
                <Content icon={<AiOutlineFundProjectionScreen />} title={project.name} height="auto">
                    <Features>
                        <ButtonGroup>
                            <Button $isSelected={selectedFeature === 'actions'} onClick={() => setSelectedFeature('actions')}>Actions</Button>
                            <Button $isSelected={selectedFeature === 'attendanceList'} onClick={() => setSelectedFeature('attendanceList')}>Attendance List</Button>
                            <Button $isSelected={selectedFeature === 'charts'} onClick={() => setSelectedFeature('charts')}>Charts</Button>
                            <Button $isSelected={selectedFeature === 'details'} onClick={() => setSelectedFeature('details')}>Details</Button>
                        </ButtonGroup>
                        {renderFeature()}
                    </Features>
                </Content>
            </MainContent>
        </Container>
    );
}