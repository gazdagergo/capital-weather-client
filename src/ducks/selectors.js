import { CITY_ROUTE } from '../constants';

export const selectSavedCities = state => {
  const cities = state && state.savedCities;
  return cities.map(({ id, capitalName, countryCode }) => ({
    id,
    href: `${CITY_ROUTE}/${capitalName}/${countryCode}`,
    label: capitalName
  }))
}