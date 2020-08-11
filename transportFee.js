module.exports = function transportFee(transportCost) {
      if (transportCost == 'morning') { 
       return "R20"
      }
      if (transportCost == 'afternoon') {
       return "R10"
      }
      if (transportCost == 'nightshift') {
       return "free"
      }
  }