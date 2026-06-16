window.addEventListener("load", async () => {

    const introMusic = document.getElementById("introMusic");
    /* ===========================
      CINEMATIC INTRO MUSIC
=========================== */

introMusic.volume = 0;

try{

    await wait(800);

await introMusic.play();

}catch(err){

    console.log("Autoplay blocked.");

}

let introVolume = 0;

const introFadeIn = setInterval(()=>{

    introVolume += 0.02;

    if(introVolume >= 0.65){

        introVolume = 0.65;

        clearInterval(introFadeIn);

    }

    introMusic.volume = introVolume;

},120);

    const loader = document.getElementById("loader");

    const lines =
    document.querySelectorAll(".introLine");

    const heart =
    document.getElementById("introHeart");

    const title =
    document.getElementById("introTitle");

    const date =
    document.getElementById("introDate");

    const birthday =
    document.getElementById("introBirthday");

    function wait(ms){

        return new Promise(resolve=>setTimeout(resolve,ms));

    }

    // First sentence

    lines[0].classList.add("show");

    await wait(2200);

    lines[0].classList.remove("show");

    await wait(700);

    // Second

    lines[1].classList.add("show");

    await wait(2200);

    lines[1].classList.remove("show");

    await wait(700);

    // Third

    lines[2].classList.add("show");

    await wait(1800);

    lines[2].classList.remove("show");

    await wait(700);

    // Fourth

    lines[3].classList.add("show");

    await wait(2300);

    lines[3].classList.remove("show");

    await wait(1000);

    // Heart

    heart.classList.add("show");

    await wait(2500);

    // Title

    title.classList.add("show");

    await wait(1500);

// Date

date.classList.add("show");

await wait(1600);

// Wait while logo and title remain visible

await wait(2000);

// Now reveal Happy Birthday

birthday.classList.add("show");

await wait(3000);

/* ===========================
      FADE OUT INTRO MUSIC
=========================== */

const introFadeOut = setInterval(()=>{

    introMusic.volume -= 0.02;

    if(introMusic.volume <= 0){

        introMusic.volume = 0;

        introMusic.pause();

        introMusic.currentTime = 0;

        clearInterval(introFadeOut);

    }

},80);

await wait(1800);

// Fade loader

loader.style.opacity="0";
loader.style.transition = "2s";

setTimeout(() => {

    loader.style.display = "none";

}, 2000);

});
const reasons = [

    "You make ordinary days feel special.",

    "Your smile stays in my mind long after I see it.",

    "You make me want to be a better person.",

    "Talking to you never feels like enough.",

    "You make every memory brighter.",

    "You are my favorite notification.",

    "You make happiness feel effortless.",

    "You are the first person I want to tell things to.",

    "You make my future feel exciting.",

    "Because you are simply you."

];

const reasonButton = document.getElementById("reasonButton");

const reasonBox = document.getElementById("reasonBox");

if(reasonButton){

    reasonButton.addEventListener("click", () => {

        const randomReason = Math.floor(
            Math.random() * reasons.length
        );

        reasonBox.innerHTML = reasons[randomReason];

    });

}


const openLetter = document.getElementById("openLetter");

const letterContent = document.getElementById("letterContent");

if(openLetter){

    openLetter.addEventListener("click", () => {

        if(letterContent.style.display === "block"){

            letterContent.style.display = "none";

        }

        else{

            letterContent.style.display = "block";

        }

    });

}


const surpriseButton = document.getElementById("surpriseButton");

const surpriseMessage = document.getElementById("surpriseMessage");

if(surpriseButton){

    surpriseButton.addEventListener("click", () => {

        surpriseMessage.classList.add("active");

    });

}


const reveals = document.querySelectorAll(
    ".timeline-content, .gallery-container, .envelope, #reasonBox"
);

function revealOnScroll(){

    const trigger =
    window.innerHeight * 0.85;

    reveals.forEach(item => {

        const top =
        item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

const loveReasons = [

    "You make ordinary moments unforgettable.",
    "Your smile instantly improves my day.",
    "You make me feel understood.",
    "You are my favorite notification.",
    "You make every memory better.",
    "You make me laugh when I need it most.",
    "You inspire me.",
    "You are beautiful inside and out.",
    "You make me feel lucky.",
    "You make my future exciting.",
    
    "Your voice calms me.",
    "You make every conversation special.",
    "You are my safe place.",
    "You make life brighter.",
    "You understand me differently.",
    
    "You are my favorite person.",
    "You make every day worth looking forward to.",
    "You support me.",
    "You make me smile without trying.",
    "You are unforgettable.",
    
    "You make happiness feel easy.",
    "You make me feel appreciated.",
    "You are my comfort.",
    "You are my peace.",
    "You are my best memory.",
    
    "You make the ordinary magical.",
    "You are endlessly adorable.",
    "You make me believe in love.",
    "You make me a better person.",
    "You inspire my dreams.",
    
    "You are worth every effort.",
    "You make my heart feel full.",
    "You make every song meaningful.",
    "You make me feel alive.",
    "You make every place better.",
    
    "You make silence comfortable.",
    "You are thoughtful.",
    "You are kind.",
    "You are genuine.",
    "You are unforgettable.",
    
    "You make every moment count.",
    "You are my favorite thought.",
    "You make me excited for tomorrow.",
    "You make me feel seen.",
    "You are wonderful.",
    
    "You are unique.",
    "You make my life richer.",
    "You are elegant.",
    "You make everything brighter.",
    "You are my happiness.",
    
    "You are my person.",
    "You make every memory precious.",
    "You are strong.",
    "You are caring.",
    "You are beautiful.",
    
    "You make me feel at home.",
    "You make every chapter meaningful.",
    "You are extraordinary.",
    "You are irreplaceable.",
    "You make me grateful.",
    
    "You are everything I hoped to find.",
    "You make every day special.",
    "You are lovely.",
    "You are amazing.",
    "You make life beautiful.",
    
    "You make me feel understood.",
    "You are thoughtful.",
    "You make me laugh.",
    "You are inspiring.",
    "You are unforgettable.",
    
    "You are charming.",
    "You make every conversation better.",
    "You are genuine.",
    "You make me smile.",
    "You are wonderful.",
    
    "You are caring.",
    "You make every memory sweeter.",
    "You are comforting.",
    "You are supportive.",
    "You are incredible.",
    
    "You are brilliant.",
    "You make every day brighter.",
    "You are affectionate.",
    "You are patient.",
    "You are thoughtful.",
    
    "You are my favorite chapter.",
    "You are my favorite future.",
    "You are my favorite memory.",
    "You are my favorite person.",
    "You are my favorite story.",
    
    "You are my favorite smile.",
    "You are my favorite thought.",
    "You are my favorite feeling.",
    "You are my favorite hello.",
    "You are my favorite forever.",
    
    "You are simply you.",
    "And that is more than enough."
    
    ];
    
    const loveReasonButton =
    document.getElementById(
        "loveReasonButton"
    );
    
    const loveReasonCard =
    document.getElementById(
        "loveReasonCard"
    );
    
    if(loveReasonButton){
    
        loveReasonButton.addEventListener(
            "click",
            () => {
    
                const random =
                Math.floor(
                    Math.random() *
                    loveReasons.length
                );
    
                loveReasonCard.innerHTML =
                loveReasons[random];
    
            }
        );
    
    }

    const giftBox =
    document.getElementById(
        "giftBox"
    );
    
    const giftOverlay =
    document.getElementById(
        "secretGiftOverlay"
    );
    
    const closeGift =
    document.getElementById(
        "closeGift"
    );
    
    if(giftBox){
    
        giftBox.addEventListener(
            "click",
            () => {
    
                giftOverlay.style.display =
                "flex";
    
            }
        );
    
    }
    
    if(closeGift){
    
        closeGift.addEventListener(
            "click",
            () => {
    
                giftOverlay.style.display =
                "none";
    
            }
        );
    
    }