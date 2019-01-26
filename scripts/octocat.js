// Description:
//   Script for getting a random octocat from the octodex
//
// Dependencies:
//  "request": "2.88.0"
//  "request-promise-native": "1.0.5"
//
// Configuration:
//
// Commands:
//   hubot octocat - Returns URL to a random octocat from the octodex
//
// Notes:
//
// Author:
//   aaronosher
const rp = require('request-promise-native');

// URL to JSON file to access cotodex
const api = "https://raw.githubusercontent.com/cocoaheads-miami/octodex-api/master/api/octodex.json";

const randomInt = (array) => {
  return Math.floor(Math.random()*array.length)
}

module.exports = robot => {
  robot.respond(/octocat/i, res => {
    // Call octodex JSON file
    rp(api)
      // parse JSON response
      .then(raw => JSON.parse(raw))
      // Send random octocat to user
      .then(octocats => res.send(octocats[randomInt(octocats)].url))
      // Catch any errors and tell the user
      .catch(err => res.send(err.message));
  });
};
