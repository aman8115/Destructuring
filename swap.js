function swap(){
   
    let a = 5
    let b = 10
    console.log("value before swaping ", a,b)
    b = a+b
     a = b-a
     b = b -a 
  
    console.log("value after swaping ",a,b)

    const newarray = [a,b]
   
    console.log( " new Array",newarray)
    
   
  }
swap()
