import React from "react";
import { CallLogo, HelpContainer } from "./styles";
import { BiSupport } from "react-icons/bi";
import Button from "../../../common/button";

export default function HelpCenter(){
    return(
        <HelpContainer>
            <CallLogo>
                <BiSupport />
            </CallLogo>
            <h3>Help Center</h3>
            <span>Talk to us if you have any problems</span>
            <Button link="" title="Support" background="#8906E6" border="none" color="#fff" />
        </HelpContainer>
    );
}