
var array = ["Manish", "Chandan", "Piyush",
"Sunil", "Pankaj", "Piyush",
"Pankaj", "Tiny", "Chandan",
"Manish"];
var resultArray = []
var start = false;
var count = 0;
for(let i = 0 ;i<array.length; i++){
    for(let j = 0 ; j<resultArray.length; j++){
        if(array[i] ==resultArray[j]){
            start =true
        }
    }
    count++
    if(count==1&&start==false){
        resultArray.push(array[i])
    }
    start = false;
    count = 0
   
}
console.log(resultArray)
// output 
// manish , chandan, piyush,sunil,pankaj,Tiny