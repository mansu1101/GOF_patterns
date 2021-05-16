/** PROBLEM-1  
 *  get all employees whose name start with alphabetical "a" letter and
 should also contain "sh" letter in between of name or "sh" 
 can come in the end of name */
const userArray = [
    {name: "sandip", salary: 15000}, 
    {name: "akash", salary: 16000},
    {name: "avinash", salary: 18000}
];



 function getUsers(){
    let users = []
     userArray.forEach((user)=>{
        //get first later
        let firstLetter = user.name.split('')[0].toUpperCase();
        //first check first later of alpha
        if(firstLetter === 'A'){
            // check if string cantains sh in it
            if(user.name.includes('sh')){
                // if both the condition macthes return the result;
                users.push(user);
            }
        }
     });
     return users;
 }
 //console.log('list of users ', getUsers());


 /** PROBLEM-2
  * write a function to convert multidimension array into single dimension array.
  * Note: write a generic function that will work for any depth level array
  */
 const inputArray = [1,2,[3,5,[4,8,[{},'abc']]]]; 
function flatArray(arr){
    return arr.reduce((flatelement, b)=> {
        return flatelement.concat( Array.isArray(b)? flatArray(b): b);
    } , []);
}
console.log(flatArray(inputArray));