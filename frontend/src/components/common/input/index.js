import React from "react";
import { InputContainer } from "./styles";

export default function Input({icon, type, id, placeholder, value, onChange, width, readOnly}){
    return(
        <InputContainer $width={width}>
            {icon}
            <input type={type} id={id} placeholder={placeholder} value={value} onChange={onChange} readOnly={readOnly} required />
        </InputContainer>
    );
}