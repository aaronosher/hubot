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
  robot.respond(/avatar (.*)/i, res => {
    // Build Avatar URL
    const avatar = "https://github.com/" + res.match[1] + ".png";

    // Make request to Avatar URL
    rp(avatar)
      // If avatar exists, return URL
      .then(() => res.send(avatar))
      // If avatar doesn't exists send error message
      .catch(() => res.send("User doesn't exists."));
  });
};
