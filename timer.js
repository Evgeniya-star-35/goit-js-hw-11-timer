const refs = {
  timerEl: document.querySelector('#timer-1'),
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  minutes: document.querySelector('[data-value="mins"]'),
  seconds: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  setInt = setInterval(() => {
    const currentTime = Date.now();
    const newTime = this.targetDate - currentTime;
    this.getTimeComponents(newTime);
    this.updateTimer(newTime);
  }, 1000);
  pad(value) {
    return String(value).padStart(2, '0');
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${mins}`;
    refs.seconds.textContent = `${secs}`;

    // return `${days}:${hours}: ${mins}: ${secs}`;
  }
  updateTimer(time) {
    if (time < 0) {
      refs.timerEl.textContent = 'Time is up!';
      refs.timerEl.style.textAlign = 'center';
      refs.timerEl.style.fontSize = '100px';
      refs.timerEl.style.marginTop = '100px';
      refs.timerEl.style.color = 'orange';
    }
  }
}

const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 12, 2021'),
});
