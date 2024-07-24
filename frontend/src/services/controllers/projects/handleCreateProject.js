import axios from "axios";

export const handleCreateProject = async (projectNumber, projectName, description, selectedUsers) => {
    try {
        const response = await axios.post("http://localhost:3000/projects/createProject", {
            projectNumber,
            projectName,
            description,
            members: selectedUsers.map(user => user.value),
        });

        if (response.status !== 200) {
            throw new Error("Failed to create project");
        }
    } catch (error) {
        console.error("Error creating project", error);
        throw error;
    }
};