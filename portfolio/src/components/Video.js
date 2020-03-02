import React from 'react';
import styled from 'styled-components';

const Video = () => {
    return (
        <VideoContainer>
            About Me Video
        </VideoContainer>
    );
};

// Temporarily making this a flex container until I convert it into a video like it's support to be.
const VideoContainer = styled.div`
	display: flex;
	justify-content: center;
	border: 1px solid black;
	height: 375px;
	align-items: center;
`;

export default Video;