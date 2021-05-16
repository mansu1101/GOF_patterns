class Store {
    constructor(user){
        //this.stripe = new Stripe(user);
        //in case of other payment getway we need to do below
        this.paypal = new Paypal();
        this.user = user;

    }
    purchesBike(quantity){
        // this.stripe.makePayment(200 * quantity);
        this.paypal.makePayment(this.user, (200 * quantity));
    }
    purchaseHelmet(quantity){
        // this.stripe.makePayment(15 * quantity);
        this.paypal.makePayment(this.user, (15 * quantity));
    }
}
class Stripe{
    constructor(user){
        this.user = user;
    }
    makePayment(ammount){
    console.log(`${this.user} made payment of $${ammount} with Stripe.`);
    }
}
class Paypal{
   
    makePayment(user, ammount){
    console.log(`${user} made payment of $${ammount} with Paypal.`);
    }
}

const store = new Store("Manish");
store.purchesBike(2);
store.purchaseHelmet(2);

/**
 * Problem in above case is one dependencies is directly inject into Store class whenever
 * we wanted to change the payment getway it will be lots of work and so many 
 * modification is required to do in Store class. This type of problem can we fixed by 
 * Dependency Inversion Principle lets see the solution.js for DIP based code for sloving this problem.
 */