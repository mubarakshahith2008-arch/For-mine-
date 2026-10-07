/* =========================================
   BIRTHDAY STORY EXPERIENCE
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const scenes =
    document.querySelectorAll(".scene");

const nextButtons =
    document.querySelectorAll(".next-btn");

const finalBtn =
    document.getElementById("finalBtn");

const enterBtn =
    document.getElementById("enterBtn");

const introScreen =
    document.getElementById("intro-screen");

const storyContainer =
    document.getElementById("story-container");

const bgMusic =
    document.getElementById("bgMusic");

const musicToggle =
    document.getElementById("musicToggle");

const heartsContainer =
    document.getElementById("hearts-container");

const starsContainer =
    document.getElementById("stars");

const typewriter =
    document.getElementById("typewriter");


let currentScene = 0;

let musicPlaying = false;


/* =========================================
   CREATE STARS
========================================= */

function createStars() {

    if (!starsContainer) return;

    for (let i = 0; i < 120; i++) {

        const star =
            document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        star.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        starsContainer.appendChild(star);
    }
}

createStars();


/* =========================================
   ENTER WEBSITE
========================================= */

if (enterBtn) {

    enterBtn.addEventListener(
        "click",
        () => {

            if (bgMusic) {

                bgMusic.volume = 0.35;

                bgMusic
                    .play()
                    .then(() => {

                        musicPlaying = true;

                        musicToggle.innerHTML =
                            "🎵";

                    })
                    .catch(() => {

                        musicPlaying = false;

                    });
            }


            introScreen.style.opacity = "0";

            introScreen.style.visibility =
                "hidden";


            setTimeout(() => {

                introScreen.style.display =
                    "none";

                storyContainer.classList.remove(
                    "hidden"
                );

                showScene(0);

            }, 900);

        }
    );

}


/* =========================================
   MUSIC TOGGLE
========================================= */

if (musicToggle) {

    musicToggle.addEventListener(
        "click",
        () => {

            if (!bgMusic) return;


            if (musicPlaying) {

                bgMusic.pause();

                musicPlaying = false;

                musicToggle.innerHTML =
                    "🔇";

            }

            else {

                bgMusic
                    .play()
                    .then(() => {

                        musicPlaying = true;

                        musicToggle.innerHTML =
                            "🎵";

                    })
                    .catch(() => {});

            }

        }
    );
}


/* =========================================
   SHOW SCENE
========================================= */

function showScene(index) {

    if (
        index < 0 ||
        index >= scenes.length
    ) {
        return;
    }


    scenes.forEach(
        (scene, i) => {

            scene.classList.remove(
                "active-scene"
            );

            scene.classList.remove(
                "exit-scene"
            );

            if (i < index) {

                scene.classList.add(
                    "exit-scene"
                );

            }

        }
    );


    currentScene = index;


    setTimeout(() => {

        scenes[index].classList.add(
            "active-scene"
        );

    }, 50);


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    /* Start letter automatically */

    if (index === 6) {

        setTimeout(
            startTyping,
            700
        );

    }


    /* Extra hearts on special scenes */

    if (
        index === 2 ||
        index === 6 ||
        index === 8
    ) {

        createBurstHearts();

    }

}


/* =========================================
   NEXT BUTTONS
========================================= */

nextButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const nextIndex =
                    currentScene + 1;


                if (
                    nextIndex <
                    scenes.length
                ) {

                    showScene(
                        nextIndex
                    );

                }

            }
        );

    }
);


/* =========================================
   TYPEWRITER
========================================= */

const letter =

`Happy Birthday ❤️

We met as strangers on Instagram.

At that time, neither of us knew
how important that first conversation
would become.

When I think about 26 April,
I don't just remember a date.

I remember the beginning
of something beautiful.

It became one of the best things
that happened in my life.

Distance isn't always easy.

But every day,
every memory,
every conversation,

reminds me how lucky I am
to have you in my life.

People often search
for the perfect definition of love.

For me, it is simple.

Your presence is enough for me.

Thank you for every smile.

Thank you for every memory.

Thank you for being you.

Happy Birthday ❤️

— [YOUR_NAME]`;


let letterStarted = false;


function startTyping() {

    if (!typewriter) return;

    if (letterStarted) return;

    letterStarted = true;

    typewriter.innerHTML = "";

    let index = 0;


    function type() {

        if (index < letter.length) {

            typewriter.textContent +=
                letter.charAt(index);

            index++;

            setTimeout(
                type,
                32
            );

        }

    }


    type();
}


/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart() {

    if (!heartsContainer) return;


    const heart =
        document.createElement("div");

    heart.className =
        "heart";


    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘"
    ];


    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (16 + Math.random() * 25) + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";


    heart.style.animationDelay =
        Math.random() + "s";


    heartsContainer.appendChild(
        heart
    );


    setTimeout(
        () => {

            heart.remove();

        },
        11000
    );
}


setInterval(
    createHeart,
    700
);


/* =========================================
   HEART BURST
========================================= */

function createBurstHearts() {

    if (!heartsContainer) return;


    for (
        let i = 0;
        i < 15;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 100
        );

    }

}


/* =========================================
   PHOTO FULLSCREEN
========================================= */

const photos =
    document.querySelectorAll(
        ".story-photo, .wallpaper-photo"
    );


photos.forEach(
    photo => {

        photo.addEventListener(
            "click",
            () => {

                const overlay =
                    document.createElement(
                        "div"
                    );

                overlay.className =
                    "photo-overlay";


                const img =
                    document.createElement(
                        "img"
                    );

                img.src =
                    photo.src;


                overlay.appendChild(
                    img
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

    }
);


/* =========================================
   FIREWORK CREATION
========================================= */

function createFirework(
    container
) {

    const centerX =
        Math.random() * 80 + 10;

    const centerY =
        Math.random() * 60 + 15;


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );

        particle.className =
            "firework";


        particle.style.left =
            centerX + "%";

        particle.style.top =
            centerY + "%";


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            60 +
            Math.random() *
            180;


        particle.style.setProperty(
            "--x",
            Math.cos(angle) *
            distance +
            "px"
        );


        particle.style.setProperty(
            "--y",
            Math.sin(angle) *
            distance +
            "px"
        );


        particle.style.animationDelay =
            Math.random() * .5 +
            "s";


        container.appendChild(
            particle
        );


        setTimeout(
            () => {

                particle.remove();

            },
            2200
        );

    }

}


/* =========================================
   FINAL SURPRISE
========================================= */

function launchFinalSurprise() {

    const overlay =
        document.createElement(
            "div"
        );


    overlay.className =
        "final-overlay";


    overlay.innerHTML = `

        <div class="final-content">

            <div style="
                font-size:70px;
                animation:heartBeat 1.5s infinite;
            ">
                ❤️
            </div>

            <h1>
                Happy Birthday
            </h1>

            <h2>
                [HER_NAME]
            </h2>

            <p>
                If I could give you one thing
                today...

                <br><br>

                I would give you the ability
                to see yourself through my eyes.

                <br><br>

                Then you would understand
                just how special you are to me.
            </p>

            <p style="
                color:#f7c57c;
                font-family:Cinzel,serif;
                font-size:1.2rem;
            ">
                You are my favourite chapter. ❤️
            </p>

        </div>

    `;


    document.body.appendChild(
        overlay
    );


    /* Fireworks continuously */

    const fireworks =
        setInterval(
            () => {

                createFirework(
                    overlay
                );

            },
            650
        );


    /* Heart burst */

    for (
        let i = 0;
        i < 40;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 100
        );

    }


    /* Stop creating fireworks later */

    setTimeout(
        () => {

            clearInterval(
                fireworks
            );

        },
        15000
    );

}


if (finalBtn) {

    finalBtn.addEventListener(
        "click",
        launchFinalSurprise
    );

}


/* =========================================
   KEYBOARD SUPPORT
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "ArrowRight" ||
            event.key === "Enter"
        ) {

            if (
                currentScene <
                scenes.length - 1
            ) {

                showScene(
                    currentScene + 1
                );

            }

        }

        if (
            event.key === "ArrowLeft"
        ) {

            if (
                currentScene > 0
            ) {

                showScene(
                    currentScene - 1
                );

            }

        }

    }
);


/* =========================================
   CONSOLE
========================================= */

console.log(
    "❤️ Birthday Story Loaded Successfully ❤️"
);
