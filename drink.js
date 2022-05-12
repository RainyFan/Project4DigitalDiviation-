let images = ["images/drink1.jpg", "images/drink2.jpg", "images/drink3.jpg",  "images/drink4.jpg",  "images/drink5.jpg" ,  "images/drink6.jpg",  "images/drink7.jpg"]; //array of image paths
document.addEventListener("DOMContentLoaded", function(){
       document.querySelector("#drink3").src = images[Math.floor(Math.random() * images.length)];
})