import React, { useEffect } from "react";
import { Container, MainContent } from "../../../assets/styles/global";
import Header from "../../common/header";
import { Content, Text, Title } from "./styles";
import { MdOutlineArticle } from "react-icons/md";

export default function Article02(){
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
                        <h4>Basic Principles of Kaizen</h4>
                    </Title>
                    <Text>
                        <span>
                            Kaizen, rooted in the Japanese philosophy of continuous improvement, is underpinned by several fundamental principles that guide its application across various industries. These principles not only define the essence of Kaizen but also shape its effectiveness in fostering a culture of ongoing enhancement and efficiency.
                        </span>
                        <h4>Principle 1: Continuous Improvement</h4>
                        <span>
                            At its core, Kaizen advocates for continuous improvement through small, incremental changes. This principle emphasizes the idea that sustained progress arises from consistently identifying and implementing improvements, no matter how small, in every aspect of an organization's operations.
                        </span>
                        <h4>Principle 2: Respect for People</h4>
                        <span>
                            Kaizen places a strong emphasis on valuing the input and involvement of all employees. This principle recognizes that frontline workers possess invaluable insights into daily operations and are instrumental in identifying improvement opportunities. By empowering employees and fostering a collaborative environment, Kaizen cultivates a culture of engagement and innovation.
                        </span>
                        <h4>Principle 3: Elimination of Waste</h4>
                        <span>
                            Central to Kaizen is the concept of eliminating waste (Muda). Waste can manifest in various forms, including excess inventory, overproduction, unnecessary movement, defects, and waiting times. By identifying and eliminating waste, organizations can streamline processes, reduce costs, and enhance overall efficiency.
                        </span>
                        <h4>Principle 4: Standardization</h4>
                        <span>
                            Kaizen promotes the establishment of standardized processes (Standardization) to ensure consistency and reliability in operations. Standardization not only simplifies workflows but also facilitates continuous improvement by providing a baseline for evaluating and implementing changes.
                        </span>
                        <h4>Principle 5: Empirical Approach</h4>
                        <span>
                            Kaizen encourages an empirical approach to problem-solving and improvement. This involves using data and evidence to inform decisions, test hypotheses, and measure the impact of changes. By adopting a data-driven mindset, organizations can make informed improvements that yield tangible results.
                        </span>
                        <h4>Principle 6: Teamwork and Collaboration</h4>
                        <span>
                            Collaboration across all levels of an organization is crucial to the success of Kaizen initiatives. Teams are encouraged to work together, share knowledge, and brainstorm ideas for improvement. This collaborative approach not only enhances creativity but also fosters a sense of ownership and collective responsibility for achieving organizational goals.
                        </span>
                        <h4>Principle 7: Kaizen Events and Blitzes</h4>
                        <span>
                            Kaizen events or blitzes are focused, time-bound initiatives aimed at addressing specific challenges or opportunities. These events bring together cross-functional teams to intensively analyze processes, identify improvement opportunities, and implement changes rapidly. Kaizen events help organizations achieve significant improvements in a short period while reinforcing teamwork and continuous learning.
                        </span>
                        <h4>Principle 8: Customer Focus</h4>
                        <span>
                            Lastly, Kaizen emphasizes the importance of customer focus. By understanding and meeting customer needs and expectations, organizations can direct their improvement efforts towards enhancing product quality, service delivery, and overall customer satisfaction.
                        </span>
                        <h4>Conclusion</h4>
                        <span>
                            In conclusion, the basic principles of Kaizen form a cohesive framework for driving continuous improvement and operational excellence. By embracing these principles—continuous improvement, respect for people, waste elimination, standardization, empirical approach, teamwork, Kaizen events, and customer focus—organizations can cultivate a culture of innovation, efficiency, and sustainable growth. As businesses navigate evolving market dynamics and customer expectations, the principles of Kaizen provide a timeless guide for achieving excellence through incremental and collaborative improvements.
                        </span>
                    </Text>
                </Content>
            </MainContent>
        </Container>
    );
}