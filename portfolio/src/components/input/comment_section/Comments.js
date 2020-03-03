import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getComments } from '../../../store/actions';

const Comments = ({comments, fetching, getComments}) => {
    useEffect(() => {
        getComments();
    }, [])

    return (
        <div>
            { comments.length 
                ? comments.map(comment => (
                    <span>{comment.username}</span>
                )) 
                : <h1>No comments yet!</h1>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        comments: state.comments,
        fetching: state.fetching
    }
};

export default connect(mapStateToProps, { getComments })(Comments);