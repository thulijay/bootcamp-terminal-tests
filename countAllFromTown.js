module.exports = function countAllFromTown(item, location){
   var x = item.split(',');
    
    //console.log(item)
      
      console.log(location)
    var fromTown = []
    for (var i=0;i<x.length;i++){
      if (x[i].trim().startsWith(location)){
               fromTown.push(x[i])
      }
    }
      return fromTown.length;
    }