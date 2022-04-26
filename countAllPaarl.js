function countAllPaarl(str){
    let myArray = str.split(",");
    //console.log(myArray)
    var list = [];
   
    for (let i=0;i<myArray.length; i++){
     
      if(myArray[i].includes('CJ')){
        list.push(myArray[i]);
        
        console.log(myArray[i]);
       
      }
      
     
    }
    console.log(list)
    console.log(list.length)
    return list.length; 
  }
