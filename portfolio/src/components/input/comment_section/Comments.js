import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getComments } from '../../../store/actions';
import Comment from './Comment';

const Comments = ({comments, fetching, getComments}) => {
    useEffect(() => {
        getComments();
    }, [])

    return (
        <CommentsSection>
            { comments.length 
                ? comments.map(comment => (
                    <Comment comment={comment} />
                )) 
                : <h1>No comments yet!</h1>
            }
        </CommentsSection>
    );
};

const CommentsSection = styled.div`
    display: flex;
    padding-top: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const mapStateToProps = (state) => {
    return {
        comments: state.comments,
        fetching: state.fetching
    }
};

export default connect(mapStateToProps, { getComments })(Comments);