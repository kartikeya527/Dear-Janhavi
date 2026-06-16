const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg",
    "images/photo7.jpg",
    "images/photo8.jpg",
    "images/photo9.jpg",
    "images/photo10.jpg",
    "images/photo11.jpg",
    "images/photo12.jpg",
    "images/photo13.jpg",
    "images/photo14.jpg",
    "images/photo15.jpg"
];

let currentPhoto = 0;

const galleryImage = document.getElementById("galleryImage");
const nextPhoto = document.getElementById("nextPhoto");
const prevPhoto = document.getElementById("prevPhoto");
const photoCounter = document.getElementById("photoCounter");

function updateGallery() {

    galleryImage.classList.add("gallery-exit");

    setTimeout(() => {

        galleryImage.src = photos[currentPhoto];

        if(photoCounter){

            photoCounter.innerHTML =
            `Memory ${currentPhoto + 1} of ${photos.length}`;

        }

        galleryImage.classList.remove(
            "gallery-exit"
        );

        galleryImage.classList.add(
            "gallery-enter"
        );

        setTimeout(() => {

            galleryImage.classList.remove(
                "gallery-enter"
            );

        },1200);

    },900);

}

if (nextPhoto) {

    nextPhoto.addEventListener("click", () => {

        currentPhoto++;

        if (currentPhoto >= photos.length) {
            currentPhoto = 0;
        }

        updateGallery();
    });
}

if (prevPhoto) {

    prevPhoto.addEventListener("click", () => {

        currentPhoto--;

        if (currentPhoto < 0) {
            currentPhoto = photos.length - 1;
        }

        updateGallery();
    });
}

/* Auto Slide Every 6 Seconds */

setInterval(() => {

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    updateGallery();

}, 6000);

/* Keyboard Navigation */

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {

        currentPhoto++;

        if (currentPhoto >= photos.length) {
            currentPhoto = 0;
        }

        updateGallery();
    }

    if (e.key === "ArrowLeft") {

        currentPhoto--;

        if (currentPhoto < 0) {
            currentPhoto = photos.length - 1;
        }

        updateGallery();
    }

});

/* Initialize Counter */

if (photoCounter) {
    photoCounter.innerHTML =
        `Memory 1 of ${photos.length}`;
}

const lightbox =
document.getElementById(
    "lightbox"
);

const lightboxImage =
document.getElementById(
    "lightboxImage"
);

const closeLightbox =
document.getElementById(
    "closeLightbox"
);

if(galleryImage){

    galleryImage.addEventListener(
        "click",
        () => {

            lightbox.style.display =
            "flex";

            lightboxImage.src =
            galleryImage.src;

        }
    );

}

if(closeLightbox){

    closeLightbox.addEventListener(
        "click",
        () => {

            lightbox.style.display =
            "none";

        }
    );

}

if(lightbox){

    lightbox.addEventListener(
        "click",
        (e) => {

            if(
                e.target === lightbox
            ){

                lightbox.style.display =
                "none";

            }

        }
    );

}

//setInterval(() => {

 //   currentPhoto++;

   // if(currentPhoto >= photos.length){

     //   currentPhoto = 0;

    //}

    //updateGallery();

//},7000);
clearInterval(autoSlide);

autoSlide =
setInterval(nextMemory,12000);