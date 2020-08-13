module.exports = function mostProfitableDepartment(item){
   var map = {}
   for (var i=0;i<item.length;i++){
     var dep = item[i].department
    if(map[dep] === undefined){
       map[dep] = 0
       }else{
     map[dep] += item[i].sales;
  }
   }
    var mostDep = "";
    var mostSales = 0
     for(var props in map){
       if(map[props] > mostSales){
         mostSales = map[props]
         mostDep = props
          }
     }
   return mostDep
  }
