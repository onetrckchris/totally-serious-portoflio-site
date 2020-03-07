import React from 'react';
import styled, { css } from 'styled-components';

import { device } from '../../style-variables/devices';

const Advertisement = () => {
    return <></>
};

export const AdContainer = styled.img`
	width: 65%;
	padding-bottom: 12%;
	border: 1px solid black;
	margin-top: 10px;
	align-self: center;
    background-color: #f2f2f2;
	cursor: pointer;
	
	@media ${device.mobileL} {
		display: none;
	}
	
	${props =>
        props.leftAd && css`
			width: 16.5%;
			max-width: 202px;
			padding-bottom: 17%;
			align-self: flex-start;
		`}
	
	${props =>
		props.rightAd && css`
			width: 16.5%;
			max-width: 202px;
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