function repeatMessage(message, repeatCount){
  let messageToShow = "";
  for (let index = 0; index < repeatCount; index++) {
  messageToShow += message;
  }
  return messageToShow;
  }

  console.log(repeatMessage('alex was here ', 3))

  module.exports = {
    repeatMessage 
  }