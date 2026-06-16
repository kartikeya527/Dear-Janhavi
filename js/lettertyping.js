const letterButton =
document.getElementById("openLetter");

const typedLetter =
document.getElementById("typedLetter");

const loveLetter = `

My Dearest Butterscotch ❤️,

If you're reading this,
it means you've reached one of
my favorite parts of this story.

We are so same in terms of everything -Food, movies,
habits,and the list goes on. We are made for each other💘.
 
The day you became mine will be one of the
most cherished days of my life.
Butterscotch you are a blessing to me by God.

I can't promise we won't fight.
But I can promise I'll never stop loving you.
A website can hold photos.
It can hold memories.
It can even hold music.

But it can never fully hold
what I feel for my butterscotch.

Thank you for every smile,
every conversation,
every moment,
and every memory.

You have become one of the
most beautiful chapters of my life.

And no matter how many pages
life gives us,

you will always be
my favorite one.
I promise you a 
whole lots of happiness 
and love.

Forever yours,

Kartikeya ❤️

`;

let letterStarted = false;

function typeLetter(){

    if(!typedLetter) return;

    let index = 0;

    typedLetter.innerHTML = "";

    const typing = setInterval(() => {

        typedLetter.innerHTML +=
        loveLetter.charAt(index);

        index++;

        if(index >= loveLetter.length){

            clearInterval(typing);

        }

    },35);

}

if(letterButton){

    letterButton.addEventListener(
        "click",
        () => {

            const content =
            document.getElementById(
                "letterContent"
            );

            if(content){

                content.style.display =
                "block";

            }

            if(!letterStarted){

                letterStarted = true;

                typeLetter();

            }

        }
    );

}