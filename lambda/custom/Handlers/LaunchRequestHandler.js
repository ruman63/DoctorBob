module.exports = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
      const speechText = 'Hello! How are you doing today?';
  
      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt('How are you doing today?')
        .withSimpleCard('Hello!', speechText)
        .getResponse();
    },
}