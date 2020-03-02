import React from 'react';
import styled from 'styled-components';

const CommentSection = () => {
    return (
        <>
            <CommentTextArea placeholder="Leave a comment!">

            </CommentTextArea>
            <input />
        </>
    );
};

const CommentTextArea = styled.textarea`
    height: 200px;
    margin-top: 40px;
    outline: none;
    font-size: 1.2rem;
    padding: 10px;
    resize: none;
`;

export default CommentSection;