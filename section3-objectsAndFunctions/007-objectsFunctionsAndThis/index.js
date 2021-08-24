//at this level in the code this points to the window object
console.log(this);

function a() {
  console.log(this);

  //attaches to the global object
  this.newvariable = 'hello';
}

//also logs the window object
a();

//logs hello because newvariable was attached to the global object
console.log(newvariable);

var b = function () {
  console.log(this);
}

//still logs the window object
b();

//functions always point to the same space in memory so they bring up the window object

var c = {
  name: 'the c object',
  log: function () {

    // will make the log state that the name is updated c object
    //this.name = 'Updated c object'

    console.log(this);
  }
}

//in the case where functions are attached to an object, the this keyword becomes the object that the method is sitting inside of
//logs
c.log();

var d = {
  name: 'the c object',
  log: function () {

    // will make the log state that the name is updated c object
    //this.name = 'Updated c object'

    var self = this;

    console.log(this);

    var setname = function (newname) {
      this.name = newname;
    }

    //it does not update it updates the function on the global object
    setname('Updated again! The c object.');
    console.log(this);
  }
}

//
d.log();

var e = {
  name: 'the c object',
  log: function () {

    //set this the self or that to fix the behavior that points this to the global window object.
    var self = this;

    console.log(self);

    var setname = function (newname) {
      self.name = newname;
    }

    //it does not update it updates the function on the global object
    setname('Updated again! The c object.');
    console.log(self);
  }
}
e.log();
