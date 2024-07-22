import React, { useState } from "react";
import { HeaderContainer } from "./styles";
import Logo from "../../../specific/headerComponents/logo";
import NavBar from "../../../specific/headerComponents/navBar";
import { LuBookMarked, LuHome } from "react-icons/lu";
import { MdOutlineArticle, MdOutlinePeopleAlt } from "react-icons/md";
import { BsClipboard2Data } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import SubMenu from "../../../specific/headerComponents/subMenu";
import HelpCenter from "../../../specific/headerComponents/helpCenter";

export default function DesktopHeader() {
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

    return (
        <HeaderContainer>
            <Logo height="12vh" width="16vw" />
            <nav>
                <NavBar link="/" svg={<LuHome />} title="Home" />
                <NavBar link="/classes" svg={<LuBookMarked />} title="Classes" />
                <NavBar link="/articles" svg={<MdOutlineArticle />} title="Articles" />
                <NavBar 
                    onClick={() => handleToggle('settings')}
                    svg={<MdOutlinePeopleAlt />}
                    title="Members"
                    arrow={visibility.settings ? <IoIosArrowUp /> : <IoIosArrowDown />}
                >
                    {visibility.settings && <SubMenu link="/teamA" linkTwo="/allUsers" title="Your User" titleTwo="All Users" />}
                </NavBar>
                <NavBar link="/graphics" svg={<BsClipboard2Data />} title="Charts" />
                <NavBar link="/configs" svg={<GoGear />} title="Configurations" />
            </nav>
            <HelpCenter />
        </HeaderContainer>
    );
}