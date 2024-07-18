import React, { useEffect } from "react";
import { Container, MainContent } from "../../../assets/styles/global";
import Header from "../../common/header";
import { Content, Text, Title } from "./styles";
import { MdOutlineArticle } from "react-icons/md";

export default function Article04(){
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
                        <h4>5S</h4>
                    </Title>
                    <Text>
                        <span>
                            The 5S methodology is a foundational tool within Kaizen for organizing the workplace to improve efficiency, safety, and overall effectiveness. Originating from Japan and popularized globally, 5S is an acronym derived from five Japanese words: Seiri (Sort), Seiton (Set in Order), Seiso (Shine), Seiketsu (Standardize), and Shitsuke (Sustain). Each "S" represents a specific step aimed at creating a systematic approach to workplace organization and cleanliness.
                        </span>
                        <h4>Sort (Seiri)</h4>
                        <span>
                            The first step, Sort, involves separating necessary items from unnecessary ones in the workplace:<br /><br />

                            - Elimination of Waste: Removing unnecessary tools, materials, and equipment that are not needed for current operations.<br /><br />
                            - Organizational Efficiency: Streamlining workspaces to reduce clutter and improve accessibility to essential items.<br /><br />
                            - Visual Management: Implementing visual cues (like color-coded tags) to distinguish between necessary and unnecessary items.
                        </span>
                        <h4>Set in Order (Seiton)</h4>
                        <span>
                            Set in Order focuses on organizing essential items and tools in a structured manner:<br /><br />

                            - Optimized Layout: Arranging tools and equipment in ergonomic and efficient layouts.<br /><br />
                            - Standardized Storage: Designating specific locations for each item to facilitate quick retrieval and reduce search time.<br /><br />
                            - Accessibility: Ensuring that frequently used items are easily accessible, promoting smooth workflow and minimizing wasted time.
                        </span>
                        <h4>Shine (Seiso)</h4>
                        <span>
                            Shine emphasizes the importance of cleanliness and maintenance in the workplace:<br /><br />

                            - Cleaning Practices: Establishing regular cleaning schedules to maintain cleanliness and hygiene standards.<br /><br />
                            - Preventive Maintenance: Conducting routine inspections and minor repairs to ensure equipment and tools are in optimal condition.<br /><br />
                            - Employee Engagement: Involving employees in maintaining a clean and organized workspace to instill a sense of ownership and pride.
                        </span>
                        <h4>Standardize (Seiketsu)</h4>
                        <span>
                            Standardize aims to establish consistent practices and procedures across the organization:<br /><br />

                            - Documented Procedures: Documenting 5S procedures and guidelines to ensure consistency in implementation.<br /><br />
                            - Training and Education: Providing training to employees on 5S principles and their roles in maintaining standards.<br /><br />
                            - Continuous Improvement: Encouraging feedback from employees to refine and improve 5S practices over time.
                        </span>
                        <h4>Sustain (Shitsuke)</h4>
                        <span>
                            Sustain focuses on maintaining and improving the gains achieved through continuous reinforcement:<br /><br />

                            - Cultural Integration: Embedding 5S principles into the organizational culture and values.<br /><br />
                            - Leadership Commitment: Demonstrating leadership commitment to 5S through regular audits, reviews, and support.<br /><br />
                            - Recognition and Rewards: Recognizing and rewarding teams and individuals who demonstrate exemplary adherence to 5S principles.
                        </span>
                        <h4>Conclusion</h4>
                        <span>
                            In conclusion, the 5S methodology is a powerful tool within Kaizen, fostering a disciplined approach to workplace organization, cleanliness, and efficiency. By implementing and sustaining 5S principles, organizations can create a foundation for continuous improvement, operational excellence, and a culture of innovation that adapts to changing business environments and customer expectations.
                        </span>
                    </Text>
                </Content>
            </MainContent>
        </Container>
    );
}