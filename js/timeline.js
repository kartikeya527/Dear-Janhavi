const memories = {

    1: `
    The day everything changed.
    4th May 2026. 5:25 pm. When you said me
    yes, That made me the most happiest person on earth.
    That day changed my life, as you became mine.
    You were with me in my tough times in every possible way. 

    `,

    2: `
    The Moment I never wanted to end.

    Every Moment with you, those 3 days each and every second I never wanted to end. I just wanted to stop the Time.
    `,

    3: `
    The moment I realized you were becoming important.

    The moment I heard you singing Samjhawan.
    The moment I saw the cutest smile ever.
    The moment when you handled me and calmed me down in my anxiety and panic for the first time.
    
    `,

    4: `
    One of my favorite memories of us.

    4th June 2026, 12:00 am midnight
    When you were reading the letter and I saw you smiling and your
    shining eyes while reading it. That's my favourite memory of us.
    `,

    5: `
    A memory I never want to forget.

    3rd July 
    When we kissed for the first time. When My lips felt your lips.

};

const vaultButtons =
document.querySelectorAll(".vault-btn");

const memoryDisplay =
document.getElementById("memoryDisplay");

vaultButtons.forEach(button => {

    button.addEventListener("click", () => {

        const id =
        button.dataset.memory;

        showMemory(memories[id]);

    });

});

const starNodes =
document.querySelectorAll(".star-node");

const constellationMessage =
document.getElementById("constellationMessage");

console.log("Stars Found:", starNodes.length);

starNodes.forEach(star => {

    star.addEventListener("click", () => {

        console.log(
            "Star Clicked:",
            star.dataset.message
        );

        constellationMessage.innerHTML =
        star.dataset.message;

    });

});


/*====================================================
            CINEMATIC MEMORY WRITER
====================================================*/
let typingTimeout = null;
let fadeTimeout = null;

function showMemory(text){

    const display = document.getElementById("memoryDisplay");

    // Cancel previous animations
    clearTimeout(typingTimeout);
    clearTimeout(fadeTimeout);

    display.textContent = "";

    display.classList.remove(
        "memoryVisible",
        "memoryGlow",
        "memoryCursor",
        "memoryHidden"
    );

    display.classList.add("memoryHidden");

    fadeTimeout = setTimeout(() => {

        display.classList.remove("memoryHidden");

        display.classList.add(
            "memoryVisible",
            "memoryGlow",
            "memoryCursor"
        );

        let i = 0;

        function type(){

            if(i >= text.length){

                display.classList.remove("memoryCursor");
                return;

            }

            display.textContent += text[i];

            i++;

            typingTimeout = setTimeout(type,28);

        }

        type();

    },500);

}