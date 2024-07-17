import React, { useState } from "react";
import { Container, Close } from "./styles";
import { IoClose } from "react-icons/io5";
import NavBar from "../navBar/index";
import { LuHome } from "react-icons/lu";
import { MdOutlineArticle, MdOutlinePeopleAlt } from "react-icons/md";
import { BsClipboard2Data } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import SubMenu from "../subMenu/index";
import { BiSupport } from "react-icons/bi";

export default function NavMobile({visible, setVisible}){
    const [visibility, setVisibility] = useState({
        settings: true,
        resources: false
    });

    const handleToggle = (section) => {
        setVisibility(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    return(
        <Container $visible={visible}>
            <Close>
                <button onClick={() => setVisible(false)}>
                    <IoClose />
                </button>
            </Close>
            <nav>
                <NavBar link="/" svg={<LuHome />} title="Home" />
                <NavBar link="/articles" svg={<MdOutlineArticle />} title="Articles" />
                <NavBar 
                    onClick={() => handleToggle('settings')}
                    svg={<MdOutlinePeopleAlt />}
                    title="Team Members"
                    arrow={visibility.settings ? <IoIosArrowUp /> : <IoIosArrowDown />}
                >
                    {visibility.settings && <SubMenu link="/teams" linkTwo="/teams" title="Team A" titleTwo="Team B" />}
                </NavBar>
                <NavBar link="/graphics" svg={<BsClipboard2Data />} title="Graphics" />
                <NavBar link="/configs" svg={<GoGear />} title="Configurations" />
                <NavBar link="" svg={<BiSupport />} title="Suport" />
            </nav>
        </Container>
    );
}