const images = [ "0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const afterImage = document.querySelector("body script");

bgImage.src = `img/${chosenImage}`;

document.body.insertBefore(bgImage,afterImage);