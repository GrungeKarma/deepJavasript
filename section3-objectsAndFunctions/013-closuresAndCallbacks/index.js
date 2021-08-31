//some other examples of closures you may have used


//Timeout example
function sayHiLater() {
  var greeting = 'Hi!';

  setTimeout(function () {
    console.log(greeting);
  }, 3000);
}

sayHiLater();

//jQuery uses function expressions and firs-class functions
//$('button').click(function () {
//
//})

//callback example
function tellMeWhenDone(callback) {

  var a = 1000;
  var b = 1000;

  callback();

}

tellMeWhenDone(function () {
  console.log('I am done!')
});

tellMeWhenDone(function () {
  alert('I am done!')
});
