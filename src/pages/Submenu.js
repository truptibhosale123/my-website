import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"; 

const SidebarLink = styled(Link)`
    display: flex;
    color: white;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 1rem;

    &:hover{
    background-color: gray;
    cursor: pointer;
    border-left: 5px solid green;
    }
`
const SidebarLabel = styled.span`
    margin-left: 16px;
`
const DropdownLink = styled(Link)`
    background: black;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 1rem;

    &:hover{
    background-color: gray;
    cursor: pointer;
    }
`


function Submenu ({item})
{

    const [sidebar, setsidebar] = useState(false);

    const showSideBar = () => {
        setsidebar(!sidebar);
    }

    return(
        <>
            <SidebarLink to={item.path} onClick={showSideBar}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    { item.subNav && sidebar
                    ? item.iconOpened
                    : item.subNav && !sidebar
                    ? item.iconClosed
                    : null
                    }
                </div>
            </SidebarLink>
            {sidebar && item.subNav &&
                item.subNav.map((item,index) => {
                    return(
                        <DropdownLink to={item.path} key={index}>
                            {item.icon}
                            <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                    )
                })
            }
        </>
    );

}

export default Submenu;