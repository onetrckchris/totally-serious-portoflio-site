import axios from 'axios';

export const START_POPULATION = "START_POPULATION";

export const POST_COMMENT_START = "POST_COMMENT_START";
export const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS";
export const POST_COMMENT_FAIL = "POST_COMMENT_FAIL";

export const GET_COMMENTS_START = "GET_COMMENTS_START";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAIL = "GET_COMMENTS_FAIL";

export const populateSearchbar = () => (dispatch) => {
    dispatch({ type: START_POPULATION });
};

export const postComment = (comment) => (dispatch) => {
    dispatch({ type: POST_COMMENT_START });

    axios.post('http://localhost:5000/comment', comment)
        .then(res => dispatch({ type: POST_COMMENT_SUCCESS, payload: comment }))
        .catch(err => dispatch({ type: POST_COMMENT_FAIL, payload: err }));
}

export const getComments = () => (dispatch) => {
    dispatch({ type: GET_COMMENTS_START });

    axios.get('http://localhost:5000')
        .then(response => dispatch({ type: GET_COMMENTS_SUCCESS, payload: response }))
        .catch(err => dispatch({ type: GET_COMMENTS_FAIL, payload: err }));
}