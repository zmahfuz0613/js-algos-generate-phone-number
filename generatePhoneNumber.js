// GENERATE PHONE NUMBER

const generatePhoneNumber = nums => {

  let maskValidPhoneNumber = '999-999-9999';
  let phoneNumber = [];
  if(Array.isArray(nums)) {
      phoneNumber.push(...Array.from(nums));       
  }else{
      phoneNumber.push(...Array.from(nums.toString()));        
  }

  phoneNumber.map(function(number){
      maskValidPhoneNumber = maskValidPhoneNumber.replace('9', number);
  });

  return maskValidPhoneNumber;
  
}

module.exports = generatePhoneNumber
// wop