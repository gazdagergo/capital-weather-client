import { CITY_ROUTE } from '../constants';

export const selectSavedCities = state => {
  const cities = state && state.savedCities;
  return cities.map(({ capitalName }) => ({
    href: `${CITY_ROUTE}/${capitalName}`,
    label: capitalName
  }))
}