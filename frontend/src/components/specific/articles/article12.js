import React, { useEffect } from "react";
import { Container, MainContent } from "../../../assets/styles/global";
import Header from "../../common/header";
import { Content, Text, Title } from "./styles";
import { MdOutlineArticle } from "react-icons/md";

export default function Article12(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return(
        <Container>
            <Header />
            <MainContent $height="auto" $gap="2vh" $margin="3vw" $bottom="3vw" $heightMediaStyles="auto">
                <Content>
                    <Title>
                        <MdOutlineArticle />
                        <h4>Kaizen and Lean Manufacturing</h4>
                    </Title>
                    <Text>
                        <span>
                            Kaizen and Lean Manufacturing are two interrelated methodologies that focus on continuous improvement, waste reduction, and efficiency enhancement. Together, they form a powerful approach for achieving operational excellence in manufacturing and beyond.
                        </span>
                        <h4>Kaizen:</h4>
                        <span>
                            - Definition: Kaizen, a Japanese term meaning "change for the better," emphasizes small, continuous improvements involving all employees, from top management to frontline workers.<br /><br />
                            - Core Principles: Continuous improvement, respect for people, waste reduction, and standardization.<br /><br />
                            - Focus: Enhancing processes incrementally through employee involvement and systematic problem-solving.
                        </span>
                        <h4>Lean Manufacturing:</h4>
                        <span>
                            - Definition: Lean Manufacturing is a systematic approach aimed at minimizing waste (Muda) without sacrificing productivity. Originating from the Toyota Production System (TPS), it focuses on delivering value to the customer efficiently.<br /><br />
                            - Core Principles: Value, value stream mapping, flow, pull, and perfection.<br /><br />
                            - Focus: Creating value by eliminating waste and optimizing workflows to achieve maximum efficiency.
                        </span>
                        <h4>Synergy Between Kaizen and Lean Manufacturing</h4>
                        <span>
                            Kaizen and Lean Manufacturing are complementary. Lean provides the framework and tools for identifying and eliminating waste, while Kaizen drives the continuous improvement mindset needed to sustain Lean practices. Together, they enhance operational efficiency, quality, and responsiveness.
                        </span>
                        <h4>Conclusion</h4>
                        <span>
                            Kaizen and Lean Manufacturing together create a robust framework for achieving operational excellence. By combining the structured waste elimination of Lean with the continuous improvement mindset of Kaizen, organizations can enhance efficiency, quality, and customer satisfaction. This synergistic approach fosters a culture of innovation and engagement, driving sustainable growth and competitiveness in today’s dynamic market environment.
                        </span>
                    </Text>
                </Content>
            </MainContent>
        </Container>
    );
}