const imagePaths = [
  "images/IMG_20250711_184819411.jpg",
  "images/IMG_20250711_173958222.jpg",
  "images/IMG_2911.JPG",
  "images/IMG_1673.jpeg",
  "images/IMG_2931.JPG",
  "images/IMG_1355_1.jpg"
];

let current = 0;
const imageElement = document.getElementById("slider-image");

imageElement.src = imagePaths[0];

function changeImage() {
  imageElement.style.opacity = 0;

  setTimeout(() => {
    current = (current + 1) % imagePaths.length;
    imageElement.src = imagePaths[current];
    imageElement.style.opacity = 1;
  }, 500); 
}

setInterval(changeImage, 3000); 


function toggleMenu() {
  const menu = document.querySelector('nav ul.menu');
  menu.classList.toggle('active');
}





















  