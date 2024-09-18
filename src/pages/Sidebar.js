import React, { useState } from "react";
import styled from "styled-components";
import { IconContext } from 'react-icons/lib';
import { SidebarData } from "./SidebarData";
import Submenu from "./Submenu";
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the toggle button

const NavIcon = styled.div`
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center
`;

const SidebarNav = styled.nav`
    background-color: black;
    width: ${props => (props.isopen ? '250px' : '0')}; /* Width changes based on isopen */
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    overflow-x: hidden;
    transition: width 300ms ease;
    z-index: 10;
    margin-top:60px
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const ToggleButton = styled.div`
    position: fixed;
    top: 10px;
    left: 10px;
    font-size: 2rem;
    cursor: pointer;
    z-index: 15;
    margin-top:60px;
    background-color:black; 
    padding: 10px; 
    color:white;
`;

function Sidebar() {
    const [isopen, setIsopen] = useState(true);

    const handleToggle = () => {
        setIsopen(!isopen);
    };

    return (
        <>
            <IconContext.Provider value={{ size: "1rem"}}>
                <SidebarNav isopen={isopen}>
                    <SidebarWrap>
                        <NavIcon>

                        </NavIcon>

                        {SidebarData.map((item, index) => {
                            return <Submenu item={item} index={index} key={index} />
                        })}
                    </SidebarWrap>
                </SidebarNav>

                <ToggleButton onClick={handleToggle} >
                    {isopen ? <FaTimes /> : <FaBars />}
                </ToggleButton>
            </IconContext.Provider>
        </>
    );
}

export default Sidebar;