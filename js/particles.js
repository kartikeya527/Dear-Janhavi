const particleContainer =
document.getElementById("particles");

const hiddenMessages = [

    "You are my favorite chapter.",
    "You make every day brighter.",
    "Forever starts with you.",
    "I still smile when I think of you.",
    "You are my safest place.",
    "You are my favorite future.",
    "You are worth every heartbeat.",
    "You are my best memory.",
    "Thank you for being you.",
    "I would choose you again."

];

for(let i = 0; i < 120; i++){

    const star =
    document.createElement("div");

    star.classList.add("star");

    star.style.left =
    Math.random() * 100 + "%";

    star.style.top =
    Math.random() * 100 + "%";

    star.style.opacity =
    Math.random();

    star.style.animationDuration =
    (3 + Math.random() * 8) + "s";

    particleContainer.appendChild(star);

}

for(let i = 0; i < 15; i++){

    const secretStar =
    document.createElement("div");

    secretStar.classList.add(
        "secret-star"
    );

    secretStar.style.left =
    Math.random() * 100 + "%";

    secretStar.style.top =
    Math.random() * 100 + "%";

    particleContainer.appendChild(
        secretStar
    );

    secretStar.addEventListener(
        "click",
        () => {

            const random =
            Math.floor(
                Math.random() *
                hiddenMessages.length
            );

            showLoveMessage(
                hiddenMessages[random]
            );

        }
    );

}

function showLoveMessage(text){

    const popup =
    document.createElement("div");

    popup.classList.add(
        "love-popup"
    );

    popup.innerHTML = text;

    document.body.appendChild(
        popup
    );

    setTimeout(() => {

        popup.classList.add(
            "show"
        );

    },100);

    setTimeout(() => {

        popup.remove();

    },4000);

}