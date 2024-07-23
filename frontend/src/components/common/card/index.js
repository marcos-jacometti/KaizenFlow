import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function Card({height, width, background, children, text, link, justify, color, align, direction, padding}){
    return(
        <Link to={link} className="link">
            <Container 
                $height={height} 
                $width={width}
                $background={background} 
                $justify={justify} 
                $color={color} 
                $align={align} 
                $direction={direction}
                $padding={padding}
            >
                {children}
                <h4>{text}</h4>
            </Container>
        </Link>
    );
}