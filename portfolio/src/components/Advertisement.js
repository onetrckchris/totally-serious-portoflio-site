import React from 'react';
import styled, { css } from 'styled-components';

const Advertisement = () => {
    return <></>
};

export const AdContainer = styled.img`
	width: 65%;
	border: 1px solid black;
	height: 100px;
	margin-top: 10px;
	align-self: center;
	background-color: #f2f2f2;
	
	${props =>
        props.leftAd && css`
			width: 16.5%;
			height: 200px;
			align-self: flex-start;
		`}
	
	${props =>
		props.rightAd && css`
			width: 16.5%;
			height: 500px;
			align-self: flex-start;
		`}
`;

export default Advertisement;