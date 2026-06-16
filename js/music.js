const beginStory =
document.getElementById("beginStory");

const backgroundMusic =
document.getElementById("backgroundMusic");

const musicIndicator =
document.getElementById("musicIndicator");

let storyStarted = false;

function fadeInMusic() {

    let volume = 0;

    backgroundMusic.volume = 0;

    const fadeInterval = setInterval(() => {

        volume += 0.02;

        if (volume >= 0.5) {

            volume = 0.5;

            clearInterval(fadeInterval);

        }

        backgroundMusic.volume = volume;

    }, 150);
}

if (beginStory) {

    beginStory.addEventListener("click", async () => {

        if (storyStarted) return;

        try {

            await backgroundMusic.play();

            fadeInMusic();

            storyStarted = true;

            beginStory.innerHTML =
            "❤️ Our Story Has Begun";

            beginStory.disabled = true;

            musicIndicator.innerHTML =
            "🎵 Tumse Behtar Playing";

        }

        catch(error) {

            console.error(error);

            musicIndicator.innerHTML =
            "⚠ Click Again To Enable Music";
        }

    });

}