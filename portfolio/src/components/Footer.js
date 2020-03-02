import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <StyledFooter>
            <Lite>Created by Christian Pelayo ( ͡° ͜ʖ ͡°)</Lite>
            <SocialsContainer>
                <ImgLink href="https://www.facebook.com/chris.pelayo.98"><Social src="./imgs/facebook.png" alt="#" /></ImgLink>
                <ImgLink href="https://www.instagram.com/pelaydough/"><Social src="./imgs/instagram.png" alt="#" /></ImgLink>
            </SocialsContainer>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    height: 100px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;

const ImgLink = styled.a`
    text-decoration: none;
`;

const SocialsContainer = styled.div`
    margin-top: 15px;
`;

const Social = styled.img`
    width: 20px;
    margin-right: 10px;
`;

const Lite = styled.span`
    font-weight: 200;
    font-size: 0.8rem;
`;

export default Footer;