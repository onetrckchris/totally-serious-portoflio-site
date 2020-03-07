import React from 'react';
import styled, { css } from 'styled-components';

const Advertisement = () => {
    return <></>
};

export const AdContainer = styled.img`
	// width: 65%;
	// height: 100px;
	border: 1px solid black;
	margin-top: 10px;
	align-self: center;
    background-color: #f2f2f2;
    cursor: pointer;
	
	${props =>
        props.leftAd && css`
			width: 16.5%;
			max-width: 202px;
			// height: 200px;
			padding-bottom: 17%;
			align-self: flex-start;
		`}
	
	${props =>
		props.rightAd && css`
			width: 16.5%;
			max-width: 202px;
			// height: 500px;
			padding-bottom: 41.5%;
			align-self: flex-start;
		`}

	${props =>
		props.full && css`
			width: 100%;
			padding-bottom: 18%;
		`}
`;

export default Advertisement;