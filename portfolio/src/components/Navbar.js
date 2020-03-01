import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <NavContainer>
            <NavLink title to="/">Chris's Portfolio</NavLink>
            <nav>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/projects">Projects</NavLink>
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

const NavLink = styled(Link)`
    margin-right: 20px;
    text-decoration: none;
    color: black;
    font-weight: 600;

    ${props =>
        props.title && css`
            margin: 10px 0;
            font-size: 1.8rem;
        `}
`;

export default Navbar;