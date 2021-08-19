// long running function
function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
  console.log("finished function");
}

function clickHandler() {
  console.log("click event!");
}

// listen for the click event
document.addEventListener("click", clickHandler);

waitThreeSeconds();
console.log("finished execution");

//console.logs 'finished function, finished execution' then after click 'click event!'

//javaScript waits for the execution context to finish then processes the event que (aka event loop), which has events added by the browser asynchronously
//in the end the javaScript is ran synchronously
