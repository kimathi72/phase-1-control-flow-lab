


  let ride = 0;//distance variable defined
  let city = `NYC`;//destisation variable defined
  let feedBack = {};//object defined to track different feedback messages
  let generous = true;//boolean to check if tip was generous or not defined

 //object noteToCustomer for toggling feedback messages defined
  const noteToCustomer = {
    freeSample : `This one is on me!`,
    charge : `I will gladly take your thirty busks.`,
    disallow : `no can do.` ,
    nyc:    `Ok, sounds good.`,
    notNYC: `No go. `,
    isGenerous: `Thank you so much.`,
    notAsGenerous: `Thank you`,
    otherwise : `Bye`,

  };



//function defined returns a feedback depending on the ride value 

function scuberGreetingForFeet(ride, noteToCustomer){
  // Write your code here!
//check if ride is 400 miles or less
  if(ride <= 400){
    feedBack = feedBack.append(noteToCustomer.freeSample);//fetches value propety for freeSample key in noteToCustomer object
   
    return (feedBack);//returns the feedback message to the rider
  }
  //check if the ride is over 2000miles
  else if (ride>2000){
    feedBack = feedBack.append(noteToCustomer.charge);//fetches value propety for charge key in noteToCustomer object
   
    return (feedBack);
  }//check if the ride is over 2500miles
  else if(ride>2500){
    feedBack = feedBack.append(noteToCustomer.disallow);//fetches value propety for disallow key in noteToCustomer object
   
    return (feedBack);
  }
}
//function defined returns a feedback depending on the city value 
function ternaryCheckCity(city, noteToCustomer){
  // Write your code here!
  //define function cityIsNYC and cityIsNotNYC to toggle feedback message
  function cityIsNYC (){
feedBack = feedBack.append(noteToCustomer.nyc);//fetches value propety for nyc key in noteToCustomer object

  }
  function cityIsNotNYC (){
    feedBack =  feedBack.append(noteToCustomer.notNYC);//fetches value propety for notNYC key in noteToCustomer object
  }

  //check if city is NYC, or not, callback CityIsNYC() if true else callback cityIsNotNYC()
  city == true ? cityIsNYC : cityIsNotNYC;

  return (feedBack);
}
//function defined returns a feedback depending on the tip value 
function switchOnCharmFromTip(tip, noteToCustomer){
  // Write your code here!
//switch between a generous tip and not so generous tip
  switch(tip) {
    case true: 
      // code block
      if (tip == generous){//if tip is generous

      feedBack= feedBack.append(noteToCustomer.isGenerous);//fetches value propety for isGenerous key in noteToCustomer object

      }
      return (feedBack);
      break;
    case false:
      // code block
      if (tip != generous){//if tip is not generous

        feedBack= feedBack.append(noteToCustomer.notAsGenerous);//fetches value propety for notAsGenerous key in noteToCustomer object
  
        }
        return (feedBack);
      
      break;
    default:
      // code block
      feedBack =  feedBack.append(noteToCustomer.otherwise);//fetches value propety for otherwise key in noteToCustomer object
      return (feedBack);
  }
}

