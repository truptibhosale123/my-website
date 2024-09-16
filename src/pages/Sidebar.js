import React from "react";
import styled from "styled-components";
import { IconContext } from 'react-icons/lib';
import { SidebarData } from "./SidebarData";
import Submenu from "./Submenu";

const NavIcon = styled.div`
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
 
    transition : 100ms ease-in-out;
    z-index : 10;
`

const SidebarWrap = styled.div`
    width : 100%;
`


function Sidebar() {
    return (
        <>
            <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
                <SidebarNav >
                    <SidebarWrap >
                        <NavIcon>
                            <h2 style={{
                                textAlign: "center",
                                color: "white",
                                marginLeft: "50px",
                                fontSize: "1.2rem"
                            }

                            }>
                                Trupti Bhosale
                            </h2>
                        </NavIcon>

                        {SidebarData.map((item, index) => {
                            return <Submenu item={item} index={index} />
                        })}
                    </SidebarWrap>
                </SidebarNav>


            </IconContext.Provider>
        </>

    );
}

export default Sidebar;