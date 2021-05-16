class Bird {
    eat(){
        console.log('I can eat');
    }
}

interface FlyingBird{
    fly(): void;
}

interface SwimmingBird{
    swim(): void;
}

class Duck extends Bird implements FlyingBird{
    quack(){
      console.log('I Can Quack');  
    }

    fly() {
        console.log('I Can Fly');
    }
}

class Panguin extends Bird implements SwimmingBird{
    swim() {
        console.log('I Can Swim');
    }
}

function makeFlyingBirdFly(bird: FlyingBird){
    bird.fly();
}

function makeSwimmingBirdSwim(bird: SwimmingBird){
    bird.swim();
}

const duck = new Duck();
const penguin = new Panguin();
makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);

duck.quack();
penguin.eat();
duck.eat();