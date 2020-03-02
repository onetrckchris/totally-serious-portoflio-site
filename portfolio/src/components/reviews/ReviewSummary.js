import React from 'react';
import styled from 'styled-components';

const ReviewSummary = () => {
    return (
        <Container>
            <RelativeContainer>
                <ProfileImg src="./imgs/robot2.png" alt="#" />
            </RelativeContainer>
            <Review></Review>
            <Rating>A-</Rating>
        </Container>
    );
};

const Container = styled.div`
    width: 70%;
    height: 125px;
    display: flex;
    background-color: #f2f2f2;
    margin: 45px 0 30px 0;
`;

const Review = styled.div`
    height: 125px;
    width: 75%;
    border-right: none;
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
`;

export default ReviewSummary;