const circle = require("./circle.js");

function circAndArea()  {
    var radius = 3;
    console.log("The circumference of a circle of radius " + radius + " is " + circle.circumference(radius));
    console.log("Its area is " + circle.area(radius));
}

circAndArea();