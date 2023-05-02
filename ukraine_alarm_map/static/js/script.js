document.addEventListener('DOMContentLoaded', function() {
    const load_animation = document.getElementById('loader');
    setTimeout(function() {
        location.reload();
        load_animation.classList.add('loader');
        document.body.classList.add('blur');
        animate();
    }, 15000);
  });
  

// повзунок перезагрузки
const duraction = 14;
let startTime, timeLeft;

const timer = document.getElementById('timer');

const bar = document.createElement('div');

bar.classList.add('bar');
timer.appendChild(bar);

function updateBar() {
    const progress = (Date.now() - startTime) / (duraction * 1000)

    bar.style.width = `${progress * 100}%`;

    if (progress >= 1) {
        cancelAnimationFrame(timerInterval);
    } else {
        requestAnimationFrame(updateBar);
    }

};

startTime = Date.now();
requestAnimationFrame(updateBar);

var countdownNum = document.getElementById("countdown")

var countdown = setInterval(function() {
    var count = parseInt(countdownNum.textContent);

    count--;

    countdownNum.textContent = count;

    if (count == 0) {
        clearInterval(countdown)
    }
    
}, 1000)


// кнопка перезагрузки
const button = document.querySelector('refresh');


function refresh_page() {
    document.body.classList.add('blur')
    location.reload()
    const load_animation = document.getElementById('loader');
    load_animation.classList.add('loader');
      
};
  



