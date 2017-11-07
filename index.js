let timer = () => {
  let hours = document.getElementById("hours").value,
      minutes = document.getElementById("minutes").value,
      seconds = document.getElementById("seconds").value;

  console.log(`h: ${hours} m: ${minutes} s: ${seconds}`);
  let interval = setInterval(()=>{
    seconds --;
    if(seconds < 0){
      minutes--;
      seconds = 59;
    }
    if(minutes < 0){
      hours--;
      minutes = 59;
    }
    if (hours < 0) {
      seconds = 0;
      minutes = 0;
      hours = 0;
      clearInterval(interval);
    }
    document.getElementById("demo").innerHTML = "h: " + hours + " m: "+ minutes +
     " s: "+ seconds;
    console.log(`h: ${hours} m: ${minutes} s: ${seconds}`);

  }, 1000);
};

window.onload = () => {
  document.getElementById("start").addEventListener('click', timer);
};
