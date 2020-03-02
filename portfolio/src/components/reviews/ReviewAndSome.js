import React from 'react';
import styled, { css } from 'styled-components';

import { Lite } from '../../App';

const ReviewAndSome = () => {
    return (
        <Container>
            <SubContainer>
                <h2><Lite>Christian Pelayo</Lite><br/>Review</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </SubContainer>
            <VerticalLine></VerticalLine>
            <SubContainer accolades>
                {/* Awards & Accolades Section */}
                <h4><Lite>Awards &amp; Accolades</Lite></h4>
                <Row>
                    <Award src="./imgs/gold-medal.png" alt="#" />
                    Best SSBM Player in Cohort 
                </Row>
                <Row>
                    <Award src="./imgs/second.png" alt="#" />
                    "Exceptional" Team Lead
                </Row>
                <Row>
                    <Award src="./imgs/third.png" alt="#" />
                    Top 3 Real World Apps
                </Row>
                <hr></hr>

                {/* Project Ratings Section */}
                <h4><Lite>Project Ratings</Lite></h4>
                <Project>
                    <a href="https://nostalgic-yonath-730297.netlify.com/">Mobalytics Copy Practice:</a>
                    <p><Lite>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Lite></p>
                    <ProjectRating src="./imgs/result.png" alt="#" />
                </Project>
            </SubContainer>
        </Container>
    );
};

const Row = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const Project = styled.div`
    display: flex;
    flex-direction: column;

    a {
        text-decoration: underline;
        color: black;
        cursor: pointer;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

const Award = styled.img`
    width: 30px;
    margin-right: 7px;
`;

const ProjectRating = styled.img`
    width: 100px;
    align-self: center;
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 58%;

    h2, h4 {
        align-self: center;
        text-align: center;
    }

    h4 {
        margin-top: 0;
        width: 100%;
        border-bottom: 1px solid black;
        padding-bottom: 10px;
    }

    ${props =>
        props.accolades && css`
            width: 38%;
        `}
`;

const VerticalLine = styled.div`
    border-left: 1px solid black;
    height: auto;
`;

export default ReviewAndSome;