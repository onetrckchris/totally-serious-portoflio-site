import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <NavContainer>
            <h2>Chris's Portfolio</h2>
            <nav>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Projects</a>
            </nav>
        </NavContainer>
    );    
};

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border: 1px solid black;
`;

export default Navbar;