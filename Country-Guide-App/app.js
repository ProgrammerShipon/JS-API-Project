
const main_content = document.getElementById('main-content');
const inputSearch = document.getElementById('inputSearch');
const SearchBtn = document.getElementById('SearchBtn');
const country_img = document.getElementById('country-img');
const location_map = document.getElementById('location_map');
const countryName = document.getElementById('countryName');
const Capital = document.getElementById('Capital');
const continent = document.getElementById('continent');
const currency = document.getElementById('currency');
const population = document.getElementById('population');
const languages = document.getElementById('languages');
const subRegion = document.getElementById('subRegion');

// Event Listener
SearchBtn.addEventListener('click', () => actionBtn())
inputSearch.addEventListener('keypress', function (e) {
  if ( e.key === 'Enter') actionBtn()
})

// Action Button
function actionBtn () {
  let searchValue = inputSearch.value;
  // Location Map
  const location_url = `https://www.google.com/maps/embed/v1/place?q=${searchValue}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`;
  location_map.src = location_url;

  main_content.classList.add('visible')
  fetchCountry(searchValue)
}

// fatchCountry Name
function fetchCountry(searchValue) {
  // Fetch Api
  const country_api = `https://restcountries.com/v3.1/name/${searchValue}?fullText=true`;
  fetch(country_api)
    .then(data => data.json())
    .then(country => getCountryInfo(country[0]))
}

// Output
function getCountryInfo(info) {
  console.log(info)
  country_img.src = info.flags.png
  countryName.innerText = info.name.common;
  Capital.innerText = info.capital[0];
  continent.innerText = info.continents[0];
  population.innerText = info.population;
  subRegion.innerText = info.subregion;
  currency.innerText = `${info.currencies[Object.keys(info.currencies)].name} ( ${info.currencies[Object.keys(info.currencies)].symbol} )`
  languages.innerText = info.languages[Object.keys(info.languages)]
}



























// https://www.google.com/maps/embed/v1/place?location={kkdfjkdfkjdf}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8
// AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8
// https://www.google.com/maps/embed/v1/place?q=bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8
// const location_url = `https://www.google.com/maps/embed/v1/place?q=${location_name}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`
