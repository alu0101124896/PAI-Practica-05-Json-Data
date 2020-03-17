const NAME_MODULE = require('./country-name.js');
const ABBREVIATION_MODULE = require('./country-abbreviation.js');
const AVG_MALE_HEIGHT_MODULE = require('./country-avg-male-height.js');
const CAPITAL_CITY_MODULE = require('./country-capital-city.js');
const CONTINENT_MODULE = require('./country-continent.js');
const CURRENCY_NAME_MODULE = require('./country-currency-name.js');
const CURRENCY_CODE_MODULE = require('./country-currency-code.js');
const RELIGION_MODULE = require('./country-religion.js');
const ELEVATION_MODULE = require('./country-elevation.js');
const LIFE_EXPECTANCY_MODULE = require('./country-life-expectancy.js');
const POPULATION_MODULE = require('./country-population.js');
const POPULATION_DENSITY_MODULE = require('./country-population-density.js');
const SURFACE_AREA_MODULE = require('./country-surface-area.js');
const YEARLY_AVG_TEMPERATURE_MODULE = require('./country-yearly-avg-temperature.js');

function countryNames(countries) {
  for (let countriesIterator = 0; countriesIterator < NAME_MODULE.COUNTRY_NAME.length; countriesIterator++) {
    countries[countriesIterator] = { name: NAME_MODULE.COUNTRY_NAME[countriesIterator].country };
  }
}

function countryAbbreviations(countries) {
  for (let abbreviationIterator = 0; abbreviationIterator < ABBREVIATION_MODULE.COUNTRY_ABBREVIATION.length; abbreviationIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== ABBREVIATION_MODULE.COUNTRY_ABBREVIATION[abbreviationIterator].country)) {
      countriesIterator++;
    }
    if (countriesIterator < countries.length) {
      countries[countriesIterator].abbreviation = ABBREVIATION_MODULE.COUNTRY_ABBREVIATION[abbreviationIterator].abbreviation;
    }
  }
}

function countryAvgMaleHeights(countries) {
  for (let avgMaleHeightIterator = 0; avgMaleHeightIterator < AVG_MALE_HEIGHT_MODULE.COUNTRY_AVG_MALE_HEIGHT.length; avgMaleHeightIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== AVG_MALE_HEIGHT_MODULE.COUNTRY_AVG_MALE_HEIGHT[avgMaleHeightIterator].country)) {
      countriesIterator++;
    }
    if (countriesIterator < countries.length) {
      countries[countriesIterator].avgMaleHeight = AVG_MALE_HEIGHT_MODULE.COUNTRY_AVG_MALE_HEIGHT[avgMaleHeightIterator].height;
    }
  }
}

function countryCapitalCities(countries) {
  for (let capitalCityIterator = 0; capitalCityIterator < CAPITAL_CITY_MODULE.COUNTRY_CAPITAL_CITY.length; capitalCityIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== CAPITAL_CITY_MODULE.COUNTRY_CAPITAL_CITY[capitalCityIterator].country)) {
      countriesIterator++;
    }
    if (countriesIterator < countries.length) {
      countries[countriesIterator].capitalCity = CAPITAL_CITY_MODULE.COUNTRY_CAPITAL_CITY[capitalCityIterator].city;
    }
  }
}

function countryContinents(countries) {
  for (let continentIterator = 0; continentIterator < CONTINENT_MODULE.COUNTRY_CONTINENT.length; continentIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== CONTINENT_MODULE.COUNTRY_CONTINENT[continentIterator].country)) {
      countriesIterator++;
    }
    if (countriesIterator < countries.length) {
      countries[countriesIterator].continent = CONTINENT_MODULE.COUNTRY_CONTINENT[continentIterator].continent;
    }
  }
}

function countryCurrencyNames(countries) {
  for (let currencyNameIterator = 0; currencyNameIterator < CURRENCY_NAME_MODULE.COUNTRY_CURRENCY_NAME.length; currencyNameIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== CURRENCY_NAME_MODULE.COUNTRY_CURRENCY_NAME[currencyNameIterator].country)) {
      countriesIterator++;
    }
    if (countriesIterator < countries.length) {
      countries[countriesIterator].currencyName = CURRENCY_NAME_MODULE.COUNTRY_CURRENCY_NAME[currencyNameIterator].currency_name;
    }
  }
}

function countryCurrencyCodes(countries) {
  for (let currencyCodeIterator = 0; currencyCodeIterator < CURRENCY_CODE_MODULE.COUNTRY_CURRENCY_CODE.length; currencyCodeIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== CURRENCY_CODE_MODULE.COUNTRY_CURRENCY_CODE[currencyCodeIterator].country)) {
      countriesIterator++;
    }
    if (countriesIterator < countries.length) {
      countries[countriesIterator].currencyCode = CURRENCY_CODE_MODULE.COUNTRY_CURRENCY_CODE[currencyCodeIterator].currency_code;
    }
  }
}

function countryReligions(countries) {
  for (let religionIterator = 0; religionIterator < RELIGION_MODULE.COUNTRY_RELIGION.length; religionIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== RELIGION_MODULE.COUNTRY_RELIGION[religionIterator].country)) {
      countriesIterator++;
    }
    if (countriesIterator < countries.length) {
      countries[countriesIterator].religion = RELIGION_MODULE.COUNTRY_RELIGION[religionIterator].religion;
    }
  }
}

function countryElevations(countries) {
  for (let elevationIterator = 0; elevationIterator < ELEVATION_MODULE.COUNTRY_ELEVATION.length; elevationIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== ELEVATION_MODULE.COUNTRY_ELEVATION[elevationIterator].country)) {
      countriesIterator++;
    }
    if (countriesIterator < countries.length) {
      countries[countriesIterator].elevation = ELEVATION_MODULE.COUNTRY_ELEVATION[elevationIterator].elevation;
    }
  }
}

function countryLifeExpectancies(countries) {
  for (let lifeExpectancyIterator = 0; lifeExpectancyIterator < LIFE_EXPECTANCY_MODULE.COUNTRY_LIFE_EXPECTANCY.length; lifeExpectancyIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== LIFE_EXPECTANCY_MODULE.COUNTRY_LIFE_EXPECTANCY[lifeExpectancyIterator].country)) {
      countriesIterator++;
    }
    if (countriesIterator < countries.length) {
      countries[countriesIterator].lifeExpectancy = LIFE_EXPECTANCY_MODULE.COUNTRY_LIFE_EXPECTANCY[lifeExpectancyIterator].expectancy;
    }
  }
}

function countryPopulations(countries) {
  for (let populationIterator = 0; populationIterator < POPULATION_MODULE.COUNTRY_POPULATION.length; populationIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== POPULATION_MODULE.COUNTRY_POPULATION[populationIterator].country)) {
      countriesIterator++;
    }
    if (countriesIterator < countries.length) {
      countries[countriesIterator].population = POPULATION_MODULE.COUNTRY_POPULATION[populationIterator].population;
    }
  }
}

function countryPopulationDensities(countries) {
  for (let populationDensityIterator = 0; populationDensityIterator < POPULATION_DENSITY_MODULE.COUNTRY_POPULATION_DENSITY.length; populationDensityIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== POPULATION_DENSITY_MODULE.COUNTRY_POPULATION_DENSITY[populationDensityIterator].country)) {
      countriesIterator++;
    }
    if (countriesIterator < countries.length) {
      countries[countriesIterator].populationDensity = POPULATION_DENSITY_MODULE.COUNTRY_POPULATION_DENSITY[populationDensityIterator].density;
    }
  }
}

function countrySurfaceAreas(countries) {
  for (let surfaceAreaIterator = 0; surfaceAreaIterator < SURFACE_AREA_MODULE.COUNTRY_SURFACE_AREA.length; surfaceAreaIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== SURFACE_AREA_MODULE.COUNTRY_SURFACE_AREA[surfaceAreaIterator].country)) {
      countriesIterator++;
    }
    if (countriesIterator < countries.length) {
      countries[countriesIterator].surfaceArea = SURFACE_AREA_MODULE.COUNTRY_SURFACE_AREA[surfaceAreaIterator].area;
    }
  }
}

function countryYearlyAvgTemperatures(countries) {
  for (let yearlyAvgTemperatureIterator = 0; yearlyAvgTemperatureIterator < YEARLY_AVG_TEMPERATURE_MODULE.COUNTRY_YEARLY_AVG_TEMPERATURE.length; yearlyAvgTemperatureIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== YEARLY_AVG_TEMPERATURE_MODULE.COUNTRY_YEARLY_AVG_TEMPERATURE[yearlyAvgTemperatureIterator].country)) {
      countriesIterator++;
    }
    if (countriesIterator < countries.length) {
      countries[countriesIterator].yearlyAvgTemperature = YEARLY_AVG_TEMPERATURE_MODULE.COUNTRY_YEARLY_AVG_TEMPERATURE[yearlyAvgTemperatureIterator].temperature;
    }
  }
}

function main() {
  const fs = require('fs');

  let countries = [];

  countryNames(countries);
  countryAbbreviations(countries);
  countryAvgMaleHeights(countries);
  countryCapitalCities(countries);
  countryContinents(countries);
  countryCurrencyNames(countries);
  countryCurrencyCodes(countries);
  countryReligions(countries);
  countryElevations(countries);
  countryLifeExpectancies(countries);
  countryPopulations(countries);
  countryPopulationDensities(countries);
  countrySurfaceAreas(countries);
  countryYearlyAvgTemperatures(countries);

  fs.writeFile('./src/country-data.json', JSON.stringify(countries), err => {
    if (err) throw err;
    console.log('Fichero json creado con exito.');
  });

  // console.log(countries);
}

main();
