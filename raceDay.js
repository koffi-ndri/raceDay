let raceNumber = Math.floor(Math.random() * 1000);
let isRegisteredEarly = true;
let runnerAge = 20;

if(runnerAge > 18 && isRegisteredEarly){
  raceNumber+=1000;
}

if(runnerAge > 18 && isRegisteredEarly){
  console.log(`Number ${raceNumber} will race at 9:30 am.`);
}else if(runnerAge > 18 && !isRegisteredEarly){
  console.log(`Number ${raceNumber} will race at 11:00 am.`);
}else if(runnerAge < 18){
  console.log(`Number ${raceNumber} will race at 12:30 pm.`);
}else{
  console.log(`Number ${raceNumber} must see the registration desk.`);
}