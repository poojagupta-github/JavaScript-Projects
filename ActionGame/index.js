score = 0;
cross = true;

audio1 = new Audio('music.mp3');
audio2 = new Audio('music2.mp3');



document.onkeydown = function (e) {
    console.log('key code:', e.keyCode);
    if (e.keyCode == 38) {
        let man = document.querySelector('.man')
        man.classList.add('animateMan');
        setTimeout(() => {
            man.classList.remove('animateMan');
        }, 700);
    }
    else if (e.keyCode == 39) {
        man = document.querySelector('.man')
        manX = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
        man.style.left = manX + 112 + 'px';
    }
    else if (e.keyCode == 37) {
        man = document.querySelector('.man')
        manX = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
        man.style.left = (manX - 112) + 'px';
    }
}
setInterval(() => {
    man = man = document.querySelector('.man');
    let obstacle = document.querySelector('.obstacle');
    let gameOver = document.querySelector('.gameOver');

    mx = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
    my = parseInt(window.getComputedStyle(man, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(mx - ox);
    offsetY = Math.abs(my - oy);
    console.log(offsetX, offsetY);
    if (offsetX < 80 && offsetY < 52) {
        gameOver.style.visibility = "visible";
        obstacle.classList.remove('obstacleAni');
        audio2.play();
        audio1.pause();
        setTimeout(() => {
            audio2.pause();
        }, 2000);

    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        audio1.play();
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);

    }


}, 10);
let scoreCount = document.getElementById('scoreCount');
function updateScore(score) {
    scoreCount.innerHTML = "Your Score:" + score;
}