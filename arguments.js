
// function sum() {
    // let total = 0;
    // let args = Array.from(arguments);

    // args.forEach ( (el) => {
    //     total += el;
    // });

    // return total;
// }


// console.log(sum(1, 2, 3, 4)) // === 10;
// console.log(sum(1, 2, 3, 4, 5))// === 15;

function sum(...args) {
    let total = 0;

    args.forEach ( (el) => {
        total += el;
    });

    return total;
}

// Function.prototype.myBind = function() {
//     let args = Array.from(arguments);
//     let that = this;

//     return function() {
//         let args2 = Array.from(arguments);
//         that.call(...args, ...args2);
//     };

// };

Function.prototype.myBind = function(...args) {
    let that = this;

    return function(...args2) {
        that.call(...args, ...args2);
    };
};

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
  markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true
  
  markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true
 
  markov.says.myBind(pavlov)("meow", "a tree");
  // Pavlov says meow to a tree!
  // true
  
  markov.says.myBind(pavlov, "meow")("Markov");
  // Pavlov says meow to Markov!
  // true
  
  
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me");
  // Pavlov says meow to me!
  // true
