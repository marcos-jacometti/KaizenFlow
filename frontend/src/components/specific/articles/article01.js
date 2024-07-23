import React, { useEffect } from "react";
import { Container, MainContent } from "../../../assets/styles/global";
import Header from "../../common/header";
import { Text } from "./styles";
import { MdOutlineArticle } from "react-icons/md";
import Card from "../../common/card";
import Content from "../content";

export default function Article01(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return(
        <Container>
            <Header />
            <MainContent $height="auto" $gap="2vh" $margin="3vw" $bottom="3vw" $heightMediaStyles="auto">
                <Card height="60vh" width="70vw">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/NFrwxzUhfNA?si=w0AZ09iK_p2wRZFA"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        style={{ borderRadius: '1.5vh' }}
                    />
                </Card>
                <Content icon={<MdOutlineArticle />} title="History and Origin" height="auto">
                    <Text>
                        <span>
                            Kaizen, a concept deeply rooted in the philosophy of continuous improvement, finds its origins in Japan, particularly in the aftermath of World War II. The term "Kaizen" itself translates to "change for the better" or "continuous improvement" in Japanese, encapsulating its core principle of gradual, ongoing enhancement.
                        </span>
                        <h4>Post-War Japan and the Birth of Kaizen</h4>
                        <span>
                            In the years following World War II, Japan faced significant challenges in rebuilding its economy and infrastructure. It was during this period that the foundations of Kaizen were laid. Influenced by American quality management practices introduced by figures like W. Edwards Deming, Japanese industrialists and engineers sought ways to enhance productivity and quality in manufacturing processes.
                        </span>
                        <h4>Early Development and Introduction of Kaizen</h4>
                        <span>
                            The concept of Kaizen began to take shape in the 1950s when companies like Toyota started implementing systematic approaches to improve efficiency and eliminate waste. Central to Kaizen was the idea of involving all employees—from top management to frontline workers—in identifying and implementing small, incremental improvements on a daily basis.
                        </span>
                        <h4>Principles of Kaizen</h4>
                        <span>
                            At its core, Kaizen emphasizes several key principles:<br /><br />
                            - Continuous Improvement: The belief that small, continuous changes over time lead to significant improvements in quality, productivity, and efficiency. <br /><br />
                            - Respect for People: Valuing the input and involvement of every employee in the improvement process.<br /><br />
                            - Standardization and Elimination of Waste: Establishing standardized processes and eliminating unnecessary steps or activities to streamline operations.
                        </span>
                        <h4>Spread and Global Influence</h4>
                        <span>
                            Throughout the latter half of the 20th century, the principles of Kaizen gained traction not only in Japan but also internationally. Companies worldwide began adopting Kaizen methodologies as part of their quality management and operational strategies, recognizing its potential to foster a culture of innovation and efficiency.
                        </span>
                        <h4>Kaizen in Practice</h4>
                        <span>
                            Practical applications of Kaizen span various industries, from manufacturing and healthcare to service sectors. In manufacturing, Kaizen has been instrumental in optimizing production lines, reducing defects, and enhancing product quality. In healthcare, it has led to improvements in patient care processes and operational efficiency within hospitals and clinics.
                        </span>
                        <h4>Conclusion</h4>
                        <span>
                             The history and origin of Kaizen reflect a journey marked by resilience, innovation, and a steadfast commitment to continuous improvement. From its humble beginnings in post-war Japan to its global impact in diverse industries, Kaizen stands as a testament to the transformative power of small, incremental changes in pursuit of excellence. <br />
                             As organizations navigate the complexities of the modern world, the principles of Kaizen offer a timeless framework for fostering innovation, empowering employees, and achieving sustainable growth in the pursuit of continuous improvement.
                        </span>
                    </Text>
                </Content>
            </MainContent>
        </Container>
    );
}