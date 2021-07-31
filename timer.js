const refs = {
  timerEl: document.querySelector('#timer-1'),
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  minutes: document.querySelector('[data-value="mins"]'),
  seconds: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate, onTike }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.onTike = onTike;
  }

  setInt = setInterval(() => {
    const currentTime = Date.now();
    const timeComponents = currentTime - this.targetDate;
    const time = this.getTimeComponents(timeComponents);
    // console.log(timeComponents);

    this.onTike(time);
  }, 1000);

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

function updateTimer({ days, hours, mins, secs }) {
  refs.timerEl.textContent = `${days}:${hours}:${mins}:${secs}`;
}

const newTimer = new CountdownTimer({
  onTike: updateTimer,
  selector: '#timer-1',
  targetDate: new Date('Aug 11, 2021'),
});
