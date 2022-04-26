function findItemsOver20 (list) {
    var results = []
    for(var i=0;i<list.length;i++){
      var listItem = list[i].qty;
      
      if (listItem > 20){
        results.push(list[i])
          }
  
  } 
    console.log(results);
return results;
}  