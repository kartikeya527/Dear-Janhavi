let lastHeart = 0;

document.addEventListener(
    "mousemove",
    (e) => {

        const now = Date.now();

        if(now - lastHeart < 40){
            return;
        }

        lastHeart = now;

        const heart =
        document.createElement("div");

        heart.classList.add(
            "cursor-heart"
        );

        const hearts = [

            "♥",
            "♡",
            "❤"

        ];

        heart.innerHTML = hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];

        heart.style.left =
        e.pageX + "px";

        heart.style.top =
        e.pageY + "px";

        document.body.appendChild(
            heart
        );

        setTimeout(() => {

            heart.remove();

        },1200);

    }
);