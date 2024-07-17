import React, { useContext } from "react";
import { Container } from "./styles";
import themeContext from "../../../assets/styles/theme";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function ThemeBtn(){
    const [mode, setMode] = useContext(themeContext);

    return(
        <Container>
            <button 
                className={!mode ? 'active' : ''}
                onClick={() => setMode(false)}>
                <BsSunFill /> 
            </button>
            <button 
                className={mode ? 'active' : ''}
                onClick={() => setMode(true)}>
                <BsMoonFill />
            </button>
        </Container>
    );
}