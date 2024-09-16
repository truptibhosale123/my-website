import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: black;
    color: white;
    height: 60px; /* Adjust height as needed */
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000; /* Ensure it sits on top of other content */
`;

const HeaderText = styled.h1`
    margin: 0;
    font-size: 1.5rem; /* Adjust font size as needed */
`;

function Header() {
    return (
        <HeaderContainer>
            <HeaderText></HeaderText>
        </HeaderContainer>
    );
}

export default Header;