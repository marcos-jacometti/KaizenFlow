import React from "react";
import { LogoContainer } from "./styles";
import { Link } from "react-router-dom";

export default function Logo({height, width}){
    return(
        <Link to="/">
            <LogoContainer height={height} width={width} />
        </Link>
    );
}