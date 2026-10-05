```javascript id="c6q8zy"
// ===============================
// BIRTHDAY WEBSITE SCRIPT
// ===============================

// ENTER WEBSITE

const enterBtn = document.getElementById("enterBtn");
const introScreen = document.getElementById("intro-screen");
const mainContent = document.getElementById("main-content");
const bgMusic = document.getElementById("bgMusic");

if (enterBtn) {
    enterBtn.addEventListener("click", () => {

        introScreen.style.display = "none";

        mainContent.classList.remove("hidden");

        bgMusic.play().catch(() => {
            console.log("Autoplay blocked by browser.");
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}

// ===============================
// RELATIONSHIP COUNTER
// START DATE: 26 APRIL 2025
// ===============================

const relationshipDate =
new Date("2025-04-26T00:00:00");

function updateRelationshipCounter() {

    const now = new Date();

    const diff =
    now - relationshipDate;

    const days =
    Math.floor(
        diff /
        (1000 * 60 * 60 * 24)
    );

    const hours =
    Math.floor(
        diff /
        (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        diff /
        (1000 * 60)
    );

    const dayEl =
    document.getElementById(
        "relationshipDays"
    );

    const hourEl =
    document.getElementById(
        "relationshipHours"
    );

    const minuteEl =
    document.getElementById(
        "relationshipMinutes"
    );

    if(dayEl){
        dayEl.textContent = days;
    }

    if(hourEl){
        hourEl.textContent = hours;
    }

    if(minuteEl){
        minuteEl.textContent = minutes;
    }
}

updateRelationshipCounter();

setInterval(
    updateRelationshipCounter,
    60000
);

// ===============================
// FLOATING HEARTS
// ===============================

const heartContainer =
document.getElementById(
    "hearts-container"
);

function createHeart() {

    if(!heartContainer) return;

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
    Math.random() > 0.5
    ? "❤️"
    : "💕";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.bottom =
    "-30px";

    heart.style.fontSize =
    (15 + Math.random() * 25)
    + "px";

    heart.style.animationDuration =
    (4 + Math.random() * 5)
    + "s";

    heartContainer.appendChild(
        heart
    );

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(
    createHeart,
    500
);

// ===============================
// QUOTE SLIDER
// ===============================

const quotes =
document.querySelectorAll(
    ".quote"
);

let quoteIndex = 0;

if(quotes.length > 0){

    setInterval(() => {

        quotes[
            quoteIndex
        ].classList.remove(
            "active-quote"
        );

        quoteIndex++;

        if(
            quoteIndex >=
            quotes.length
        ){
            quoteIndex = 0;
        }

        quotes[
            quoteIndex
        ].classList.add(
            "active-quote"
        );

    }, 4000);

}

// ===============================
// GIFT BOX REVEAL
// ===============================

const giftBox =
document.getElementById(
    "giftBox"
);

const letterSection =
document.getElementById(
    "letterSection"
);

if(giftBox){

    giftBox.addEventListener(
        "click",
        () => {

            giftBox.innerHTML =
            "💖";

            if(letterSection){

                letterSection
                .classList.remove(
                    "hidden"
                );

                letterSection
                .scrollIntoView({
                    behavior:"smooth"
                });

            }

        }
    );
}

// ===============================
// FIREWORKS SYSTEM
// ===============================

const canvas =
document.getElementById(
    "fireworksCanvas"
);

const fireworksBtn =
document.getElementById(
    "fireworksBtn"
);

const finalOverlay =
document.getElementById(
    "finalOverlay"
);

let particles = [];

if(canvas){

    const ctx =
    canvas.getContext("2d");

    function resizeCanvas(){

        canvas.width =
        window.innerWidth;

        canvas.height =
        window.innerHeight;
    }

    resizeCanvas();

    window.addEventListener(
        "resize",
        resizeCanvas
    );

    function createFirework(){

        const x =
        Math.random()
        * canvas.width;

        const y =
        Math.random()
        * canvas.height
        * 0.6;

        for(
            let i = 0;
            i < 80;
            i++
        ){

            particles.push({

                x:x,
                y:y,

                dx:
                (Math.random()-0.5)
                * 8,

                dy:
                (Math.random()-0.5)
                * 8,

                life:100

            });

        }

    }

    function animate(){

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach(
            (p,index) => {

                ctx.beginPath();

                ctx.arc(
                    p.x,
                    p.y,
                    2,
                    0,
                    Math.PI*2
                );

                ctx.fillStyle =
                `rgba(
                    255,
                    215,
                    120,
                    ${p.life/100}
                )`;

                ctx.fill();

                p.x += p.dx;
                p.y += p.dy;

                p.life--;

                if(
                    p.life <= 0
                ){
                    particles.splice(
                        index,
                        1
                    );
                }

            }
        );

        requestAnimationFrame(
            animate
        );
    }

    animate();

    if(fireworksBtn){

        fireworksBtn
        .addEventListener(
            "click",
            () => {

                let count = 0;

                const interval =
                setInterval(() => {

                    createFirework();

                    count++;

                    if(count > 15){

                        clearInterval(
                            interval
                        );

                        setTimeout(() => {

                            if(
                                finalOverlay
                            ){
                                finalOverlay
                                .classList
                                .remove(
                                    "hidden"
                                );
                            }

                        },3000);

                    }

                },300);

            }
        );

    }

    setInterval(() => {

        if(
            Math.random()
            > 0.85
        ){
            createFirework();
        }

    },3000);

}

// ===============================
// CLOSE FINAL SCREEN
// CLICK ANYWHERE
// ===============================

if(finalOverlay){

    finalOverlay.addEventListener(
        "click",
        () => {

            finalOverlay
            .classList.add(
                "hidden"
            );

        }
    );

}

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
"Happy Birthday ❤️"
);
```
