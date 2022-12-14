/**
 * @file pai-lab-05-basket-stats-01-game.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Winter 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program outputs the game id and the players keys
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
 * @description Function that calls all upper functions
 */
function main() {
  const MATCH_DATA = require('./20160502_Hawks-Pacers-game-data.js');

  matchId(MATCH_DATA);
  playersProperties(MATCH_DATA);
}

main();
