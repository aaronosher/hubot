// Description:
//   Script for retrieving GitHub Avatars
//
// Dependencies:
//  "request": "2.88.0"
//  "request-promise-native": "1.0.5"
//
// Configuration:
//
// Commands:
//   hubot avatar <username> - Returns URL to user's avatar on GitHub
//
// Notes:
//
// Author:
//   aaronosher

const rp = require('request-promise-native');

module.exports = (robot) => {
  /* Make Hubot listen for a command */ res => {
    // Build Avatar URL
    const avatar = "https://github.com/" + res.match[1] + ".png";

    // Make request to Avatar URL
    rp(avatar)
      // If avatar exists, return URL
      .then(() => /* Make Hubot respond */)
      // If avatar doesn't exists send error message
      .catch(() => console.log("User doesn't exists."));
  });
};
