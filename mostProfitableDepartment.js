function mostProfitableDepartment (list) {
    var hardware = 0;
     var outdoor = 0;
     var carpentry = 0;
     var electronics = 0;
     var obj = {
       
   };
     for(var i=0;i<list.length;i++){
       if (list[i].department === 'hardware'){
         hardware = hardware + list[i].sales
          obj.hardware = hardware
       }
       if (list[i].department === 'outdoor'){
         outdoor = outdoor + list[i].sales
         obj.outdoor = outdoor
         
       }
       if (list[i].department === 'carpentry'){
         carpentry = carpentry + list[i].sales
         obj.carpentry = carpentry
         
       }
       if (list[i].department === 'electronics'){
         electronics = electronics + list[i].sales
         obj.electronics = electronics
         
       }
        
   }  
   
      var keys = Object.keys(obj);
       var max = keys[0];
       for (var i = 1, n = keys.length; i < n; ++i) {
          var k = keys[i];
          if (obj[k] > obj[max]) {
             max = k;
          }
       }
       
       return max;
     
   }
   