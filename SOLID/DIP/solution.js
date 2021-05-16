class Store {
    //Now store class wont change if we introduce a new payment getway
    constructor(paymentProcessor){
        this.paymentProcessor = paymentProcessor;
    }
    purchesBike(quantity){
            this.paymentProcessor.pay(200 * quantity);
    }
    purchaseHelmet(quantity){
        this.paymentProcessor.pay(15 * quantity);
    }
}

//middelwhare 
class StripePaymentProcessor {
    constructor(user){
        this.stripe = new Stripe(user);
    }
    pay(ammount){
        this.stripe.makePayment(ammount);
    }
}
//middelwhare 
class PaypalPaymentProcessor{
    constructor(user){
        this.user = user;
        this.paypal = new Paypal();
    }
    pay(ammount){
        this.paypal.makePayment(this.user,ammount);
    }
}

//Actual class
class Stripe{
    constructor(user){
        this.user = user;
    }
    makePayment(ammount){
    console.log(`${this.user} made payment of $${ammount} with Stripe.`);
    }
}

//Actual class
class Paypal{   
    makePayment(user, ammount){
    console.log(`${user} made payment of $${ammount} with Paypal.`);
    }
}

//Client invocation of code
const store = new Store(new StripePaymentProcessor("Manish"));//if I use paypalPaymentProcessor object it will work fine
store.purchesBike(2);
store.purchaseHelmet(2);

/**
 * In this solution we inverted the tight cuople dependecy called Stripe API and introduce the
 * moddelwhere for payment processing. We can also introduce the factory for getting the right payment 
 * processor implemention for our use.
 */