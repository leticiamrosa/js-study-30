const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');

setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();

    // degress
    const secondsDegress = ((seconds / 60) * 360) + 90;
    const minDegress = ((min / 60) * 360) + 90;
    const hourDegress = ((hour / 12) * 360) + 90;

    // animation
    secondHand.style.transform = `rotate(${secondsDegress}deg)`;
    hourHand.style.transform = `rotate(${hourDegress}deg)`;
    minHand.style.transform = `rotate(${minDegress}deg)`;

    // console.log(secondsDegress);
    // console.log(`Hora: ${hour}:${min}:${seconds}`);
}

setInterval(setDate, 1000);

this.setDate();