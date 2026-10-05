```javascript id="8k5y7w"
// ====================================
// PREMIUM BIRTHDAY WEBSITE SCRIPT
// ====================================

// ELEMENTS

const enterBtn =
document.getElementById("enterBtn");

const introScreen =
document.getElementById("intro-screen");

const mainContent =
document.getElementById("main-content");

const bgMusic =
document.getElementById("bgMusic");

const musicToggle =
document.getElementById("musicToggle");

let musicPlaying = false;

// ====================================
// ENTER WEBSITE
// ====================================

if(enterBtn){

    enterBtn.addEventListener(
        "click",
        () => {

            introScreen.style.opacity = "0";

            setTimeout(() => {

                introScreen.style.display = "none";

                mainContent.classList.remove(
                    "hidden"
                );

            },800);

            bgMusic.play()
            .then(() => {

                musicPlaying = true;

                if(musicToggle){
                    musicToggle.innerHTML =
                    "🎵";
                }

            })
            .catch(() => {
                console.log(
                    "Autoplay blocked"
                );
            });

        }
    );

}

// ====================================
// MUSIC BUTTON
// ====================================

if(musicToggle){

    musicToggle.addEventListener(
        "click",
        () => {

            if(!musicPlaying){

                bgMusic.play();

                musicPlaying = true;

                musicToggle.innerHTML =
                "🎵";

            }else{

                bgMusic.pause();

                musicPlaying = false;

                musicToggle.innerHTML =
                "🔇";

            }

        }
    );

}

// ====================================
// RELATIONSHIP COUNTER
// STARTED: 26 APRIL 2025
// ====================================

const relationshipDate =
new Date("2025-04-26T00:00:00");

function updateCounter(){

    const now =
    new Date();

    const diff =
    now - relationshipDate;

    const days =
    Math.floor(
        diff /
        (1000*60*60*24)
    );

    const hours =
    Math.floor(
        diff /
        (1000*60*60)
    );

    const minutes =
    Math.floor(
        diff /
        (1000*60)
    );

    document.getElementById(
        "relationshipDays"
    ).textContent = days;

    document.getElementById(
        "relationshipHours"
    ).textContent = hours;

    document.getElementById(
        "relationshipMinutes"
    ).textContent = minutes;
}

updateCounter();

setInterval(
    updateCounter,
    60000
);

// ====================================
// FLOATING HEARTS
// ====================================

const heartsContainer =
document.getElementById(
    "hearts-container"
);

function createHeart(){

    if(!heartsContainer) return;

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
    Math.random() > 0.5
    ? "❤️"
    : "💕";

    heart.style.left =
    Math.random()*100 + "vw";

    heart.style.bottom =
    "-50px";

    heart.style.fontSize =
    (18 + Math.random()*22)
    + "px";

    heart.style.animationDuration =
    (5 + Math.random()*4)
    + "s";

    heartsContainer.appendChild(
        heart
    );

    setTimeout(() => {

        heart.remove();

    },10000);

}

setInterval(
    createHeart,
    400
);

// ====================================
// SCROLL REVEAL
// ====================================

const revealElements =
document.querySelectorAll(
    ".timeline-item, .gallery-card, .counter-box"
);

const observer =
new IntersectionObserver(

(entries) => {

    entries.forEach(
        entry => {

            if(entry.isIntersecting){

                entry.target.style.opacity =
                "1";

                entry.target.style.transform =
                "translateY(0)";
            }

        }
    );

},
{
    threshold:0.2
}
);

revealElements.forEach(
    el => {

        el.style.opacity = "0";

        el.style.transform =
        "translateY(40px)";

        el.style.transition =
        "all 0.8s ease";

        observer.observe(el);

    }
);

// ====================================
// PHOTO POPUP EFFECT
// ====================================

document
.querySelectorAll(
".gallery-card img"
)
.forEach(img => {

    img.addEventListener(
        "click",
        () => {

            const overlay =
            document.createElement(
                "div"
            );

            overlay.style.position =
            "fixed";

            overlay.style.inset =
            "0";

            overlay.style.background =
            "rgba(0,0,0,.95)";

            overlay.style.display =
            "flex";

            overlay.style.alignItems =
            "center";

            overlay.style.justifyContent =
            "center";

            overlay.style.zIndex =
            "99999";

            const image =
            document.createElement(
                "img"
            );

            image.src = img.src;

            image.style.maxWidth =
            "90%";

            image.style.maxHeight =
            "90%";

            image.style.borderRadius =
            "20px";

            overlay.appendChild(
                image
            );

            document.body.appendChild(
                overlay
            );

            overlay.addEventListener(
                "click",
                () => {

                    overlay.remove();

                }
            );

        }
    );

});

// ====================================
// PREMIUM FIREWORKS
// ====================================

const canvas =
document.getElementById(
    "fireworksCanvas"
);

if(canvas){

    const ctx =
    canvas.getContext("2d");

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

    let particles = [];

    function createFirework(){

        const x =
        Math.random()
        * canvas.width;

        const y =
        Math.random()
        * canvas.height
        * 0.6;

        for(let i=0;i<100;i++){

            particles.push({

                x,
                y,

                dx:
                (Math.random()-0.5)*10,

                dy:
                (Math.random()-0.5)*10,

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
            (p,index)=>{

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

                if(p.life <= 0){

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

    setInterval(
        createFirework,
        3500
    );

}

// ====================================
// TYPEWRITER MESSAGE
// ====================================

const typeTarget =
document.getElementById(
    "typewriter"
);

if(typeTarget){

    const text =
    "Your presence is enough for me ❤️";

    let index = 0;

    function type(){

        if(index < text.length){

            typeTarget.innerHTML +=
            text.charAt(index);

            index++;

            setTimeout(
                type,
                80
            );

        }

    }

    type();

}

// ====================================
// CONSOLE MESSAGE
// ====================================

console.log(
"Happy Birthday ❤️"
);
```
