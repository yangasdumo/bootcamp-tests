function countAllFromTown(str){
    let myArray = str.split(", ");
    //console.log(myArray)
    var answer = [];
    for (let i=0;i<myArray.length; i++){
      
      if(myArray[i].startsWith('CL')){
        answer.push(myArray[i]);
        console.log(myArray[i]);
        
      }
    }
    console.log(answer.length);
    console.log(answer[0].split(","));
    return answer[0].split(",").length;
    
  }