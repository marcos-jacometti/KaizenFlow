import React, { useState } from "react";
import { Container, MainContent } from "../../../assets/styles/global";
import Header from "../../../components/common/header";
import { Features, NewUser } from "./styles";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import SignUp from "../../../components/specific/users/signUp";
import Content from "../../../components/specific/content";
import UserCard from "../../../components/specific/users/userCard";
import SearchFeature from "../../../components/specific/searchFeature";

export default function AllUsers() {
    const [visible, setVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const handleBtnClick = () => {
        setVisible(true);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value || "");
    };

    return (
        <Container>
            <Header />
            <MainContent $height="100vh" $heightMediaStyles="90.5vh">
                <Features>
                    <SearchFeature
                        placeholder="Search any user"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <NewUser>
                        <button onClick={handleBtnClick}>
                            <IoMdAddCircle />
                        </button>
                        {visible && <SignUp visible={visible} setVisible={setVisible} />}
                    </NewUser>
                </Features>
                <Content icon={<MdOutlinePeopleAlt />} title="All Users" height="80vh">
                    <UserCard searchTerm={searchTerm} />
                </Content>
            </MainContent>
        </Container>
    );
}