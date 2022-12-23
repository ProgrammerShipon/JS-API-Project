






const country_name = 'Bangladesh';
const country_api = `https://restcountries.com/v3.1/name/${country_name}?fullText=true
`;

function fetchCountry () {
  fetch (country_api) 
      .then (data => data.json())
      .then (country => getCountryInfo(country[0]))
}
fetchCountry();

function getCountryInfo ( info ) {
  console.log (info)
  console.log (info.flags.png)
}
getCountryInfo();


