import React, { useEffect } from "react";
import { Container, MainContent } from "../../../assets/styles/global";
import Header from "../../common/header";
import { Content, Text, Title } from "./styles";
import { MdOutlineArticle } from "react-icons/md";

export default function Article10(){
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
                        <h4>Case Studies</h4>
                    </Title>
                    <Text>
                        <span>
                            Exploring real-world examples can provide valuable insights into how Kaizen principles are successfully applied in various service sectors. Here are some notable case studies showcasing the impact of Kaizen in improving service quality, efficiency, and customer satisfaction.
                        </span>
                        <h4>Case Study 1: Virginia Mason Medical Center</h4>
                        <span>
                            Problem: Virginia Mason Medical Center faced challenges with patient wait times, workflow inefficiencies, and overall patient satisfaction.
                        </span>
                        <h4>Kaizen Implementation:</h4>
                        <span>
                            - Value Stream Mapping: The hospital used value stream mapping to identify inefficiencies in patient care processes.<br /><br />
                            - Kaizen Workshops: Cross-functional teams conducted Kaizen workshops to redesign workflows, focusing on reducing patient wait times and improving care - delivery.<br /><br />
                            - Standard Work: Standardized procedures were developed to ensure consistency in patient care and reduce variability.
                        </span>
                        <h4>Results:</h4>
                        <span>
                            - Reduced Wait Times: Patient wait times were significantly reduced, improving overall patient satisfaction.<br /><br />
                            - Increased Efficiency: Streamlined processes led to more efficient use of resources and reduced operational costs.<br /><br />
                            - Enhanced Patient Care: Improved workflows resulted in higher quality of care and better patient outcomes.
                        </span>
                    </Text>
                </Content>
            </MainContent>
        </Container>
    );
}