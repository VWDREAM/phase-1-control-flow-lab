function scuberGreetingForFeet(feet){
  // Write your code here!
  if(feet <= 400){
    return 'This one is on me!'
  }
  else if
    (feet > 400 && feet <= 2000){
      return 'That will be twenty bucks.'
  }
  else if( feet >2000 && feet<=2500){
    return 'I will gladly take your thirty bucks.'
  }
else{
  return 'No can do.'
}
}

function ternaryCheckCity(cities){
  // Write your code here!
  return cities === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tips){
  // Write your code here!
  return tips === "generous"? "Thank you so much." : tips ==="not as generous"? "Thank you.":"Bye.";

}