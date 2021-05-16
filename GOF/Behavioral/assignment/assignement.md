Solve any one of the following

#1) Create a payment gateway for ICICI bank where all the transaction details for payment made at gateway is sent to the bank.

PaymentService:

public class PaymentService
{

 	public PaymentService(provider: Provider){
 		this.provider = provider;
	}
       public void makePayment(Transaction t){
           updatePaymentToGatewayDB(t);
           ICICIBankServiceUtil.postTransaction(t);
       }
}
Also needed is a complete support to ICICIBankService, anytime service is changed, Payment gateway needs to update their code to keep supporting ICICI

After this payment gateway got some noise around, AXIS bank also came and asked them to provide transaction details for all the payments.

#2) Suppose you are writing a Adventure game. The following are the characters

     i)    King

     ii)   Queen

     iii)  Knight

All these characters can fight. They can fight with any of the following  weapons

     i)     Sword

     ii)    Knife

     iii)   BowAndArrow

     iv)    Axe

Write a simple app which has all these characters and assign one weapon to them and call fight method which display.
Each character has display() method which when called will display e.g “I am a king” or “I am a queen”.
Each Character has fight() method which when called will display “I am fighting with sword” or “I am fighting
with BowAndArrow” based on what weapon the character has

#3) Design a software which will apply some calibration on the data we get from an electromagnetic system.
What calibration to apply is decided on the basis of vendor type (CISCO/HUAWEI) then technology (VDSL/ADSL) and
then device type (port/modem).  If the software is not able to apply calibration due to an un-identifiable
data provided, it should present a informative description about what data is missed.
