import React from 'react';
import styled from 'styled-components';

const Video = () => {
    return (
        <VideoContainer>
            <img src="./imgs/play-button.png" alt="#" />
        </VideoContainer>
    );
};

// Temporarily making this a flex container until I convert it into a video like it's support to be.
const VideoContainer = styled.div`
    position: relative;
    border: 1px solid black;
    cursor: pointer;
    padding-bottom: 56.25%;
    
    img {
        width: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export default Video;