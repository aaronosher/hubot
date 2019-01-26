// Description:
//   Get's MLH Hackathons
//
// Dependencies:
//  "mlh-events-scraper": "1.1.1"
//
// Configuration:
//
// Commands:
//   hubot mlh <region> - Returns next five hackathons in specified region
//
// Notes:
//
// Author:
//   aaronosher

const mlh = require('mlh-events-scraper').default;

const getUpcomingEvents = (region, count) => {
  const now = Date.now();
  return mlh(region)
    .then(events => events.filter(event => {
      const start = new Date(event.start);
      const epoch = start.valueOf();

      return now < epoch;
    }))
    .then(events => events.sort((a, b) => {
      const aDate = new Date(a.start);
      const bDate = new Date(b.start);
      return aDate.valueOf() - bDate.valueOf();
    }))
    .then(events => events.slice(0, count));
};

module.exports = robot => {
  robot.respond(/mlh (.*)/i, res => {
    if (['us', 'eu'].includes(res.match[1].toLowerCase())) {
      const region = res.match[1].toLowerCase();
      getUpcomingEvents(region, 5)
        .then(events => events.reduce((acc, event, i, a) => {
          return acc + event.name + (a.length - 1 === i ? '.' : ', '); 
        }, "The next five events are "))
        .then(events => res.send(events))
        .catch(err => res.send(err));
    }
  });
};
