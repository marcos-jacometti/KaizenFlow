import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Details, Container, Config, Features, NewAction, ProjectDetails, Tag } from "./styles";
import { FaPen } from "react-icons/fa";
import SearchFeature from "../../../searchFeature";
import { IoMdAddCircle } from "react-icons/io";
import CreateAction from "../createAction";
import UpdateAction from "../updateAction";

export default function Actions({ projectId }) {
    const [actions, setActions] = useState([]);
    const [selectedAction, setSelectedAction] = useState(null);
    const [visible, setVisible] = useState(false);
    const [ActionVisible, ActionSetVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState([]);

    const handleBtnActionClick = () => {
        ActionSetVisible(true);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value || "");
    };

    useEffect(() => {
        const fetchActionsAndUsers = async () => {
            try {
                const actionsResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/apiActions/actionsAPI/${projectId}`);
                setActions(actionsResponse.data);

                const usersResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users`);
                setUsers(usersResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (projectId) {
            fetchActionsAndUsers();
        }
    }, [projectId]);

    const handleEditClick = (action) => {
        setSelectedAction(action);
        setVisible(true);
    };

    const filteredActions = actions.filter(action =>
        action.title && action.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const formatDate = (isoString) => {
        if (!isoString) return '';
        const date = new Date(isoString);
        return date.toLocaleDateString('pt-BR');
    };

    const getTagColor = (status, dueDate) => {
        const today = new Date();
        const dueDateObj = new Date(dueDate);

        if (status === 'Completed') return '#28a745';
        if (dueDateObj < today) return '#dc3545';
        return '#ffc107';
    };

    const getUserNameById = (userId) => {
        if (!users.length) return 'Unknown';
        const user = users.find(user => user.id === userId);
        return user ? user.username : 'Unknown';
    };

    return (
        <Container>
            <Features>
                <SearchFeature
                    placeholder="Search for any action"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <NewAction>
                    <button onClick={handleBtnActionClick}>
                        <IoMdAddCircle />
                    </button>
                    {ActionVisible && (
                        <CreateAction visible={ActionVisible} setVisible={ActionSetVisible} projectId={projectId} />
                    )}
                </NewAction>
            </Features>
            {filteredActions.length === 0 ? (
                <p>No actions found.</p>
            ) : (
                filteredActions.map((action) => (
                    <Card key={action.id}>
                        <Tag style={{ backgroundColor: getTagColor(action.status, action.due_date) }} />
                        <ProjectDetails>
                            <Details>
                                <h5>{action.title}</h5>
                            </Details>
                            <Details>
                                <h5>Responsible: {getUserNameById(action.responsible)}</h5>
                            </Details>
                            <Details>
                                <h5>Due Date: {formatDate(action.due_date)}</h5>
                            </Details>
                            <Config>
                                <button onClick={() => handleEditClick(action)}>
                                    <FaPen />
                                </button>
                            </Config>
                        </ProjectDetails>
                    </Card>
                ))
            )}
            {visible && (
                <UpdateAction
                    visible={visible}
                    setVisible={setVisible}
                    actionId={selectedAction}
                    fetchActions={() => {
                        const fetchActions = async () => {
                            try {
                                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/apiActions/actionsAPI/${projectId}`);
                                setActions(response.data);
                            } catch (error) {
                                console.error('Error fetching actions:', error);
                            }
                        };
                        fetchActions();
                    }}
                />
            )}
        </Container>
    );
}