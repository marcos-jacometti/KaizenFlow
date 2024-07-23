import React, { useEffect } from "react";
import { Container, MainContent } from "../../../assets/styles/global";
import Header from "../../common/header";
import { Text } from "./styles";
import { MdOutlineArticle } from "react-icons/md";
import Card from "../../common/card";
import Content from "../content";

export default function Article13(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return(
        <Container>
            <Header />
            <MainContent $height="auto" $gap="2vh" $margin="3vw" $bottom="3vw" $heightMediaStyles="auto">
                <Card height="60vh" width="60vw">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/4EDYfSl-fmc?si=kYm3wZNubRFzAlFy"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        style={{ borderRadius: '1.5vh' }}
                    />
                </Card>
                <Content icon={<MdOutlineArticle />} title="Kaizen and Six Sigma" height="auto">
                    <Text>
                        <span>
                            Kaizen and Six Sigma are two powerful methodologies for process improvement and quality management. While Kaizen focuses on continuous, incremental improvements involving all employees, Six Sigma aims for near-perfect quality by reducing variability and defects through a data-driven approach. When combined, these methodologies can drive significant enhancements in efficiency, quality, and customer satisfaction.
                        </span>
                        <h4>Six Sigma:</h4>
                        <span>
                            - Definition: A methodology focused on improving the quality of process outputs by identifying and removing causes of defects and minimizing variability in manufacturing and business processes.<br /><br />
                            - Core Principles: Data-driven decision-making, customer focus, defect reduction, and process control.<br /><br />
                            - Focus: Achieving near-perfect quality (3.4 defects per million opportunities) through structured methodologies such as DMAIC (Define, Measure, Analyze, Improve, Control) and DMADV (Define, Measure, Analyze, Design, Verify).
                        </span>
                        <h4>Synergy Between Kaizen and Six Sigma</h4>
                        <span>
                            Kaizen and Six Sigma complement each other well. Kaizen provides a continuous improvement culture and employee involvement, while Six Sigma offers rigorous, data-driven problem-solving techniques. Together, they create a robust framework for achieving operational excellence and high-quality standards.
                        </span>
                        <h4>Key Concepts and Tools</h4>
                        <span>
                            DMAIC Cycle:<br />
                            Six Sigma Tool: DMAIC is a structured problem-solving methodology used to improve existing processes.<br />
                            Kaizen Application: DMAIC can be used within Kaizen events to systematically address specific improvement opportunities.<br /><br />
                            PDCA Cycle (Plan-Do-Check-Act):<br />
                            Kaizen Tool: PDCA is an iterative problem-solving approach for continuous improvement.<br />
                            Six Sigma Application: PDCA complements DMAIC by providing a framework for implementing and sustaining improvements.<br /><br />
                            Value Stream Mapping (VSM):<br />
                            Kaizen Tool: VSM is used to visualize and analyze the flow of materials and information.<br />
                            Six Sigma Application: VSM helps identify process inefficiencies and areas for defect reduction.<br /><br />
                            Root Cause Analysis (RCA):<br />
                            Six Sigma Tool: RCA techniques such as the 5 Whys and Fishbone Diagram are used to identify underlying causes of defects.<br />
                            Kaizen Application: RCA is integral to Kaizen for addressing and resolving problems at their source.<br /><br />
                            Statistical Process Control (SPC):<br />
                            Six Sigma Tool: SPC uses statistical methods to monitor and control processes.<br />
                            Kaizen Application: SPC data can inform Kaizen initiatives, providing insights into process variability and performance.
                        </span>
                        <h4>Conclusion</h4>
                        <span>
                            Kaizen and Six Sigma together offer a comprehensive approach to achieving operational excellence and high-quality standards. By leveraging Kaizen’s continuous improvement culture and Six Sigma’s data-driven methodologies, organizations can enhance efficiency, reduce defects, and achieve sustainable growth. This synergy not only improves processes but also fosters a culture of innovation and engagement, driving long-term success in a competitive marketplace.
                        </span>
                    </Text>
                </Content>
            </MainContent>
        </Container>
    );
}