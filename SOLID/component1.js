//2,4,7
// 1--> ab
// 2--> de
// 3 --> gh
// 4 --> 
 



const keyPadNumber = {1:'abc', 2: 'def', 3: 'ghi'};
//first take first digit and map with all the other degit 
userInput = "213";
// input --> 213 --> dag,da,dc,ea,eb,ec,fa,
// separtedDigits = userInput.split('');
// separtedDigits.forEach((element, index) => {
//     if(input.hasOwnProperty(element)){// first element 

//         if(input.hasOwnProperty(separtedDigits[index+1])) {// second element
//             //combinatio"n logic
//             // input --> 21 --> da,db,ea,eb
//             let combination='';
//             input[element].split('').forEach((eachElement)=>{
//                 input[separtedDigits[index+1]].split('').forEach((secondElement)=>{
//                    combination += `${eachElement}${secondElement},`;
//                 });
//             });
//             console.log('output :', combination);
//         }
//     }
// });
function makeCombination(input){ //"213"
    let count = input.length; //3
    let combination='';
    if(count){
       for(let i=0; i< input.length; i++) { // 2,1,3
            combination += `${input[i]},`;
            if(keyPadNumber[input[i]]){
                makeCombination(keyPadNumber[input[i]]);
            }
        };   
    }
    console.log('count: ', count);
    return combination;    
}
console.log(makeCombination(userInput));




