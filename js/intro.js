const loader=document.getElementById("loader");

const lines=document.querySelectorAll(".introLine");

const heart=document.getElementById("introHeart");

const title=document.getElementById("introTitle");

const date=document.getElementById("introDate");

const birthday=document.getElementById("introBirthday");

async function wait(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}

async function intro(){

    for(const line of lines){

        line.classList.add("show");

        await wait(1800);

        line.classList.remove("show");

        await wait(700);

    }

    heart.classList.add("show");

    await wait(2500);

    title.classList.add("show");

    await wait(1200);

    date.classList.add("show");

    await wait(1800);

    birthday.classList.add("show");

    await wait(2800);

    loader.classList.add("fade");

    setTimeout(()=>{

        loader.remove();

    },2000);

}
