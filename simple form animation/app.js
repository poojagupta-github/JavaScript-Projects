function animatedform() {
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextele = parent.nextElementSibling;
            console.log(parent);
            console.log(input);
            console.log(nextele);
            // check validation

            if (input.type === "text" && validateuser(input)) {
                nextslide(parent, nextele);
            }
            else if (input.type === "password" && validateuser(input)) {
                nextslide(parent, nextele);
            }
            else if (input.type === "email" && validateemail(input)) {
                nextslide(parent, nextele);
            }
            else {
                parent.style.animation = "shake 0.5s ease"
            }

            parent.addEventListener("animationend", () => {
                parent.style.animation ="";

            });
        });
    });
}

function validateuser(user) {
    if (user.value.length < 6) {
        console.log('not enough characters');
        error('rgb(189,87,87)');

    }
    else {
        error('rgb(87,189,130)');
        return true;
    }
}

function validateemail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        error("rgb(87,189,130)");
        return true;
    }
    else {
        error('rgb(189,87,87)');
    }

}

function nextslide(parent, nextele) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextele.classList.add('active');

}

function error(color) {
    document.body.style.backgroundColor = color;
}

animatedform();