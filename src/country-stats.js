/**
 * @file country-life-expectancy.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Winter 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program shows selected data about COUNTRIES stored in the json files on country-json/src folder
 */

"use strict"

/**
 * @description Function that calculates the most and least populated countries
 *
 * @param {array} countries - Array of objects of countries with json format
 */
function mostAndLeastPopulated(COUNTRIES) {
  let largestPopulation = COUNTRIES[0].population;
  let largestPopulationIterator = 0;
  let smallestPopulation = COUNTRIES[0].population;
  let smallestPopulationIterator = 0;
  for (let countriesIterator = 1; countriesIterator < COUNTRIES.length; countriesIterator++) {
    if (COUNTRIES[countriesIterator].population > largestPopulation) {
      largestPopulation = COUNTRIES[countriesIterator].population;
      largestPopulationIterator = countriesIterator;
    }
    if (COUNTRIES[countriesIterator].population < smallestPopulation) {
      smallestPopulation = COUNTRIES[countriesIterator].population;
      smallestPopulationIterator = countriesIterator;
    }
  }
  console.log('El país más poblado del mundo es', COUNTRIES[largestPopulationIterator].name, 'con', largestPopulation, 'habitantes y el menos poblado es', COUNTRIES[smallestPopulationIterator].name, 'con', smallestPopulation, 'habitantes.');
}

/**
 * @description Function that calculates the country with the highest population density in America
 *
 * @param {array} countries - Array of objects of countries with json format
 */
function highestPopulationDensityOn(COUNTRIES) {
  let highestPopulationDensity = 0;
  let highestPopulationDensityIterator = 0;
  for (let countriesIterator = 0; countriesIterator < COUNTRIES.length; countriesIterator++) {
    if (((COUNTRIES[countriesIterator].continent === 'North America') || (COUNTRIES[countriesIterator].continent === 'South America')) && (COUNTRIES[countriesIterator].populationDensity > highestPopulationDensity)) {
      highestPopulationDensity = COUNTRIES[countriesIterator].populationDensity;
      highestPopulationDensityIterator = countriesIterator;
    }
  }
  console.log('El país con mayor densidad de población en América es', COUNTRIES[highestPopulationDensityIterator].name, 'con', highestPopulationDensity, 'de densidad de poblacion.');
}

/**
 * @description Function that calculates the 3 countries with the highest life expectancy
 *
 * @param {array} countries - Array of objects of countries with json format
 */
function highestLifeExpectancy(COUNTRIES) {
  let africaFirst = 0; let africaSecond = 0; let africaThird = 0; let africaFirstIterator; let africaSecondIterator; let africaThirdIterator;
  let northAmericaFirst = 0; let northAmericaSecond = 0; let northAmericaThird = 0; let northAmericaFirstIterator; let northAmericaSecondIterator; let northAmericaThirdIterator;
  let southAmericaFirst = 0; let southAmericaSecond = 0; let southAmericaThird = 0; let southAmericaFirstIterator; let southAmericaSecondIterator; let southAmericaThirdIterator;
  let asiaFirst = 0; let asiaSecond = 0; let asiaThird = 0; let asiaFirstIterator; let asiaSecondIterator; let asiaThirdIterator;
  let europeFirst = 0; let europeSecond = 0; let europeThird = 0; let europeFirstIterator; let europeSecondIterator; let europeThirdIterator;
  let oceaniaFirst = 0; let oceaniaSecond = 0; let oceaniaThird = 0; let oceaniaFirstIterator; let oceaniaSecondIterator; let oceaniaThirdIterator;
  for (let countriesIterator = 0; countriesIterator < COUNTRIES.length; countriesIterator++) {
    if ((COUNTRIES[countriesIterator].continent === 'Africa') && (!isNaN(COUNTRIES[countriesIterator].lifeExpectancy))) {
      if (COUNTRIES[countriesIterator].lifeExpectancy > africaFirst) {
        africaFirst = COUNTRIES[countriesIterator].lifeExpectancy;
        africaFirstIterator = countriesIterator;
      } else if (COUNTRIES[countriesIterator].lifeExpectancy > africaSecond) {
        africaSecond = COUNTRIES[countriesIterator].lifeExpectancy;
        africaSecondIterator = countriesIterator;
      } else if (COUNTRIES[countriesIterator].lifeExpectancy > africaThird) {
        africaThird = COUNTRIES[countriesIterator].lifeExpectancy;
        africaThirdIterator = countriesIterator;
      }
    } else if ((COUNTRIES[countriesIterator].continent === 'North America') && (!isNaN(COUNTRIES[countriesIterator].lifeExpectancy))) {
      if (COUNTRIES[countriesIterator].lifeExpectancy > northAmericaFirst) {
        northAmericaFirst = COUNTRIES[countriesIterator].lifeExpectancy;
        northAmericaFirstIterator = countriesIterator;
      } else if (COUNTRIES[countriesIterator].lifeExpectancy > northAmericaSecond) {
        northAmericaSecond = COUNTRIES[countriesIterator].lifeExpectancy;
        northAmericaSecondIterator = countriesIterator;
      } else if (COUNTRIES[countriesIterator].lifeExpectancy > northAmericaThird) {
        northAmericaThird = COUNTRIES[countriesIterator].lifeExpectancy;
        northAmericaThirdIterator = countriesIterator;
      }
    } else if ((COUNTRIES[countriesIterator].continent === 'South America') && (!isNaN(COUNTRIES[countriesIterator].lifeExpectancy))) {
      if (COUNTRIES[countriesIterator].lifeExpectancy > southAmericaFirst) {
        southAmericaFirst = COUNTRIES[countriesIterator].lifeExpectancy;
        southAmericaFirstIterator = countriesIterator;
      } else if (COUNTRIES[countriesIterator].lifeExpectancy > southAmericaSecond) {
        southAmericaSecond = COUNTRIES[countriesIterator].lifeExpectancy;
        southAmericaSecondIterator = countriesIterator;
      } else if (COUNTRIES[countriesIterator].lifeExpectancy > southAmericaThird) {
        southAmericaThird = COUNTRIES[countriesIterator].lifeExpectancy;
        southAmericaThirdIterator = countriesIterator;
      }
    } else if ((COUNTRIES[countriesIterator].continent === 'Asia') && (!isNaN(COUNTRIES[countriesIterator].lifeExpectancy))) {
      if (COUNTRIES[countriesIterator].lifeExpectancy > asiaFirst) {
        asiaFirst = COUNTRIES[countriesIterator].lifeExpectancy;
        asiaFirstIterator = countriesIterator;
      } else if (COUNTRIES[countriesIterator].lifeExpectancy > asiaSecond) {
        asiaSecond = COUNTRIES[countriesIterator].lifeExpectancy;
        asiaSecondIterator = countriesIterator;
      } else if (COUNTRIES[countriesIterator].lifeExpectancy > asiaThird) {
        asiaThird = COUNTRIES[countriesIterator].lifeExpectancy;
        asiaThirdIterator = countriesIterator;
      }
    } else if ((COUNTRIES[countriesIterator].continent === 'Europe') && (!isNaN(COUNTRIES[countriesIterator].lifeExpectancy))) {
      if (COUNTRIES[countriesIterator].lifeExpectancy > europeFirst) {
        europeFirst = COUNTRIES[countriesIterator].lifeExpectancy;
        europeFirstIterator = countriesIterator;
      } else if (COUNTRIES[countriesIterator].lifeExpectancy > europeSecond) {
        europeSecond = COUNTRIES[countriesIterator].lifeExpectancy;
        europeSecondIterator = countriesIterator;
      } else if (COUNTRIES[countriesIterator].lifeExpectancy > europeThird) {
        europeThird = COUNTRIES[countriesIterator].lifeExpectancy;
        europeThirdIterator = countriesIterator;
      }
    } else if ((COUNTRIES[countriesIterator].continent === 'Oceania') && (!isNaN(COUNTRIES[countriesIterator].lifeExpectancy))) {
      if (COUNTRIES[countriesIterator].lifeExpectancy > oceaniaFirst) {
        oceaniaFirst = COUNTRIES[countriesIterator].lifeExpectancy;
        oceaniaFirstIterator = countriesIterator;
      } else if (COUNTRIES[countriesIterator].lifeExpectancy > oceaniaSecond) {
        oceaniaSecond = COUNTRIES[countriesIterator].lifeExpectancy;
        oceaniaSecondIterator = countriesIterator;
      } else if (COUNTRIES[countriesIterator].lifeExpectancy > oceaniaThird) {
        oceaniaThird = COUNTRIES[countriesIterator].lifeExpectancy;
        oceaniaThirdIterator = countriesIterator;
      }
    }
  }
  console.log('Los 3 países con mayor esperanza de vida en cada uno de los continentes son:');
  console.log('Africa:', COUNTRIES[africaFirstIterator].name, '(', africaFirst, '),', COUNTRIES[africaSecondIterator].name, '(', africaSecond, ') y ', COUNTRIES[africaThirdIterator].name, '(', africaThird, ')');
  console.log('America del Norte:', COUNTRIES[northAmericaFirstIterator].name, '(', northAmericaFirst, '),', COUNTRIES[northAmericaSecondIterator].name, '(', northAmericaSecond, ') y ', COUNTRIES[northAmericaThirdIterator].name, '(', northAmericaThird, ')');
  console.log('America del Sur:', COUNTRIES[southAmericaFirstIterator].name, '(', southAmericaFirst, '),', COUNTRIES[southAmericaSecondIterator].name, '(', southAmericaSecond, ') y ', COUNTRIES[southAmericaThirdIterator].name, '(', southAmericaThird, ')');
  console.log('Asia:', COUNTRIES[asiaFirstIterator].name, '(', asiaFirst, '),', COUNTRIES[asiaSecondIterator].name, '(', asiaSecond, ') y ', COUNTRIES[asiaThirdIterator].name, '(', asiaThird, ')');
  console.log('Europa:', COUNTRIES[europeFirstIterator].name, '(', europeFirst, '),', COUNTRIES[europeSecondIterator].name, '(', europeSecond, ') y ', COUNTRIES[europeThirdIterator].name, '(', europeThird, ')');
  console.log('Oceania:', COUNTRIES[oceaniaFirstIterator].name, '(', oceaniaFirst, '),', COUNTRIES[oceaniaSecondIterator].name, '(', oceaniaSecond, ') y ', COUNTRIES[oceaniaThirdIterator].name, '(', oceaniaThird, ')');
}

/**
 * @description Function that calculates the mean of the average male heigh on every continent
 *
 * @param {array} countries - Array of objects of countries with json format
 */
function avgMaleHeightMean(COUNTRIES) {
  let africa = 0; let africaTotal = 0;
  let northAmerica = 0; let northAmericaTotal = 0;
  let southAmerica = 0; let southAmericaTotal = 0;
  let asia = 0; let asiaTotal = 0;
  let europe = 0; let europeTotal = 0;
  let oceania = 0; let oceaniaTotal = 0;
  for (let countriesIterator = 0; countriesIterator < COUNTRIES.length; countriesIterator++) {
    if ((COUNTRIES[countriesIterator].continent === 'Africa') && (!isNaN(COUNTRIES[countriesIterator].avgMaleHeight))) {
      africa += COUNTRIES[countriesIterator].avgMaleHeight;
      africaTotal += 1;
    } else if ((COUNTRIES[countriesIterator].continent === 'North America') && (!isNaN(COUNTRIES[countriesIterator].avgMaleHeight))) {
      northAmerica += COUNTRIES[countriesIterator].avgMaleHeight;
      northAmericaTotal += 1;
    } else if ((COUNTRIES[countriesIterator].continent === 'South America') && (!isNaN(COUNTRIES[countriesIterator].avgMaleHeight))) {
      southAmerica += COUNTRIES[countriesIterator].avgMaleHeight;
      southAmericaTotal += 1;
    } else if ((COUNTRIES[countriesIterator].continent === 'Asia') && (!isNaN(COUNTRIES[countriesIterator].avgMaleHeight))) {
      asia += COUNTRIES[countriesIterator].avgMaleHeight;
      asiaTotal += 1;
    } else if ((COUNTRIES[countriesIterator].continent === 'Europe') && (!isNaN(COUNTRIES[countriesIterator].avgMaleHeight))) {
      europe += COUNTRIES[countriesIterator].avgMaleHeight;
      europeTotal += 1;
    } else if ((COUNTRIES[countriesIterator].continent === 'Oceania') && (!isNaN(COUNTRIES[countriesIterator].avgMaleHeight))) {
      oceania += COUNTRIES[countriesIterator].avgMaleHeight;
      oceaniaTotal += 1;
    }
  }
  console.log('La media de la altura promedio de los varones en cada uno de los continentes es:');
  console.log('Africa:', (Math.round((africa / africaTotal) * 1000) / 1000));
  console.log('America del Norte:', (Math.round((northAmerica / northAmericaTotal) * 1000) / 1000));
  console.log('America del Sur:', (Math.round((southAmerica / southAmericaTotal) * 1000) / 1000));
  console.log('Asia:', (Math.round((asia / asiaTotal) * 1000) / 1000));
  console.log('Europa:', (Math.round((europe / europeTotal) * 1000) / 1000));
  console.log('Oceania:', (Math.round((oceania / oceaniaTotal) * 1000) / 1000));
}

/**
 * @description Function that calculates the 5 most extended religions in the world
 *
 * @param {array} countries - Array of objects of countries with json format
 */
function mostExtendedReligions(COUNTRIES) {

}

/**
 * @description Function that calculates the lowest temperature on every continent
 *
 * @param {array} countries - Array of objects of countries with json format
 */
function lowestTemperatures(COUNTRIES) {
  let africa = 10000; let africaIterator = 0;
  let northAmerica = 10000; let northAmericaIterator = 0;
  let southAmerica = 10000; let southAmericaIterator = 0;
  let asia = 10000; let asiaIterator = 0;
  let europe = 10000; let europeIterator = 0;
  let oceania = 10000; let oceaniaIterator = 0;
  for (let countriesIterator = 1; countriesIterator < COUNTRIES.length; countriesIterator++) {
    if ((COUNTRIES[countriesIterator].continent === 'Africa') && (COUNTRIES[countriesIterator].yearlyAvgTemperature < africa)) {
      africa = COUNTRIES[countriesIterator].yearlyAvgTemperature;
      africaIterator = countriesIterator;
    } else if ((COUNTRIES[countriesIterator].continent === 'North America') && (COUNTRIES[countriesIterator].yearlyAvgTemperature < northAmerica)) {
      northAmerica = COUNTRIES[countriesIterator].yearlyAvgTemperature;
      northAmericaIterator = countriesIterator;
    } else if ((COUNTRIES[countriesIterator].continent === 'South America') && (COUNTRIES[countriesIterator].yearlyAvgTemperature < southAmerica)) {
      southAmerica = COUNTRIES[countriesIterator].yearlyAvgTemperature;
      southAmericaIterator = countriesIterator;
    } else if ((COUNTRIES[countriesIterator].continent === 'Asia') && (COUNTRIES[countriesIterator].yearlyAvgTemperature < asia)) {
      asia = COUNTRIES[countriesIterator].yearlyAvgTemperature;
      asiaIterator = countriesIterator;
    } else if ((COUNTRIES[countriesIterator].continent === 'Europe') && (COUNTRIES[countriesIterator].yearlyAvgTemperature < europe)) {
      europe = COUNTRIES[countriesIterator].yearlyAvgTemperature;
      europeIterator = countriesIterator;
    } else if ((COUNTRIES[countriesIterator].continent === 'Oceania') && (COUNTRIES[countriesIterator].yearlyAvgTemperature < oceania)) {
      oceania = COUNTRIES[countriesIterator].yearlyAvgTemperature;
      oceaniaIterator = countriesIterator;
    }
  }
  console.log('Los países con más bajas temperaturas en cada uno de los continentes son los siguientes:');
  console.log('Africa:', COUNTRIES[africaIterator].name, 'con', africa, '°');
  console.log('America del Norte:', COUNTRIES[northAmericaIterator].name, 'con', northAmerica, '°');
  console.log('America del Sur:', COUNTRIES[southAmericaIterator].name, 'con', southAmerica, '°');
  console.log('Asia:', COUNTRIES[asiaIterator].name, 'con', asia, '°');
  console.log('Europa:', COUNTRIES[europeIterator].name, 'con', europe, '°');
  console.log('Oceania:', COUNTRIES[oceaniaIterator].name, 'con', oceania, '°');
}

/**
 * @description Function that calls all other functions in this script
 */
function main() {
  const COUNTRIES = require('./country-data.json');

  mostAndLeastPopulated(COUNTRIES);
  highestPopulationDensityOn(COUNTRIES);
  highestLifeExpectancy(COUNTRIES);
  avgMaleHeightMean(COUNTRIES);
  // mostExtendedReligions(COUNTRIES);
  lowestTemperatures(COUNTRIES);
}

main();
