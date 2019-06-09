import { CITY_ROUTE } from '../constants';

export const selectSavedCities = state => {
  const cities = state && state.savedCities;
  return cities.map(({ id, capitalName, countryCode }) => ({
    id,
    href: `${CITY_ROUTE}/${capitalName}/${countryCode}`,
    label: capitalName
  }))
}

export const selectCityInfo = (state, cityName, countryCode) => (
  state && 
  state.savedCities && 
  state.savedCities.find && 
  state.savedCities.find(city => (
    city.cityName === cityName && city.countryCode === countryCode
  ))
)