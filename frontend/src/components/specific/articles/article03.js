import React, { useEffect } from "react";
import { Container, MainContent } from "../../../assets/styles/global";
import Header from "../../common/header";
import { Text } from "./styles";
import { MdOutlineArticle } from "react-icons/md";
import Card from "../../common/card";
import Content from "../content";

export default function Article03(){
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
                        src="https://www.youtube.com/embed/LoDs8tBcQvQ?si=KEhfwZOkJLMogqRq"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        style={{ borderRadius: '1.5vh' }}
                    />
                </Card>
                <Content icon={<MdOutlineArticle />} title="PDCA Cycle" height="auto">
                    <Text>
                        <span>
                            The PDCA cycle, also known as the Deming Cycle or Plan-Do-Check-Act, is a fundamental tool within the Kaizen methodology for achieving continuous improvement. This systematic approach provides a structured framework for organizations to plan, implement, monitor, and adjust processes to drive incremental enhancements in quality, efficiency, and effectiveness.
                        </span>
                        <h4>Plan (P)</h4>
                        <span>
                            The first stage of the PDCA cycle involves Planning. During this phase, organizations identify objectives and goals for improvement. Key activities include: <br /><br />

                            - Problem Identification: Defining the specific issue or area for improvement.<br /><br />
                            - Setting Goals: Establishing clear, measurable objectives that align with organizational priorities.<br /><br />
                            - Developing Plans: Creating detailed plans and strategies for implementing changes.
                        </span>
                        <h4>Do (D)</h4>
                        <span>
                            The Do phase focuses on implementing the plans developed during the planning stage. Key activities include:<br /><br />

                            - Implementing Changes: Executing the planned improvements or changes in processes.<br /><br />
                            - Training and Communication: Providing necessary training to employees and ensuring effective communication of changes.<br /><br />
                            - Documenting: Recording data and information related to the changes made.
                        </span>
                        <h4>Check (C)</h4>
                        <span>
                            In the Check phase, organizations evaluate the results of the implemented changes. Key activities include:<br /><br />

                            - Monitoring Performance: Collecting data and metrics to assess the impact of changes on key performance indicators (KPIs).<br /><br />
                            - Analyzing Data: Analyzing the collected data to determine whether the objectives and goals set in the planning phase are being met.<br /><br />
                            - Identifying Issues: Identifying any deviations from expected outcomes and understanding root causes.
                        </span>
                        <h4>Act (A)</h4>
                        <span>
                            The final Act phase involves taking appropriate actions based on the findings from the check phase to further improve processes. Key activities include:<br /><br />

                            - Adjusting Plans: Modifying plans and strategies based on the data and insights gathered.<br /><br />
                            - Implementing Solutions: Implementing corrective actions or further improvements identified during the evaluation process.<br /><br />
                            - Standardizing: Standardizing successful practices and integrating them into regular operations.
                        </span>
                        <h4>Conclusion</h4>
                        <span>
                            In conclusion, the PDCA cycle is a powerful tool within the Kaizen methodology, providing a structured approach to drive continuous improvement and achieve organizational excellence. By embracing the iterative nature of Plan, Do, Check, Act, organizations can effectively identify opportunities for enhancement, implement changes, monitor results, and continuously adapt to meet evolving challenges and opportunities in today's dynamic business environment.
                        </span>
                    </Text>
                </Content>
            </MainContent>
        </Container>
    );
}