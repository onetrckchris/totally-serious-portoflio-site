import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { Lite } from '../App';
import Searchbar from './Searchbar';

const Navbar = () => {
    return (
        <NavContainer>
            <NavLink title to="/">
                <TitleImg src="./imgs/robot.png" alt="#" />
                <Lite>Reviewerdude</Lite>
            </NavLink>
            {/* <nav>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/projects">Projects</NavLink>
            </nav> */}
            <Searchbar />
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

const TitleImg = styled.img`
    width: 40px;
    margin-right: 15px;
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
            display: flex;
        `}
`;

export default Navbar;