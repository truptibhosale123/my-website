// import React from "react";
// import styled from "styled-components";
// import { IconContext } from 'react-icons/lib';
// import { SidebarData } from "./SidebarData";
// import Submenu from "./Submenu";

// const NavIcon = styled.div`
//     font-size : 2rem;
//     height : 80px;
//     display : flex;
//     justify-content : flex-start;
//     align-items : center;
// `
// const SidebarNav = styled.nav`
//     background-color : black;
//     width : 200px;
//     height : 100vh;
//     display : flex;
//     justify-content : center;
//     position : fixed;
//     top : 0;
//     transition : 100ms ease-in-out;
//     z-index : 10;
// `

// const SidebarWrap = styled.div`
//     width : 100%;
// `


// function Sidebar() {
//     return (
//         <>
//             <IconContext.Provider value={{ color: "white", size: "1rem" }}>
//                 <SidebarNav >
//                     <SidebarWrap >
//                         <NavIcon>
//                             <h2 style={{
//                                 textAlign: "center",
//                                 color: "white",
//                                 fontSize: "1rem",
//                                 marginLeft:"45px"
//                             }

//                             }>
//                                 Trupti Bhosale
//                             </h2>
//                         </NavIcon>

//                         {SidebarData.map((item, index) => {
//                             return <Submenu item={item} index={index} />
//                         })}
//                     </SidebarWrap>
//                 </SidebarNav>


//             </IconContext.Provider>
//         </>

//     );
// }

// export default Sidebar;

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
    width: ${props => (props.isOpen ? '250px' : '0')}; /* Width changes based on isOpen */
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
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <IconContext.Provider value={{ size: "1rem"}}>
                <SidebarNav isOpen={isOpen}>
                    <SidebarWrap>
                        <NavIcon>

                        </NavIcon>

                        {SidebarData.map((item, index) => {
                            return <Submenu item={item} index={index} key={index} />
                        })}
                    </SidebarWrap>
                </SidebarNav>

                <ToggleButton onClick={handleToggle} >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </ToggleButton>
            </IconContext.Provider>
        </>
    );
}

export default Sidebar;