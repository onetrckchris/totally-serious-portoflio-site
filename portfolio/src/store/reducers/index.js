import { START_POPULATION } from '../actions';

const initialState = {
    filledName: '',
    count: 0
};

const nameArray = ['C', 'h', 'r', 'i', 's', 't', 'i', 'a', 'n', ' ', 'P', 'e', 'l', 'a', 'y', 'o'];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_POPULATION:
            const populateName = () => {
                return nameArray[state.count];
            }

            if (state.filledName.length == 16) {
                return state;
            }

            return {
                ...state,
                filledName: state.filledName + populateName(),
                count: state.count + 1
            }
        default:
            return state;
    };
};

export default reducer;