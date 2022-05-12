let images = ["images/dessert1.jpg", "images/dessert2.jpg", "images/dessert3.jpg",  "images/dessert4.jpg",  "images/dessert5.jpg" ,  "images/dessert6.jpg",  "images/dessert7.jpg"]; //array of image paths
document.addEventListener("DOMContentLoaded", function(){
       document.querySelector("#dessert3").src = images[Math.floor(Math.random() * images.length)];
})