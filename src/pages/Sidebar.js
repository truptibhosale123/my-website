import React, { useState } from "react";
import styled from "styled-components";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import Submenu from "./Submenu";

const Nav = styled.div`
    background-color : black;
    display : flex;
    justify-content : flex-start;
    align-items : center;
`
const NavIcon = styled(Link)`
    margin-left : 2rem;
    font-size : 2rem;
    height : 80px;
    display : flex;
    justify-content : flex-start;
    align-items : center;
`
const SidebarNav = styled.nav`
    background-color : black;
    width : 250px;
    height : 100vh;
    display : flex;
    justify-content : center;
    position : fixed;
    top : 0;
    left : ${({ sidebar }) => (sidebar ? "0" : "-100%")
    };
    transition : 100ms ease-in-out;
    z-index : 10;
`

const SidebarWrap = styled.div`
    width : 100%;
`


function Sidebar() {
    const [sidebar, setsidebar] = useState(false);

    const showSidebar = () => {
        setsidebar(!sidebar);
    }
    const closeSidebar = () => {
        setsidebar(false); // This will close the sidebar
    };

    return (
        <>
            <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
                <Nav>
                    <NavIcon>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>

                    <h2 style={{
                        textAlign: "center",
                        color: "white",
                        marginLeft: "50px",
                        fontSize: "1.2rem"
                    }

                    }>
                        Trupti Bhosale
                    </h2>
                </Nav>

                <SidebarNav sidebar={sidebar} onClick={closeSidebar}>
                    <SidebarWrap>
                        <NavIcon>
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                            return <Submenu item={item} index={index}/>
                        })}
                    </SidebarWrap>
                </SidebarNav>


            </IconContext.Provider>
        </>

    );
}

export default Sidebar;