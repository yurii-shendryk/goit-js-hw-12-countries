import countryTpl from '../templates/country.hbs';
import errorMessage from './notifications';
import refs from './refs';
function updateCountriesMarkup(countries) {
  if (countries.length === 1) {
    const markup = countryTpl(countries);
    refs.countries.insertAdjacentHTML('beforeend', markup);
  } else if (countries.length >= 2 && countries.length <= 10) {
    updateCountryList(countries);
  } else if (countries.length > 10) {
    errorMessage();
  }
}

function updateCountryList(countries) {
  const htmlString = countries.reduce(
    (acc, country) => acc + createCountryList(country.name),
    '',
  );
  refs.countries.innerHTML = htmlString;
}

function createCountryList(countryName) {
  return `<li class="countries_item">${countryName}</li>`;
}

export default updateCountriesMarkup;
