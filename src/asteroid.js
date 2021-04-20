const MovingObject = require("./moving_object");
const Util = require("./util");

function Asteroid(options) {
  MovingObject.call(this, options);
  this.color = "#ccc";
  this.radius = 25;
  this.vel = Util.randomVec(100);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;