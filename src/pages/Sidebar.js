import React, { useState } from "react";
import styled from "styled-components";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { Link } from "react-router-dom";

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

    return (
        <>
            <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                <Nav>
                    <NavIcon>
                        <FaIcons.FaBars onClick={showSidebar} />



                    </NavIcon>

                    <h1 style={{
                        textAlign: "center",
                        color: "white",
                        marginLeft: "200px"
                    }

                    }>
                        Trupti Bhosale
                    </h1>
                </Nav>

                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon>
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>
                    </SidebarWrap>
                </SidebarNav>


            </IconContext.Provider>
        </>

    );
}

export default Sidebar;