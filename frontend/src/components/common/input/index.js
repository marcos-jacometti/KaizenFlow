import React from "react";
import { InputContainer } from "./styles";

export default function Input({icon, type, id, placeholder, value, onChange, width}){
    return(
        <InputContainer $width={width}>
            {icon}
            <input type={type} id={id} placeholder={placeholder} value={value} onChange={onChange} required />
        </InputContainer>
    );
}