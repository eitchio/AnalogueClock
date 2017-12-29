const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand');

function setDate() {
  const now = new Date();
  
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  if(secondsDegrees === 90) {
    allHands.forEach(hand => hand.style.transition = 'none')
  } else {
    allHands.forEach(hand => hand.style.transition = '')
  }
        
  const minutes = now.getMinutes();
  const minDegrees = ((minutes/60) * 360) + ((seconds/60) * 6) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = ((hours/12) * 360 + ((minutes/60) * 30)) + 90;  
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  
};

setInterval(setDate,1000);

const secondHandShanghai = document.querySelector('.shanghai-second-hand');
const minHandShanghai = document.querySelector('.shanghai-min-hand');
const hourHandShanghai = document.querySelector('.shanghai-hour-hand');
const allSHands = document.querySelectorAll('.s-hand');

function setDateS() {
  const nowS = new Date();
  
  const secondsS = nowS.getSeconds();
  const secondsDegreesS = ((secondsS/60) * 360) + 90;
  secondHandShanghai.style.transform = `rotate(${secondsDegreesS}deg)`;

  if(secondsDegreesS === 90) {
    allSHands.forEach(hand => hand.style.transition = 'none')
  } else {
    allSHands.forEach(hand => hand.style.transition = '')
  }
        
  const minutesS = nowS.getMinutes();
  const minDegreesS = ((minutesS/60) * 360) + ((secondsS/60) * 6) + 90;
  minHandShanghai.style.transform = `rotate(${minDegreesS}deg)`;

  const hoursS = nowS.getUTCHours() + 8;
  const hourDegreesS = ((hoursS/12) * 360 + ((minutesS/60) * 30)) + 90;  
  hourHandShanghai.style.transform = `rotate(${hourDegreesS}deg)`;
  
};

setInterval(setDateS,1000);
