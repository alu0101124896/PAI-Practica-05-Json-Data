/**
 * @file country-life-expectancy.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Winter 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program combines the data about countries stored in the json files on country-json/src folder
 */

"use strict"

/**
 * @description Function that adds the names to the countries array
 *
 * @param {block} countries - Array of blocks of countries with json format
 */
function countryNames(countries) {
  const NAME_MODULE = require('./country-name.js');
  for (let countriesIterator = 0; countriesIterator < NAME_MODULE.COUNTRY_NAME.length; countriesIterator++) {
    countries[countriesIterator] = { name: NAME_MODULE.COUNTRY_NAME[countriesIterator].country };
  }
}

/**
 * @description Function that adds the abbreviations to the countries array
 *
 * @param {block} countries - Array of blocks of countries with json format
 */
function countryAbbreviations(countries) {
  const ABBREVIATION_MODULE = require('./country-abbreviation.js');
  for (let abbreviationIterator = 0; abbreviationIterator < ABBREVIATION_MODULE.COUNTRY_ABBREVIATION.length; abbreviationIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== ABBREVIATION_MODULE.COUNTRY_ABBREVIATION[abbreviationIterator].country)) {
      countriesIterator++;
    }
    if ((countriesIterator < countries.length) && (ABBREVIATION_MODULE.COUNTRY_ABBREVIATION[abbreviationIterator].abbreviation !== null)) {
      countries[countriesIterator].abbreviation = ABBREVIATION_MODULE.COUNTRY_ABBREVIATION[abbreviationIterator].abbreviation;
    }
  }
}

/**
 * @description Function that adds the average male heights to the countries array
 *
 * @param {block} countries - Array of blocks of countries with json format
 */
function countryAvgMaleHeights(countries) {
  const AVG_MALE_HEIGHT_MODULE = require('./country-avg-male-height.js');
  for (let avgMaleHeightIterator = 0; avgMaleHeightIterator < AVG_MALE_HEIGHT_MODULE.COUNTRY_AVG_MALE_HEIGHT.length; avgMaleHeightIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== AVG_MALE_HEIGHT_MODULE.COUNTRY_AVG_MALE_HEIGHT[avgMaleHeightIterator].country)) {
      countriesIterator++;
    }
    if ((countriesIterator < countries.length) && (AVG_MALE_HEIGHT_MODULE.COUNTRY_AVG_MALE_HEIGHT[avgMaleHeightIterator].height !== null)) {
      countries[countriesIterator].avgMaleHeight = Number(AVG_MALE_HEIGHT_MODULE.COUNTRY_AVG_MALE_HEIGHT[avgMaleHeightIterator].height);
    }
  }
}

/**
 * @description Function that adds the capital cities to the countries array
 *
 * @param {block} countries - Array of blocks of countries with json format
 */
function countryCapitalCities(countries) {
  const CAPITAL_CITY_MODULE = require('./country-capital-city.js');
  for (let capitalCityIterator = 0; capitalCityIterator < CAPITAL_CITY_MODULE.COUNTRY_CAPITAL_CITY.length; capitalCityIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== CAPITAL_CITY_MODULE.COUNTRY_CAPITAL_CITY[capitalCityIterator].country)) {
      countriesIterator++;
    }
    if ((countriesIterator < countries.length) && (CAPITAL_CITY_MODULE.COUNTRY_CAPITAL_CITY[capitalCityIterator].city !== null)) {
      countries[countriesIterator].capitalCity = CAPITAL_CITY_MODULE.COUNTRY_CAPITAL_CITY[capitalCityIterator].city;
    }
  }
}

/**
 * @description Function that adds the continents to the countries array
 *
 * @param {block} countries - Array of blocks of countries with json format
 */
function countryContinents(countries) {
  const CONTINENT_MODULE = require('./country-continent.js');
  for (let continentIterator = 0; continentIterator < CONTINENT_MODULE.COUNTRY_CONTINENT.length; continentIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== CONTINENT_MODULE.COUNTRY_CONTINENT[continentIterator].country)) {
      countriesIterator++;
    }
    if ((countriesIterator < countries.length) && (CONTINENT_MODULE.COUNTRY_CONTINENT[continentIterator].continent !== null)) {
      countries[countriesIterator].continent = CONTINENT_MODULE.COUNTRY_CONTINENT[continentIterator].continent;
    }
  }
}

/**
 * @description Function that adds the currency names to the countries array
 *
 * @param {block} countries - Array of blocks of countries with json format
 */
function countryCurrencyNames(countries) {
  const CURRENCY_NAME_MODULE = require('./country-currency-name.js');
  for (let currencyNameIterator = 0; currencyNameIterator < CURRENCY_NAME_MODULE.COUNTRY_CURRENCY_NAME.length; currencyNameIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== CURRENCY_NAME_MODULE.COUNTRY_CURRENCY_NAME[currencyNameIterator].country)) {
      countriesIterator++;
    }
    if ((countriesIterator < countries.length) && (CURRENCY_NAME_MODULE.COUNTRY_CURRENCY_NAME[currencyNameIterator].currency_name !== null)) {
      countries[countriesIterator].currencyName = CURRENCY_NAME_MODULE.COUNTRY_CURRENCY_NAME[currencyNameIterator].currency_name;
    }
  }
}

/**
 * @description Function that adds the currency codes to the countries array
 *
 * @param {block} countries - Array of blocks of countries with json format
 */
function countryCurrencyCodes(countries) {
  const CURRENCY_CODE_MODULE = require('./country-currency-code.js');
  for (let currencyCodeIterator = 0; currencyCodeIterator < CURRENCY_CODE_MODULE.COUNTRY_CURRENCY_CODE.length; currencyCodeIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== CURRENCY_CODE_MODULE.COUNTRY_CURRENCY_CODE[currencyCodeIterator].country)) {
      countriesIterator++;
    }
    if ((countriesIterator < countries.length) && (CURRENCY_CODE_MODULE.COUNTRY_CURRENCY_CODE[currencyCodeIterator].currency_code !== null)) {
      countries[countriesIterator].currencyCode = CURRENCY_CODE_MODULE.COUNTRY_CURRENCY_CODE[currencyCodeIterator].currency_code;
    }
  }
}

/**
 * @description Function that adds the religions to the countries array
 *
 * @param {block} countries - Array of blocks of countries with json format
 */
function countryReligions(countries) {
  const RELIGION_MODULE = require('./country-religion.js');
  for (let religionIterator = 0; religionIterator < RELIGION_MODULE.COUNTRY_RELIGION.length; religionIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== RELIGION_MODULE.COUNTRY_RELIGION[religionIterator].country)) {
      countriesIterator++;
    }
    if ((countriesIterator < countries.length) && (RELIGION_MODULE.COUNTRY_RELIGION[religionIterator].religion !== null)) {
      countries[countriesIterator].religion = RELIGION_MODULE.COUNTRY_RELIGION[religionIterator].religion;
    }
  }
}

/**
 * @description Function that adds the elevations to the countries array
 *
 * @param {block} countries - Array of blocks of countries with json format
 */
function countryElevations(countries) {
  const ELEVATION_MODULE = require('./country-elevation.js');
  for (let elevationIterator = 0; elevationIterator < ELEVATION_MODULE.COUNTRY_ELEVATION.length; elevationIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== ELEVATION_MODULE.COUNTRY_ELEVATION[elevationIterator].country)) {
      countriesIterator++;
    }
    if ((countriesIterator < countries.length) && (ELEVATION_MODULE.COUNTRY_ELEVATION[elevationIterator].elevation !== null)) {
      countries[countriesIterator].elevation = ELEVATION_MODULE.COUNTRY_ELEVATION[elevationIterator].elevation;
    }
  }
}

/**
 * @description Function that adds the life expectancies to the countries array
 *
 * @param {block} countries - Array of blocks of countries with json format
 */
function countryLifeExpectancies(countries) {
  const LIFE_EXPECTANCY_MODULE = require('./country-life-expectancy.js');
  for (let lifeExpectancyIterator = 0; lifeExpectancyIterator < LIFE_EXPECTANCY_MODULE.COUNTRY_LIFE_EXPECTANCY.length; lifeExpectancyIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== LIFE_EXPECTANCY_MODULE.COUNTRY_LIFE_EXPECTANCY[lifeExpectancyIterator].country)) {
      countriesIterator++;
    }
    if ((countriesIterator < countries.length) && (LIFE_EXPECTANCY_MODULE.COUNTRY_LIFE_EXPECTANCY[lifeExpectancyIterator].expectancy !== null)) {
      countries[countriesIterator].lifeExpectancy = Number(LIFE_EXPECTANCY_MODULE.COUNTRY_LIFE_EXPECTANCY[lifeExpectancyIterator].expectancy);
    }
  }
}

/**
 * @description Function that adds the populations to the countries array
 *
 * @param {block} countries - Array of blocks of countries with json format
 */
function countryPopulations(countries) {
  const POPULATION_MODULE = require('./country-population.js');
  for (let populationIterator = 0; populationIterator < POPULATION_MODULE.COUNTRY_POPULATION.length; populationIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== POPULATION_MODULE.COUNTRY_POPULATION[populationIterator].country)) {
      countriesIterator++;
    }
    if ((countriesIterator < countries.length) && (POPULATION_MODULE.COUNTRY_POPULATION[populationIterator].population !== null)) {
      countries[countriesIterator].population = Number(POPULATION_MODULE.COUNTRY_POPULATION[populationIterator].population);
    }
  }
}

/**
 * @description Function that adds the population densities to the countries array
 *
 * @param {block} countries - Array of blocks of countries with json format
 */
function countryPopulationDensities(countries) {
  const POPULATION_DENSITY_MODULE = require('./country-population-density.js');
  for (let populationDensityIterator = 0; populationDensityIterator < POPULATION_DENSITY_MODULE.COUNTRY_POPULATION_DENSITY.length; populationDensityIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== POPULATION_DENSITY_MODULE.COUNTRY_POPULATION_DENSITY[populationDensityIterator].country)) {
      countriesIterator++;
    }
    if ((countriesIterator < countries.length) && (POPULATION_DENSITY_MODULE.COUNTRY_POPULATION_DENSITY[populationDensityIterator].density !== null)) {
      countries[countriesIterator].populationDensity = Number(POPULATION_DENSITY_MODULE.COUNTRY_POPULATION_DENSITY[populationDensityIterator].density);
    }
  }
}

/**
 * @description Function that adds the surface areas to the countries array
 *
 * @param {block} countries - Array of blocks of countries with json format
 */
function countrySurfaceAreas(countries) {
  const SURFACE_AREA_MODULE = require('./country-surface-area.js');
  for (let surfaceAreaIterator = 0; surfaceAreaIterator < SURFACE_AREA_MODULE.COUNTRY_SURFACE_AREA.length; surfaceAreaIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== SURFACE_AREA_MODULE.COUNTRY_SURFACE_AREA[surfaceAreaIterator].country)) {
      countriesIterator++;
    }
    if ((countriesIterator < countries.length) && (SURFACE_AREA_MODULE.COUNTRY_SURFACE_AREA[surfaceAreaIterator].area !== null)) {
      countries[countriesIterator].surfaceArea = Number(SURFACE_AREA_MODULE.COUNTRY_SURFACE_AREA[surfaceAreaIterator].area);
    }
  }
}

/**
 * @description Function that adds the yearly average temperatures to the countries array
 *
 * @param {block} countries - Array of blocks of countries with json format
 */
function countryYearlyAvgTemperatures(countries) {
  const YEARLY_AVG_TEMPERATURE_MODULE = require('./country-yearly-avg-temperature.js');
  for (let yearlyAvgTemperatureIterator = 0; yearlyAvgTemperatureIterator < YEARLY_AVG_TEMPERATURE_MODULE.COUNTRY_YEARLY_AVG_TEMPERATURE.length; yearlyAvgTemperatureIterator++) {
    let countriesIterator = 0;
    while ((countriesIterator < countries.length) && (countries[countriesIterator].name !== YEARLY_AVG_TEMPERATURE_MODULE.COUNTRY_YEARLY_AVG_TEMPERATURE[yearlyAvgTemperatureIterator].country)) {
      countriesIterator++;
    }
    if ((countriesIterator < countries.length) && (YEARLY_AVG_TEMPERATURE_MODULE.COUNTRY_YEARLY_AVG_TEMPERATURE[yearlyAvgTemperatureIterator].temperature !== null)) {
      countries[countriesIterator].yearlyAvgTemperature = Number(YEARLY_AVG_TEMPERATURE_MODULE.COUNTRY_YEARLY_AVG_TEMPERATURE[yearlyAvgTemperatureIterator].temperature);
    }
  }
}

/**
 * @description Function that calls to all other functions in this script and writes the colected data to a json file
 */
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

  fs.writeFile('./country-data.json', JSON.stringify(countries), err => {
    if (err) throw err;
    console.log('Fichero json creado con exito.');
  });

  // console.log(countries);
}

main();
