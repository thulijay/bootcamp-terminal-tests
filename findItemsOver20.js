module.exports = function findItemsOver20(item){
   var list = []
 for(var i=0;i<item.length;i++){
   if (item[i].qty > 20){
     list.push(item[i])
   }
 }
   return list
 }
