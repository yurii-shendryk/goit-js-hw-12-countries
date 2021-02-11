import refs from './refs';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';
import updateCountriesMarkup from './update-markup';

const debouncedInputCallback = debounce(() => {
  refs.countries.textContent = '';
  let nameToSearch = refs.searchInput.value;
  fetchCountries(nameToSearch).then(updateCountriesMarkup);
}, 500);

refs.searchInput.addEventListener('input', event => {
  event.preventDefault();
  debouncedInputCallback();
});
