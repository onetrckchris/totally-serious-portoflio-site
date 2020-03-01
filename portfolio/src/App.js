import React from 'react';
import styled, { css } from 'styled-components';

import Navbar from './components/Navbar';

import './App.css';

function App() {
	return (
		<AppContainer>
			<Navbar />
			<AdContainer />
			<Row>
				<AdContainer leftAd />
				<Main></Main>
				<AdContainer rightAd />
			</Row>
		</AppContainer>
	);
}

const Row = styled.div`
	display: flex;
	justify-content: space-between;
`;

const AppContainer = styled.div`
	width: 70%;
	margin: auto;
	display: flex;
	flex-direction: column;
`;

// Temporarily making this a flex container until I convert it into a video like it's support to be.
const Main = styled.main`
	width: 65%;
	height: 300px;
	margin-top: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
`;

const AdContainer = styled.img`
	width: 65%;
	border: 1px solid black;
	height: 100px;
	margin-top: 10px;
	align-self: center;
	background-color: #f2f2f2;
	
	${props =>
        props.leftAd && css`
			width: 16%;
			height: 200px;
			align-self: flex-start;
		`}
	
	${props =>
		props.rightAd && css`
			width: 16%;
			height: 500px;
			align-self: flex-start;
		`}
`;

export default App;
