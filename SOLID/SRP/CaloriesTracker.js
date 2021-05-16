//import logMessage from './logger.js';
const logMessage = require('./logger.js').logMessage;
class CaloriesTracker {
    constructor(maxCalories){
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }
    trackCalories(caloriesCount){
        this.currentCalories += caloriesCount;
        if(this.currentCalories > this.maxCalories){
            //this.logCaloriesSurpluse();
           logMessage('Max calories Exceeded!');
        }
    }
    // logCaloriesSurpluse(){
    //     console.log('Max calories Exceeded!');
    // }
}
const caloriesTracker = new CaloriesTracker(2000);
caloriesTracker.trackCalories(1000);
caloriesTracker.trackCalories(500);
caloriesTracker.trackCalories(800);
/**Problem with this class is it's having multiple responsibility and therefor
 multiple reason to change like tomorrow if i need to send the email notification 
 for calories exceed limit than we need to modify Calories tracker class which 
 is not a good pratice to do. commenting code which need to be remove from this class
 to implement SRP.
 **/
