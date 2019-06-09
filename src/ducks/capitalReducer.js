import { toCamelCaseObject } from "../helpers/restHelper";

const addSavedCitiesToStore = (state, { payload }) => ({
  ...state,
  savedCities: payload.map(cityObj => toCamelCaseObject(cityObj))
})

const initialState = {
  savedCities: []
};

const capitalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SAVED_CITIES__SUCCESS': return addSavedCitiesToStore(state, action);
    default: return state;
  }
}

export default capitalReducer;
