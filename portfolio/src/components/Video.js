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
	display: flex;
	justify-content: center;
    border: 1px solid black;
    cursor: pointer;
	height: 375px;
    align-items: center;
    
    img {
        width: 40px;
    }
`;

export default Video;