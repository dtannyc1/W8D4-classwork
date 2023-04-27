// Function.prototype.inherits = function(parents) {
//     let Surrogate = function() {};
//     Surrogate.prototype = parents.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this; 
// };

Function.prototype.inherits = function(parents) {
    this.prototype = Object.create(parents.prototype);
    this.prototype.constructor = this; 
};


function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

MovingObject.prototype.name = 'DAVID'; 
let ship = new Ship();
let asteroid = new Asteroid();

console.log(ship.name);
console.log(asteroid.name);

Ship.prototype.banana = 'TANNNN';
console.log(ship.banana);
console.log(asteroid.banana);

console.log(Ship.prototype)
console.log(Asteroid.prototype)


