import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { Lite } from '../App';
import Searchbar from './input/Searchbar';

import { device } from '../style-variables/devices';

const Navbar = () => {
    return (
        <NavContainer>
            <NavLink title to="/">
                <TitleImg src="./imgs/robot.png" alt="#" />
                <Lite>Reviewerdude</Lite>
            </NavLink>
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

    @media ${device.mobileL} {
        justify-content: center;
        border: none;
        padding: 20px;
    }
`;

const TitleImg = styled.img`
    width: 40px;
    margin-right: 15px;
`;

const NavLink = styled(Link)`
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