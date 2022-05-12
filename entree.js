let images = ["images/entree1.jpg", "images/entree2.jpg", "images/entree3.jpg",  "images/entree4.jpg",  "images/entree5.jpg" ,  "images/entree6.jpg",  "images/entree7.jpg"]; //array of image paths
document.addEventListener("DOMContentLoaded", function(){
       document.querySelector("#entree3").src = images[Math.floor(Math.random() * images.length)];
})