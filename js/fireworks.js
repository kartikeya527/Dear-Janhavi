const canvas =
document.getElementById("fireworksCanvas");

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

    const particles = [];

    class Particle{

        constructor(x,y,color){

            this.x = x;
            this.y = y;

            this.color = color;

            this.radius =
            Math.random() * 3 + 2;

            this.speedX =
            (Math.random() - 0.5) * 8;

            this.speedY =
            (Math.random() - 0.5) * 8;

            this.life = 100;

        }

        update(){

            this.x += this.speedX;

            this.y += this.speedY;

            this.life--;

            this.radius *= 0.98;

        }

        draw(){

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.radius,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
            this.color;

            ctx.fill();

        }

    }

    function createFirework(){

        const x =
        Math.random() *
        canvas.width;

        const y =
        Math.random() *
        (canvas.height * 0.6);

        const colors = [

            "#E8B4A0",
            "#F7D7C4",
            "#FFDAB9",
            "#FFFFFF",
            "#FFB6C1"

        ];

        const color =
        colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];

        for(let i=0;i<60;i++){

            particles.push(

                new Particle(
                    x,
                    y,
                    color
                )

            );

        }

    }

    function animate(){

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        for(
            let i =
            particles.length - 1;

            i >= 0;

            i--
        ){

            particles[i].update();

            particles[i].draw();

            if(
                particles[i].life <= 0
            ){

                particles.splice(i,1);

            }

        }

        requestAnimationFrame(
            animate
        );

    }

    animate();

    const finale =
document.getElementById("finale");

let fireworksStarted =
false;

window.addEventListener(
    "scroll",
    () => {

        const rect =
        finale.getBoundingClientRect();

        if(
            rect.top <
            window.innerHeight * 0.7
            &&
            !fireworksStarted
        ){

            fireworksStarted = true;

            setInterval(() => {

                createFirework();

            },2500);

        }

    }
);

}

// =============================
// Gift Box
// =============================

const gift = document.getElementById("giftBox");

if (gift) {

    gift.addEventListener("click", () => {

        gift.style.pointerEvents = "none";

        const lid = document.querySelector(".gift-lid");

        if (lid) {
            lid.style.transform = "rotate(-42deg) translateY(-35px)";
        }

        gift.style.filter =
            "drop-shadow(0 0 80px rgba(255,220,180,.9))";

        setTimeout(() => {

            const overlay = document.getElementById("secretGiftOverlay");

            overlay.classList.add("show");

            const heading = document.querySelector("#giftContent h1");
            const items = document.querySelectorAll("#giftContent p");
            const closeButton = document.getElementById("closeGift");

            heading.classList.remove("show");

            items.forEach(item => {
                item.classList.remove("show");
            });

            closeButton.classList.remove("show");

            setTimeout(() => {
                heading.classList.add("show");
            }, 500);

            items.forEach((item, index) => {

                setTimeout(() => {

                    item.classList.add("show");

                }, 1800 + index * 1500);

            });

            setTimeout(() => {

                closeButton.classList.add("show");

            }, 1800 + items.length * 1500);

        }, 1200);

    });

}