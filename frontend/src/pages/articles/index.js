import React from "react";
import { Container, MainContent } from "../../assets/styles/global";
import Header from "../../components/common/header";
import { Cards, Content, Title } from "./styles";
import { MdOutlineArticle } from "react-icons/md";
import Card from "../../components/specific/card";
import img from "../../services/utils/loadImages";

export default function Articles(){
    return(
        <Container>
            <Header />
            <MainContent $height="auto" $gap="2vh" $margin="3vw" $bottom="3vw" $heightMediaStyles="auto">
                <Content $height="60vh">
                    <Title>
                        <MdOutlineArticle />
                        <h4>Introduction to Kaizen</h4>
                    </Title>
                    <Cards>
                        <Card height="40vh" width="20vw" text="History and Origin" background={img['1.png']} link="/article01" />
                        <Card height="40vh" width="20vw" text="Basic Principles" background={img['2.png']} link="/article02" />
                    </Cards>
                </Content>

                <Content $height="110vh">
                    <Title>
                        <MdOutlineArticle />
                        <h4>Kaizen Concepts and Tools</h4>
                    </Title>
                    <Cards>
                        <Card height="40vh" width="20vw" text="PDCA Cycle (Plan, Do, Check, Act)" background={img['3.png']} link="/article03" />
                        <Card height="40vh" width="20vw" text="5S" background={img['4.png']} link="/article04" />
                        <Card height="40vh" width="20vw" text="Kaizen Blitz/Kaizen Events" background={img['5.png']} link="/article05" />
                        <Card height="40vh" width="20vw" text="Gemba" background={img['6.png']} link="/article06" />
                    </Cards>
                </Content>

                <Content $height="60vh">
                    <Title>
                        <MdOutlineArticle />
                        <h4>Applying Kaizen</h4>
                    </Title>
                    <Cards>
                        <Card height="40vh" width="20vw" text="Kaizen in the Workplace" background={img['7.png']} link="/article07" />
                        <Card height="40vh" width="20vw" text="Kaizen in Manufacturing Processes" background={img['8.png']} link="/article08" />
                        <Card height="40vh" width="20vw" text="Kaizen in Services" background={img['9.png']} link="/article09" />
                    </Cards>
                </Content>

                <Content $height="60vh">
                    <Title>
                        <MdOutlineArticle />
                        <h4>Success Stories</h4>
                    </Title>
                    <Cards>
                        <Card height="40vh" width="20vw" text="Case Studies" background={img['10.png']} link="/article10" />
                        <Card height="40vh" width="20vw" text="Interviews with Experts" background={img['11.png']} link="/article11" />
                    </Cards>
                </Content>

                <Content $height="60vh">
                    <Title>
                        <MdOutlineArticle />
                        <h4>Advancing Kaizen</h4>
                    </Title>
                    <Cards>
                        <Card height="40vh" width="20vw" text="Kaizen and Lean Manufacturing" background={img['12.png']} link="/article12" />
                        <Card height="40vh" width="20vw" text="Kaizen and Six Sigma" background={img['13.png']} link="/article13" />
                        <Card height="40vh" width="20vw" text="Technologies and Kaizen" background={img['14.png']} link="/article14" />
                    </Cards>
                </Content>
            </MainContent>
        </Container>
    );
}