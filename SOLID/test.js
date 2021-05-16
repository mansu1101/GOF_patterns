//accolite 

function outer(a){
    var b = 10;
    return function(b){
        return a+b+c
    }
}

console.log(a);
inputbox = onKeyup => betterfuntion(this) ; //abc --> 
 function debunceFunction(fn, dealy){
     setTimeout(()=>{
        return getData();
     }, delay) // 300
 }
var betterfuntion  = debunceFunction(  function getData() { 
    console.log('backend api call to get the data');
}, 300)


console.log(outer(10)(10)); // closer 30 

 let ary = [1,2,3];
 ary.push(5); 
 var a;
 let b; {}
Array.prototype.myPush = funnction() {
  // 

}
ary.Mypush()
 let obj = {};
 console.log(Object.define()) 
 `${obj}sitingnngngnng` // es6 
let myfun => {

}
// arguments ---> ...  [...]
// {MyModule1, Mymodule2}


//--------------------------------------------Surveyfy

0.

1.

console.log(a) 
callToDB(data, cb)
const a = 10;
secondCallToDb(data2, cb)
console.log(a)


EVENT LOOP














1.

console.log(a) 
const a = 10; 
console.log(a)

output = undefined
10

2. 

//let i

for(let i=0;i<3;i++) {

	const log = () => { console.log(i) }
  
  setTimeout(log, 100)
}


output : 3, 3, 3

3. 
const array = [1,2,3,4,5]

array.length = 2 

console.log(array[3])
console.log(array.length)

output = 4, 5



//startDate: 2021-04-01, currentDate: 2022-03-03, 1
function calculateUpcomingSubscriptionDate(startDate, currentDate, frequencyInMonths) {
	let startDay = new Date(startDate).getDate();
  let startMonth = new Date(startDate).getMonth() + 1;
  let currentDay = new Date(currentDate).getDate();

  let currentMonth = new Date(currentDate).getMonth() + 1;
  let currentYr =  new Date(currentDate).getFullYear();
  const oneDay = 24 * 60 * 60 * 1000;
  let diffDays = Math.round(Math.abs((new Date(currentDate) - new Date(startDate)) / oneDay));
  console.log(diffDays);
  let upcommingDate;
  //console.log(currentDay, startDay, currentMonth, startMonth);
  if (currentDay> startDay && currentMonth > startMonth && diffDays>(30 *frequencyInMonths)) {
  	upcommingDate = new Date(currentYr, currentMonth + 1, startDay);
    return upcommingDate;
    
  }
}