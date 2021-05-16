class FlyingBird{
    fly(){
        console.log('I Can Fly');
    }
}
class SwimmingBird{
    swim(){
        console.log('I Can Swim');
    }
}

class Duck extends FlyingBird{
    quack(){
      console.log('I Can Quack');  
    }
}

class Panguin extends SwimmingBird{
}

function makeFlyingBirdFly(bird){
    bird.fly();
}

function makeSwimmingBirdSwim(bird){
    bird.swim();
}

const duck = new Duck();
const penguin = new Panguin();
makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);