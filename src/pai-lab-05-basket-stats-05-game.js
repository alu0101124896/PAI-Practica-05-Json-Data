/**
 * @file pai-lab-05-basket-stats-05-game.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Winter 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program outputs the game id, the players keys, the team who atempted the most free throws, the number of player who did at least one assist and the player with highest 3 poit percentage
 */

"use strict"

/**
 * @description Function that outputs the game id
 *
 * @param {array} MATCH_DATA - Array of objects of data about match
 */
function matchId(MATCH_DATA) {
  console.log('Game ID:', MATCH_DATA.id);
}

/**
 * @description Function that outputs the players keys
 *
 * @param {array} MATCH_DATA - Array of objects of data about match
 */
function playersProperties(MATCH_DATA) {
  let playersProperties = Object.keys(MATCH_DATA.players[0]);
  console.log('Los atributos de los jugadores son:')
  for (let playersPropertiesIterator = 0; playersPropertiesIterator < playersProperties.length; playersPropertiesIterator++) {
    console.log(playersProperties[playersPropertiesIterator])
  }
}

/**
 * @description Function that compares turnovers and assists
 *
 * @param {array} MATCH_DATA - Array of objects of data about match
 */
function turnoversVsAssists(MATCH_DATA) {
  console.log('Pacers players with more turnovers than assists:')
  for (let playersIterator = 0; playersIterator < MATCH_DATA.players.length; playersIterator++) {
    if ((MATCH_DATA.players[playersIterator].teamName === "Pacers") && (MATCH_DATA.players[playersIterator].turnovers > MATCH_DATA.players[playersIterator].assists)) {
      console.log(MATCH_DATA.players[playersIterator].firstName, MATCH_DATA.players[playersIterator].lastName, 'has an assist to turnover ratio of', (MATCH_DATA.players[playersIterator].assists + ':' + MATCH_DATA.players[playersIterator].turnovers))
    }
  }
  console.log('Hawks players with more turnovers than assists:')
  for (let playersIterator = 0; playersIterator < MATCH_DATA.players.length; playersIterator++) {
    if ((MATCH_DATA.players[playersIterator].teamName === "Hawks") && (MATCH_DATA.players[playersIterator].turnovers > MATCH_DATA.players[playersIterator].assists)) {
      console.log(MATCH_DATA.players[playersIterator].firstName, MATCH_DATA.players[playersIterator].lastName, 'has an assist to turnover ratio of', (MATCH_DATA.players[playersIterator].assists + ':' + MATCH_DATA.players[playersIterator].turnovers))
    }
  }
}

/**
 * @description Function that compares the atemted free throws
 *
 * @param {array} MATCH_DATA - Array of objects of data about match
 */
function moreFreeThrows(MATCH_DATA) {
  let pacersThrows = 0;
  let hawksThrows = 0;
  for (let playersIterator = 0; playersIterator < MATCH_DATA.players.length; playersIterator++) {
    if (MATCH_DATA.players[playersIterator].teamName === "Pacers") {
      pacersThrows += MATCH_DATA.players[playersIterator].freeThrowsAttempted
    } else if (MATCH_DATA.players[playersIterator].teamName === "Hawks") {
      hawksThrows += MATCH_DATA.players[playersIterator].freeThrowsAttempted
    }
  }
  if (pacersThrows < hawksThrows) {
    console.log('Hawks attempted the most free throws... Pacers:', pacersThrows, 'Hawks:', hawksThrows);
  } else if (pacersThrows > hawksThrows) {
    console.log('Pacers attempted the most free throws... Pacers:', pacersThrows, 'Hawks:', hawksThrows);
  } else {
    console.log('Both attempted the same free throws... Pacers:', pacersThrows, 'Hawks:', hawksThrows);
  }
}

/**
 * @description Function that counts the players who made at least one assist
 *
 * @param {array} MATCH_DATA - Array of objects of data about match
 */
function atLeastOneAssist(MATCH_DATA) {
  let playersAssistances = 0;
  for (let playersIterator = 0; playersIterator < MATCH_DATA.players.length; playersIterator++) {
    if (MATCH_DATA.players[playersIterator].assists > 0) {
      playersAssistances++;
    }
  }
  console.log('There were', playersAssistances, 'players that had at least one assist');
}

/**
 * @description Function that tels the player with highest 3 poit percentage
 *
 * @param {array} MATCH_DATA - Array of objects of data about match
 */
function highestThreePoitPercentage(MATCH_DATA) {
  let highestThreePoitPercentage = 0;
  let highestThreePoitPercentagePlayer = 0;
  for (let playersIterator = 0; playersIterator < MATCH_DATA.players.length; playersIterator++) {
    if ((MATCH_DATA.players[playersIterator].positionFull === "Guard") && ((MATCH_DATA.players[playersIterator].threePointersAttempted / MATCH_DATA.players[playersIterator].threePointersMade) > highestThreePoitPercentage)) {
      highestThreePoitPercentage = MATCH_DATA.players[playersIterator].threePointersAttempted / MATCH_DATA.players[playersIterator].threePointersMade;
      highestThreePoitPercentagePlayer = playersIterator;
    }
  }
  console.log('Guard (G) with highest 3 point percentage:', MATCH_DATA.players[highestThreePoitPercentagePlayer].firstName, MATCH_DATA.players[highestThreePoitPercentagePlayer].lastName, 'at', (highestThreePoitPercentage * 100) + '%');
}

/**
 * @description Function that calls all upper functions
 */
function main() {
  const MATCH_DATA = require('./20160502_Hawks-Pacers-game-data.js');

  matchId(MATCH_DATA);
  playersProperties(MATCH_DATA);
  turnoversVsAssists(MATCH_DATA);
  moreFreeThrows(MATCH_DATA);
  atLeastOneAssist(MATCH_DATA);
  highestThreePoitPercentage(MATCH_DATA);
}

main();
