import React from "react";
import { ButtonContainer } from "./styles";
import { Link } from "react-router-dom";

export default function Button({onClick, link, title, background, border, color}){
    return(
        <ButtonContainer $background={background} $border={border} $color={color}>
            <button onClick={onClick}>
                <Link to={link} className="link">
                    {title}
                </Link>
            </button>
        </ButtonContainer>
    );
}