module.exports = function regCheck(regNum, location){
    //console.log(regNum)
    //console.log(location)
   if(regNum.startsWith(location)){
     return true;
   }
  else if(regNum.endsWith(location)){
    return true;
  }
  return false;
  }