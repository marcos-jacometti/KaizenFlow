import React, { useEffect, useState } from "react";
import { Card, Config, Container, Details, Picture, UserDetails } from "./styles";
import { FaPen } from "react-icons/fa";
import axios from "axios";
import UpdateUser from "../update";

export default function UserCard({searchTerm}) {
    const [visible, setVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users`);
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleEditClick = (user) => {
        setSelectedUser(user);
        setVisible(true);
    };

    const filteredUsers = users.filter(user =>
        user.username && user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredUsers.length === 0) {
        return <div>No users found</div>;
    }

    return (
        <Container>
            {filteredUsers.map((user) => (
                <Card key={user.id}>
                    <Picture $background={user.profilePicture} />
                    <UserDetails>
                        <Details>
                            <h5>{user.username}</h5>
                        </Details>
                        <Details>
                            <h5>{user.email}</h5>
                        </Details>
                        <Config>
                            <button onClick={() => handleEditClick(user)}>
                                <FaPen />
                            </button>
                        </Config>
                    </UserDetails>
                </Card>
            ))}
            {visible && selectedUser && (
                <UpdateUser
                    visible={visible}
                    setVisible={setVisible}
                    user={selectedUser}
                />
            )}
        </Container>
    );
}