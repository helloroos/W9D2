const Asteroid = require("./asteroid");

function Game() {
    const DIM_X = 500;
    const DIM_Y = 500;
    const NUM_ASTEROIDS = 10;
    this.asteroids = [];
    this.addAsteroids();
};

Game.prototype.addAsteroids = function(){
    for (let i = 0; i < NUM_ASTEROIDS; i++) {
        let asteroid = new Asteroid({randomPosition});
        this.asteroids.push(asteroid);
    };
};

Game.prototype.randomPosition = function(){
    return [Math.floor(Math.random() * 500), Math.floor(Math.random() * 500)];
};

Game.prototype.draw = function(ctx) {
    ctx.clearRect();
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].draw(ctx);
    };
};

Game.prototype.moveObjects = function(){
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].move();
    };
};