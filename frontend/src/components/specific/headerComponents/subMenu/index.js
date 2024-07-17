import React from "react";
import { SubMenuContainer } from "./styles";
import { Link, useLocation } from "react-router-dom";

export default function SubMenu({ link, linkTwo, title, titleTwo }) {
  const location = useLocation();
  const isActiveLink = location.pathname === link;
  const isActiveLinkTwo = location.pathname === linkTwo;

  return (
    <SubMenuContainer>
      <Link to={link} className={isActiveLink? "link active" : "link"}>
        {title}
      </Link>
      <Link to={linkTwo} className={isActiveLinkTwo? "link active" : "link"}>
        {titleTwo}
      </Link>
    </SubMenuContainer>
  );
}