import React, { useState } from "react";
import { Container, Menu } from "./styles";
import Logo from "../../../specific/headerComponents/logo/index";
import { IoMdMenu } from "react-icons/io";
import NavMobile from "../../../specific/headerComponents/mobileHeader";

export default function MobileHeader(){
    const [visible, setVisible] = useState(false);

    const handleBtnClick = () => {
        setVisible(true);
    }

    return(
        <Container>
            <Menu>
                <button onClick={handleBtnClick}>
                    <IoMdMenu />
                </button>
                {visible && <NavMobile visible={visible} setVisible={setVisible} />}
            </Menu>
            <Logo height="9.5vh" width="60vw" />
        </Container>
    );
}