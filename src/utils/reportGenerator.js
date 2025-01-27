const { Event, Participant } = require('../models');
const { Parser } = require('json2csv');
const fs = require('fs');

const generateReport = async (format) => {
  const events = await Event.findAll();
  const participants = await Participant.findAll();

  const data = {
    events: events.map(event => event.toJSON()),
    participants: participants.map(participant => participant.toJSON()),
  };

  if (format === 'json') {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync('report.json', jsonData);
    return 'report.json';
  } else if (format === 'csv') {
    const parser = new Parser();
    const csvData = parser.parse(data);
    fs.writeFileSync('report.csv', csvData);
    return 'report.csv';
  } else {
    throw new Error('Unsupported format. Use "json" or "csv".');
  }
};

module.exports = generateReport;
