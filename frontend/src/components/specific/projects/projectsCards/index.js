import React, { useEffect, useState } from "react";
import { Card, Config, Container, Details, ProjectDetails } from "./styles";
import { FaPen } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ searchTerm }) {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:3000/project/projects');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    const handleEditClick = (projectId) => {
        navigate(`/selectedProjects/${projectId}`);
    };

    const filteredProjects = projects.filter(project =>
        (project.name && project.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (project.project_number && project.project_number.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (filteredProjects.length === 0) {
        return <div>No projects found</div>;
    }

    return (
        <Container>
            {filteredProjects.map((project) => (
                <Card key={project.id}>
                    <ProjectDetails>
                        <Details>
                            <h5>Number: {project.project_number}</h5>
                        </Details>
                        <Details>
                            <h5>{project.name}</h5>
                        </Details>
                        <Details>
                            <h5>{project.description}</h5>
                        </Details>
                        <Config>
                            <button onClick={() => handleEditClick(project.id)}>
                                <FaPen />
                            </button>
                        </Config>
                    </ProjectDetails>
                </Card>
            ))}
        </Container>
    );
}