import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: "Home",
        path: "home",
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: "Mountaineering",
        path: "",
        icon: <FaIcons.FaMountain />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        subNav: [
            {
                title:"Blogs",
                path:"mountaineering/blogs",
                icon:<FaIcons.FaBlog />
            },
            {
                title:"Gallery",
                path:"mountaineering/gallery",
                icon:<RiIcons.RiGalleryLine />   
            }
        ]
    },
    {
        title: "Trail Running",
        path: "trailrunning",
        icon: <FaIcons.FaRunning />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        subNav: [
            {
                title:"Blogs",
                path:"mountaineering/blogs",
                icon:<FaIcons.FaBlog />
            },
            {
                title:"Gallery",
                path:"mountaineering/gallery",
                icon:<RiIcons.RiGalleryLine />   
            }
        ]
    },
    {
        title: "Contact",
        path: "contact",
        icon: <RiIcons.RiContactsLine />,
    },
    {
        title: "About",
        path: "about",
        icon: <FaIcons.FaMedapps />,
    },

]
