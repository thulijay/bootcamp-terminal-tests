module.exports = function countAllPaarl(item){
    //console.log(item)

  var x = item.split(',')
  var paarlCount = []
    for (var i=0;i<x.length;i++){
       if (x[i].trim().startsWith('CJ')){
       	paarlCount.push(x[i])
       }
    }
 return paarlCount.length;
}