const MovingObject = require("./moving_object.js");
// window.MovingObject = MovingObject;

canvas: document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    canvas.width = 500;
    canvas.height = 500;

    const ctx = canvas.getContext("2D");

    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    });

    mo.draw(ctx);

});

