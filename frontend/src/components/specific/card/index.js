import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function Card({height, width, background, text, link}){
    return(
        <Link to={link} className="link">
            <Container $height={height} $width={width} $background={background}>
            <h4>{text}</h4>
            </Container>
        </Link>
    );
}