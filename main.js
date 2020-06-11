

function setDate(){
    const secondHand = document.querySelector(".seconds-hand");
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minuteHand = document.querySelector(".minute-hand");
    const minutes = now.getMinutes();
    const minutesDegree = ((minutes/60)*360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hourHand = document.querySelector(".hour-hand");
    const hour = now.getHours();
    const hourDegree = ((hour/12)*360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);

