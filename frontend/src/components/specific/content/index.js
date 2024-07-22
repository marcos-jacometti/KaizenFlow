import React from "react";
import { Container, Title } from "./styles";
import { MdOutlineArticle } from "react-icons/md";

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