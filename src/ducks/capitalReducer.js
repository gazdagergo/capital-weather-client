import { toCamelCaseObject } from "../helpers/restHelper";

const updateOrAppendCity = (cities, newData) => {
  let doesCityExist;
  const newDataCamel = toCamelCaseObject(newData);

  let nextCities = cities.map(city => {
    if (city.cityId === newDataCamel.cityId) {
      doesCityExist = true;
      return { ...city, ...newDataCamel }
    }
    return city;
  })

  if (!doesCityExist) {
    nextCities = [ ...cities, newDataCamel ]
  }

  return nextCities;
}

const addSavedCitiesToStore = (state, { payload }) => {
  let { savedCities } = state;
  payload.forEach(cityBaseInfo => {
    savedCities = updateOrAppendCity(savedCities, cityBaseInfo)
  })

  return { savedCities };
}

const addDetailedDataToCity = (state, { payload: details }) => ({
  ...state,
  savedCities: updateOrAppendCity(state.savedCities, details)
})

const initialState = {
  savedCities: []
};

const capitalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SAVED_CITIES__SUCCESS': return addSavedCitiesToStore(state, action);
    case 'GET_CITY_INFO__SUCCESS': return addDetailedDataToCity(state, action);
    default: return state;
  }
}

export default capitalReducer;
