const petalContainer =
document.createElement("div");

petalContainer.id =
"petalContainer";

document.body.appendChild(
    petalContainer
);

function createPetal(){

    const petal =
    document.createElement("div");

    petal.classList.add("petal");

    petal.style.left =
    Math.random() * 100 + "vw";

    petal.style.animationDuration =
    (6 + Math.random() * 6) + "s";

    petal.style.opacity =
    Math.random();

    petalContainer.appendChild(
        petal
    );

    setTimeout(() => {

        petal.remove();

    },12000);

}

setInterval(() => {

    createPetal();

},400);