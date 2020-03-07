import { 
    START_POPULATION,
    POST_COMMENT_START,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FAIL,
    GET_COMMENTS_START,
    GET_COMMENTS_SUCCESS,
    // GET_COMMENTS_FAIL
 } from '../actions';

const initialState = {
    filledName: '',
    commenting: false,
    fetching: false,
    comments: [], 
    count: 0
};

const nameArray = ['C', 'h', 'r', 'i', 's', 't', 'i', 'a', 'n', ' ', 'P', 'e', 'l', 'a', 'y', 'o'];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_POPULATION:
            const populateName = () => {
                return nameArray[state.count];
            }

            if (state.filledName.length === 16) {
                return state;
            }

            return {
                ...state,
                filledName: state.filledName + populateName(),
                count: state.count + 1
            }
        case POST_COMMENT_START:
            return {
                ...state,
                commenting: true
            }
        case POST_COMMENT_SUCCESS:
            return {
                ...state,
                commenting: false,
                comments: [...state.comments, action.payload],
                error: ''
            }
        case POST_COMMENT_FAIL:
            return {
                ...state,
                commenting: false,
                error: action.payload
            }
        case GET_COMMENTS_START:
            return {
                ...state,
                fetching: true
            }
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                fetching: false,
                comments: action.payload.data,
                error: ''
            }
        default:
            return state;
    };
};

export default reducer;