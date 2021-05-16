"use strict";
class Bird {
    eat() {
        console.log('I can eat');
    }
}
class Duck extends Bird {
    quack() {
        console.log('I Can Quack');
    }
    fly() {
        console.log('I Can Fly');
    }
}
class Panguin extends Bird {
    swim() {
        console.log('I Can Swim');
    }
}
function makeFlyingBirdFly(bird) {
    bird.fly();
}
function makeSwimmingBirdSwim(bird) {
    bird.swim();
}
const duck = new Duck();
const penguin = new Panguin();
makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);
duck.quack();
penguin.eat();
duck.eat();
