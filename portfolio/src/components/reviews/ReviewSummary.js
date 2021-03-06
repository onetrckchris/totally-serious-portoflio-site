import React from 'react';
import styled, { css } from 'styled-components';

import { device } from '../../style-variables/devices';

const ReviewSummary = () => {
    return (
        <Container>
            <RelativeContainer>
                <ProfileImg src="./imgs/robot2.png" alt="#" />
            </RelativeContainer>
            <ReviewContainer>
                <Review overall>Overall Rating</Review>
                <Review>"Needs some more practice. 10/10, would hire again." - IGN</Review>
            </ReviewContainer>
            <Rating>9</Rating>
        </Container>
    );
};

const Container = styled.div`
    width: 70%;
    height: 125px;
    display: flex;
    background-color: #f2f2f2;
    margin: 45px 0 30px 0;

    @media ${device.laptop} {
        width: 85%;
    }

    @media ${device.laptopL} {
        width: 80%;
    }

    @media ${device.tablet} {
        width: 100%;
    }
`;

const ReviewContainer = styled.div`
    display: flex;
    width: 75%;
    flex-direction: column;
`;

const Review = styled.div`
    height: 62.5px;
    display: flex;
    font-size: 0.9rem;
    justify-content: center;
    align-items: center;
    padding: 15px;
    font-weight: 300;
    border-right: none;

    ${props =>
        props.overall && css`
            padding: 15px 0 0 80px;
            font-size: 1.7rem;

            @media ${device.mobileL} {
                padding: 15px 0 0 90px;
                font-size: 1.3rem;
            }

            @media ${device.mobileS} {
                padding: 15px 0 0 70px;
                font-size: 1.3rem;
            }
        `}
`;

const Rating = styled.div`
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 3rem;
    font-weight: 600;
    width: 25%;
    background-color: #E21B1B;
`;

const RelativeContainer = styled.div`
    position: relative;
    width: 0%;
    height: 0%;
`;

const ProfileImg = styled.img`
    width: 75px;
    height: 75px;
    padding: 10px;
    border: 1px solid black;
    background-color: white;
    position: relative;
    left: 20px;
    bottom: 30px;

    @media ${device.mobileS} {
        width: 35px;
        height: 35px;
        bottom: 10px;
    }
`;

export default ReviewSummary;