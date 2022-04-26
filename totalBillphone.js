function totalPhoneBill(str){
    let myArray = str.split(",");
    //console.log(myArray)
    var list = [];
    var call  = 0.00;
    var sms  = 0.00;
  
   
    for (let i=0;i<myArray.length; i++){
     
      if(myArray[i].includes('call')){
        call = call + 2.75
       }
       if(myArray[i].includes('sms')){
        sms = sms + 0.65
       }
      
    }
    var total = sms + call;
    var fullTotal = `R${total.toFixed(2)}`;
  
    console.log(fullTotal)
   
    return fullTotal
  }