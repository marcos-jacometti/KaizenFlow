import React from "react";
import { ButtonContainer } from "./styles";
import { Link } from "react-router-dom";

export default function Button({onClick, link, title}){
    return(
        <ButtonContainer>
            <button onClick={onClick}>
                <Link to={link} className="link">
                    {title}
                </Link>
            </button>
        </ButtonContainer>
    );
}