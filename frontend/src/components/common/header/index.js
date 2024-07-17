import React from "react";
import DesktopHeader from "./desktop";
import MobileHeader from "./mobile";
import { useMediaQuery } from "react-responsive";

export default function Header(){
    const isMobile = useMediaQuery({query: '(max-width: 767px)'});
    const isDesktop = useMediaQuery({query: '(min-width: 768px)'});

    return(
        <>
            {isMobile && <MobileHeader />}
            {isDesktop && <DesktopHeader />}
        </>
    );
}