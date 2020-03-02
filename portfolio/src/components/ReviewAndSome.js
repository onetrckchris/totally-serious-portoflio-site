import React from 'react';
import styled, { css } from 'styled-components';

const ReviewAndSome = () => {
    return (
        <Container>
            <SubContainer>
                <h2><Lite>Christian Pelayo</Lite><br/>Review</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </SubContainer>
            <SubContainer accolades>

            </SubContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

const Lite = styled.span`
    font-weight: 300;
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 58%;

    h2 {
        align-self: center;
        text-align: center;
    }

    ${props =>
        props.accolades && css`
            width: 38%;
        `}
`;

export default ReviewAndSome;