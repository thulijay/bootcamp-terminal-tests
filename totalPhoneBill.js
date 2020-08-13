module.exports = function totalPhoneBill(bill){
   
    var total = 0;
    var phone = bill.split(', ')
    
    for(var i=0; i<phone.length; i++){
    var bill2 = phone[i];
      if(bill2 === 'call'){
      total = total + 2.75;
      }
  else {
    total = total + 0.65;
   } 
     }

    return 'R' + total.toFixed(2);
}
