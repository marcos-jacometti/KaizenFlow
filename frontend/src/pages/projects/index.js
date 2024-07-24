import React, { useState } from "react";
import { Container, MainContent } from "../../assets/styles/global";
import Header from "../../components/common/header";
import { Features, NewUser } from "./styles";
import SearchFeature from "../../components/specific/searchFeature";
import { IoMdAddCircle } from "react-icons/io";
import Content from "../../components/specific/content";
import { MdOutlineArticle } from "react-icons/md";
import CreateProject from "../../components/specific/projects/createProject";
import ProjectCard from "../../components/specific/projects/projectsCards";

export default function Projects(){
    const [visible, setVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const handleBtnClick = () => {
        setVisible(true);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value || "");
    };

    return(
        <Container>
            <Header />
            <MainContent $height="100vh" $heightMediaStyles="90.5vh">
                <Features>
                    <SearchFeature
                        placeholder="Search any project"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <NewUser>
                        <button onClick={handleBtnClick}>
                            <IoMdAddCircle />
                        </button>
                        {visible && <CreateProject visible={visible} setVisible={setVisible} />}
                    </NewUser>
                </Features>
                <Content icon={<MdOutlineArticle />} title="All Projects" height="80vh">
                    <ProjectCard searchTerm={searchTerm} />
                </Content>
            </MainContent>
        </Container>
    );
}