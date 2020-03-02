import React from 'react';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Video from './components/aboutme/Video';
import { AdContainer } from './components/aboutme/Advertisement';
import ReviewAndSome from './components/reviews/ReviewAndSome';
import ReviewSummary from './components/reviews/ReviewSummary';

import './App.css';

function App() {
	return (
		<AppContainer>
			<Navbar />
			<AdContainer />
			<Row>
				<AdContainer leftAd />
				<Main>
					<Video>About Me Video will go here</Video>
					<ReviewedBy>Reviewed by the man himself, March 1st 2020 | 9:31 PM PST</ReviewedBy>
					<ReviewAndSome />
					<ReviewSummary />
				</Main>
				<AdContainer rightAd />
			</Row>
			<AdContainer />
		</AppContainer>
	);
}

export const Lite = styled.span`
    font-weight: 300;
`;

const ReviewedBy = styled.span`
	font-size: 0.8rem;
	margin-top: 10px;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
`;

const AppContainer = styled.div`
	width: 80%;
	margin: auto;
	padding-bottom: 20px;
	display: flex;
	flex-direction: column;
`;

const Main = styled.main`
	width: 65%;
	margin-top: 10px;
	display: flex;
	flex-direction: column;
`;

export default App;
