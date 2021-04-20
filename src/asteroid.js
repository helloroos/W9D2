const MovingObject = require("./moving_object");
const Util = require("./util");

function Asteroid(pos) {
  MovingObject.call(this, pos);
  this.color = "#ccc";
  this.radius = 15;
}

Util.inherits(Asteroid, MovingObject);


