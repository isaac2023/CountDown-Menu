// Countdown
const countdown = () => {
  // Set future date to exactly 30 days from now
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 30);
  futureDate.setHours(0, 0, 0, 0); // Reset time to midnight

  const presentDate = new Date().getTime();
  const gap = futureDate.getTime() - presentDate;

  // Time calculation
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // This block calculates the actual gap
  const dayText = Math.floor(gap / day);
  const hourText = Math.floor((gap % day) / hour);
  const minuteText = Math.floor((gap % hour) / minute);
  const secondText = Math.floor((gap % minute) / second);

  // Applying the calculation to our page
  document.querySelector("#day").innerText = `${dayText} Day(s)`;
  document.querySelector("#hour").innerText = `${hourText} Hour(s)`;
  document.querySelector("#minute").innerText = `${minuteText} Minute(s)`;
  document.querySelector("#second").innerText = `${secondText} Second(s)`;
};

// SetInterval will execute the function after every 1 second (1000 milliseconds)
setInterval(countdown, 1000);

// Responsive navigation bar
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});