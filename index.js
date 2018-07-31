function shout(param1) {
  return param1.toUpperCase();
}


function whisper(param1) {
  return param1.toLowerCase();
}

function logShout(param1) {
  console.log(param1.toUpperCase());
}

function logWhisper(param1) {
  console.log(param1.toLowerCase());
}

function sayHiToGrandma(param1){
  if(param1.toLowerCase() == param1)
    return "I can't hear you!";
}
