/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    require('./Handlers/LaunchRequestHandler'),
    require('./Handlers/NotFeelingWellIntentHandler'),
    require('./Handlers/HelpIntentHandler'),
    require('./Handlers/CancelAndStopIntentHandler'),
    require('./Handlers/SessionEndedHandler')
  )
  .addErrorHandlers(require('./Handlers/ErrorHandler'))
  .lambda();
