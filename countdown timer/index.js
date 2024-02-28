
(function() {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24,
    repeatInterval = day * 2; // Set the repeat interval to 2 days
  
  const countDown = () => {
    let today = new Date();
    let releaseDate = new Date(today.getTime() + repeatInterval);
  
    const x = setInterval(function() {
      const now = new Date().getTime(),
        distance = releaseDate - now;
  
      document.getElementById("days").innerText = Math.floor(distance / day);
      document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
      document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
      document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);
  
      // Check if the release date has been reached
      if (distance < 0) {
        clearInterval(x);
        countDown(); // Repeat the countdown after the release date
      }
    }, 0);
  };
  
  countDown(); // Start the initial countdown
})();
