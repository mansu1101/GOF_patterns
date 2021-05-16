class Bird{
    fly(){
        console.log('I Can Fly');
    }
}

class Duck extends Bird{
    quack(){
      console.log('I Can Quack');  
    }
}

class Panguin extends Bird{
    fly(){
        throw new Error('I Cannot Fly');
    }
    swim(){
        console.log('I Can Swim');
    }
}
function makeBirdFly(bird){
    bird.fly();
}

const duck = new Duck();
const penguin = new Panguin();
makeBirdFly(duck);
makeBirdFly(penguin);