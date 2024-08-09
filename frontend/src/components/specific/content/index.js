import React from "react";
import { Container, Title } from "./styles";

export default function Content({children, title, icon, height}){
    return(
        <Container $height={height}>
            <Title>                    
                {icon}
                <h4>{title}</h4>
            </Title>
            {children}
        </Container>
    );
}