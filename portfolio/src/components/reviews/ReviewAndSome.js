import React from 'react';
import styled, { css } from 'styled-components';

import { Lite } from '../../App';

const ReviewAndSome = () => {
    return (
        <Container>
            <SubContainer>
                <h2><Lite>Christian Pelayo</Lite><br/>Review</h2>
                <p>Picture this: A down to earth, drama avoidant, indoorsy person.. Very much a How I Met Your Mother's Ted-esque kind of guy. Now imagine for a moment that that person harbors a level of curiousity matched only by Triple-A game developers and cats. Okay, now stop imagining because that person exists... And his name is John Cena!</p>
                <p>Just kidding, it's Christian Pelayo.</p>
                <p>Born and raised in sunny Los Angeles, California, Christian (Chris) Pelayo really does seem to be on the up and up. In pursuit of his life-long goal of one day creating a game that immerses it's players both emotionally and physically, he applied and was accepted to the Los Angeles Film School under the Game Developement program at the age of 18. That didn't last long though, as a quarter way through the program he was introduced to his actual true love... Programming.</p>
                <p>What about coding attracted him so much that he thought it wise to drop out of a great program in the middle of Hollywood, California in the field he's been so passionate about his whole life? Some say it was the feeling of spending days at a time, sleepless nights, studying documention for foreign computer programming languages to eventually see his hard work come to fruition on a clean monitor. That's what I've heard anyway.</p>
                <p>So he's definitely got the passion and the drive to tackle interesting projects! Surely he's currently working at some promising start-up by now! Oh? He's still taking customer service jobs for minimum wage? Somebody throw money at this guy already.</p>
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
                    <p><Lite>In an attempt to score a job at one of his favorite analytic eSport sites, Pelayo re-created that site's card gallery page with <Italic>almost</Italic> all of it's functionality...</Lite></p>
                    <ProjectRating>9.5</ProjectRating>
                </Project>

                <Project>
                    <a href="https://bettersubstats.netlify.com/">Subreddit Stats:</a>
                    <p><Lite>His first team-based project with an actual deadline proved to be a challenging one. However difficult as it may have been this was Pelayo's introduction to his new found favorite work environment... High pressure with a small team.</Lite></p>
                    <ProjectRating>8</ProjectRating>
                </Project>
            </SubContainer>
        </Container>
    );
};

const Italic = styled.span`
    font-style: italic;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const Project = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
    border-bottom: 1px solid black;
    margin-bottom: 20px;

    &:last-child {
        border-bottom: none;
    }

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

const ProjectRating = styled.div`
    width: 100px;
    font-size: 2.8rem;
    font-weight: 200;
    margin-top: 18px;
    height: 100px;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E21B1B;
    align-self: center;
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 58%;
    line-height: 28px;

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