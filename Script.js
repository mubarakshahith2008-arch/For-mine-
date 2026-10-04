```javascript id="1mpf0s"
// =========================
// ENTER WEBSITE
// =========================

const enterBtn = document.getElementById("enterBtn");
const introScreen = document.getElementById("intro-screen");
const mainContent = document.getElementById("main-content");
const bgMusic = document.getElementById("bgMusic");

enterBtn.addEventListener("click", () => {

    introScreen.style.display = "none";

    mainContent.classList.remove("hidden");

    bgMusic.play().catch(() => {
        console.log("Music will play after user interaction.");
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// =========================
// RELATIONSHIP COUNTER
// Started: 26 April 2026
// =========================

const relationshipDate = new Date("2026-04-26T00:00:00");

function updateRelationshipCounter() {

    const now = new Date();

    const diff = now - relationshipDate;

    const days = Math.floor(
        diff / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        diff / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        diff / (1000 * 60)
    );

    const dayEl = document.getElementById("relationshipDays");
    const hourEl = document.getElementById("relationshipHours");
    const minuteEl = document.getElementById("relationshipMinutes");

    if(dayEl) dayEl.textContent = days;
    if(hourEl) hourEl.textContent = hours;
    if(minuteEl) minuteEl.textContent = minutes;
}

updateRelationshipCounter();

setInterval(updateRelationshipCounter, 60000);

// =========================
// FLOATING HEARTS
// =========================

const heartContainer =
document.getElementById("hearts-container");

function createHeart() {

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
    Math.random() > 0.5 ? "❤️" : "💕";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
    (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
    (4 + Math.random() * 5) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 500);

// =========================
// QUOTE SLIDER
// =========================

const quotes =
document.querySelectorAll(".quote");

let quoteIndex = 0;

setInterval(() => {

    quotes[quoteIndex]
        .classList.remove("active-quote");

    quoteIndex++;

    if(quoteIndex >= quotes.length){
        quoteIndex = 0;
    }

    quotes[quoteIndex]
        .classList.add("active-quote");

}, 4000);

// =========================
// GIFT BOX REVEAL
// =========================

const giftBox =
document.getElementById("giftBox");

const letterSection =
document.getElementById("letterSection");

giftBox.addEventListener("click", () => {

    giftBox.innerHTML = "💖";

    letterSection.classList.remove("hidden");

    letterSection.scrollIntoView({
        behavior: "smooth"
    });

});

// =========================
// FIREWORKS
// =========================

const fireworksBtn =
document.getElementById("fireworksBtn");

const canvas =
document.getElementById("fireworksCanvas");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

window.addEventListener("resize", () => {

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

});

let particles = [];

function createFirework() {

    const x =
    Math.random() * canvas.width;

    const y =
    Math.random() * canvas.height * 0.6;

    for(let i = 0; i < 70; i++){

        particles.push({

            x,
            y,

            dx:
            (Math.random() - 0.5) * 8,

            dy:
            (Math.random() - 0.5) * 8,

            life: 100

        });

    }
}

function animateFireworks() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach((p, index) => {

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            2,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
        `rgba(255,215,120,${
            p.life / 100
        })`;

        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        p.life--;

        if(p.life <= 0){
            particles.splice(index,1);
        }

    });

    requestAnimationFrame(
        animateFireworks
    );
}

animateFireworks();

// =========================
// FINAL SURPRISE
// =========================

const finalOverlay =
document.getElementById("finalOverlay");

fireworksBtn.addEventListener("click", () => {

    let count = 0;

    const interval =
    setInterval(() => {

        createFirework();

        count++;

        if(count > 15){

            clearInterval(interval);

            setTimeout(() => {

                finalOverlay.classList.remove(
                    "hidden"
                );

            }, 3000);

        }

    }, 300);

});

// =========================
// EXTRA FIREWORKS
// =========================

setInterval(() => {

    if(Math.random() > 0.85){

        createFirework();

    }

}, 3000);
```
