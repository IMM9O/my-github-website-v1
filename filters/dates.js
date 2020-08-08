const { DateTime } = require("luxon");

module.exports = () => DateTime.fromJSDate(date, { zone: "utc" }).toFormat("d LLLL yyyy hh:mm a");