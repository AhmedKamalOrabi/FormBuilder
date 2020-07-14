import { ICountry } from '../interfaces/ICountry';

const mapCountryToModel = ({ name, alpha2Code, flag }: ICountry): ICountry => {
  return {
    name,
    alpha2Code,
    flag,
  };
};

export const getCountries = () => {
  return fetch('https://restcountries.eu/rest/v2/all')
    .then((res) => res.json())
    .then((res) => res.map(mapCountryToModel));
};
