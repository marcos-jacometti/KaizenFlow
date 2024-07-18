import React, { useEffect } from "react";
import { Container, MainContent } from "../../../assets/styles/global";
import Header from "../../common/header";
import { Content, Text, Title } from "./styles";
import { MdOutlineArticle } from "react-icons/md";

export default function Article06(){
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
                        <h4>Gemba: The Heart of Kaizen and Continuous Improvement</h4>
                    </Title>
                    <Text>
                        <span>
                            Gemba, a Japanese term meaning "the actual place," refers to the physical location where value-creating work occurs. In the context of Kaizen and lean manufacturing, Gemba represents more than just a location—it embodies the philosophy of directly observing processes, engaging with frontline employees, and continuously improving operations at the source.
                        </span>
                        <h4>Understanding Gemba</h4>
                        <span>
                            - Direct Observation: Gemba encourages managers, leaders, and improvement teams to go to the actual location where work is performed. This firsthand observation provides insights into how processes operate in real-time and allows for immediate identification of inefficiencies, waste, and opportunities for improvement.
                            <br /><br />
                            - Engagement with Employees: By being present at Gemba, leaders can interact directly with frontline employees. This engagement fosters a deeper understanding of daily challenges, gathers valuable feedback, and empowers employees to contribute ideas for improvement.
                            <br /><br />
                            - Root Cause Analysis: Gemba is instrumental in conducting root cause analysis. Instead of relying solely on reports or data, Gemba enables teams to investigate issues firsthand, identify underlying causes, and implement targeted solutions that address the root of the problem.
                        </span>
                        <h4>Principles of Gemba in Kaizen</h4>
                        <span>
                            - Continuous Improvement: Gemba embodies the principle of continuous improvement by promoting a culture of ongoing observation, reflection, and action. It encourages small, incremental changes that collectively lead to significant improvements in quality, efficiency, and safety.
                            <br /><br />
                            - Respect for People: Gemba emphasizes respect for people by valuing the knowledge, expertise, and contributions of frontline workers. It recognizes that employees at the Gemba are closest to the processes and are best positioned to identify improvement opportunities.
                            <br /><br />
                            - Gemba Walks: Leaders and improvement teams conduct Gemba walks—a structured approach to observing processes, asking questions, and listening to employees. Gemba walks are not inspections but collaborative opportunities to understand current practices and drive positive change.
                        </span>
                        <h4>Practical Applications of Gemba</h4>
                        <span>
                            - Manufacturing: In manufacturing environments, Gemba involves observing production lines, equipment operations, and inventory management practices. It focuses on reducing cycle times, eliminating defects, and optimizing workflow.
                            <br /><br />
                            - Healthcare: In healthcare settings, Gemba extends to patient care areas such as hospital wards, clinics, and operating rooms. It aims to enhance patient safety, improve care delivery processes, and reduce waiting times through direct observation and engagement with healthcare professionals.
                            <br /><br />
                            - Service Industries: In service sectors, Gemba applies to customer service interactions, call centers, and administrative processes. It seeks to streamline service delivery, improve response times, and enhance overall customer satisfaction.
                        </span>
                        <h4>Benefits of Gemba in Kaizen</h4>
                        <span>
                            - Real-Time Insights: Gemba provides real-time insights into operational challenges and opportunities, enabling timely decision-making and action.
                            <br /><br />
                            - Employee Empowerment: By involving employees in continuous improvement initiatives at the Gemba, organizations empower frontline workers to contribute ideas, implement changes, and take ownership of improvement projects.
                            <br /><br />
                            - Cultural Transformation: Embracing Gemba as a core principle fosters a culture of transparency, collaboration, and accountability throughout the organization. It promotes a shared commitment to achieving operational excellence and delivering value to customers.
                        </span>
                        <h4>Conclusion</h4>
                        <span>
                            Gemba is not just a physical location but a mindset and philosophy that drives Kaizen and continuous improvement. By embracing Gemba principles—direct observation, engagement with employees, and a commitment to ongoing improvement—organizations can cultivate a culture of innovation, efficiency, and sustainable growth. Gemba serves as the foundation for Kaizen initiatives, empowering teams to make informed decisions, implement effective solutions, and achieve excellence in their operations.
                        </span>
                    </Text>
                </Content>
            </MainContent>
        </Container>
    );
}