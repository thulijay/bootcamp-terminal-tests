module.exports = function fromWhere(item) {
    console.log(item)
   if (item == 'CY'){
     return 'Bellville'
  }
      if (item == 'CJ'){
       return "Paarl"
      }
    if (item == 'CA'){
      return "Cape Town"
    }
    else{
          return "Some other place!"
    }
  }