const eventSchema = require('./eventSchema');
const sessionSchema = require('./sessionSchema');
const participantSchema = require('./participantSchema');
const feedbackSchema = require('./feedbackSchema');
const questionSchema = require('./questionSchema');

module.exports = [
  eventSchema,
  sessionSchema,
  participantSchema,
  feedbackSchema,
  questionSchema,
];