function scuberGreetingForFeet(ride){
  if (ride <= 400){
    return "This one is on me!";
  }else if(ride > 2000){
    return "I will gladly take your thirty bucks.";
  }else if (ride>=2500)   
  {return "No can do."  ;}    

}
function ternaryCheckCity(city){
  city === 'NYC' ? "Ok, sounds good." : "No go." ; 
}

function switchOnCharmFromTip(tip){
  switch (generous){
    case true :
       tip = "Thank you so much."; 
      break;
    
    case false :
       tip = "Thank you";
      break;
    default :
     tip = "Bye";
    break;
  }
  return tip;
}


