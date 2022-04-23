//Implementation of map()

let myArray = [1,2,3,4];
  function map(myArray, mappingFunc) 
  {    
      const mappingArr = [];    
      for(let i=0;i<myArray.length;i++) 
    {        
          const result = mappingFunc(myArray[i]);       
          mappingArr.push(result);    
    }    
    return mappingArr;
}

console.log(map(myArray, item => item*2));


//Implementation of filter()

let myArray = [1, 2, 3, 4, 5];

function filter(myArray, filterFunc) 
{    
    const filteredArr = [];     
    for(let i=0;i<myArray.length;i++) 
    {        
        const result = filterFunc(myArray[i]);       
        if(result)             
        filteredArr.push(myArray[i]);    
     }    
     return filteredArr;
}
console.log(filter(myArray, item => item % 2 != 0));



//Implementation of recude()

let arr = [1, 2, 3, 4];
const sumReducer = (accumulator, currentValue) => accumulator + currentValue;

function reduce(arr, reducer, initialValue) 
{    
    let accumulator = initialValue === undefined ? 0 : initialValue        
    // loop though array    
    for(let i=0;i<arr.length;i++)        
    accumulator = reducer(accumulator, arr[i], i, arr);    
    return accumulator;
}

console.log(arr, sumReducer);
//console.log(arr, sumReducer, 5);


//Implementation of forEach
let arr = ["ashok",3,4];
function myEach(arr,callback) {
    const result = []
    for (let i = 0; i < arr.length; i += 1) {
        result.push(callback(arr[i]));
    }
    return result;
  }
 
  
  console.log(myEach(arr, item => item))

  