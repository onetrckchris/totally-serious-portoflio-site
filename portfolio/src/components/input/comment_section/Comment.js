import React from 'react';
import styled from 'styled-components';

const Comment = ({ comment }) => {
    return (
        <CommentContainer>
            <Username>{comment.username}</Username>
            <p>{comment.comment}</p>
            <span>{comment.created_at}</span>
        </CommentContainer>
    );
};

const CommentContainer = styled.div`
    border-bottom: 1px solid black;
    padding: 0 70px 20px 70px;
    display: flex;
    flex-direction: column;

    &:last-child {
        border-bottom: none;
    }

    &:nth-child(odd) {
        background-color: #f2f2f2;
    }

    span {
        align-self: flex-end;
    }
`;

const Username = styled.h4`
    margin: 30px 0 0 0;
    font-weight: 500;
`;

export default Comment;