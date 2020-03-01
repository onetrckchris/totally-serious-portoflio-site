import React from 'react';
import styled from 'styled-components';

import Navbar from './components/navbar/Navbar';

import './App.css';

function App() {
	return (
		<AppContainer>
			<Navbar />
		</AppContainer>
	);
}

const AppContainer = styled.div`
	width: 70%;
	margin: auto;
`;

export default App;
