export const START_POPULATION = "START_POPULATION";

export const populateSearchbar = () => (dispatch) => {
    dispatch({ type: START_POPULATION });
};