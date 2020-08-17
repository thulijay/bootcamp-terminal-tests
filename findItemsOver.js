module.exports = function findItemsOver(item2, threshold){
    var list2 = []
    for(var i=0;i<item2.length;i++){
      var x = item2[i];
      var y = x.qty;
      if(y > threshold){
         list2.push(x);  
      }
     }
     return list2;
   }