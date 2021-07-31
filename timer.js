const refs = {
  timerEl: document.querySelector('#timer-1'),
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  minutes: document.querySelector('.value[data-value="mins"]'),
  seconds: document.querySelector('.value[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  setInt = setInterval(() => {
    // const stopTime = Date.now(this.targetDate);
    // console.log(stopTime);
    const currentTime = Date.now();
    const timeComponents = this.targetDate - currentTime;
    const time = this.getTimeComponents(timeComponents);
    // console.log(timeComponents);

    updateTimer(time);
  }, 1000);

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
    // refs.days.textContent = `${days}`;
    // refs.hours.textContent = `${hours}`;
    // refs.minutes.textContent = `${mins}`;
    // refs.seconds.textContent = `${secs}`;
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

function updateTimer({ days, hours, mins, secs }) {
  refs.timerEl.textContent = `${days}:${hours}:${mins}:${secs}`;
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});
