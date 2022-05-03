function yearsAgo (year){
  console.log(year.length)
  if(year == ""){
   return "please enter valid number"
    }
    else if(typeof year == "string"){
      return "invalid data type!"
    }
    else if(String(year).length < 4 || String(year).length > 4){
      return "the length of a year is 4 number: error!"
    }
    else if(typeof year == "number"){
     return new Date().getFullYear() - year
    }
  }
  
  console.log(yearsAgo(1976))