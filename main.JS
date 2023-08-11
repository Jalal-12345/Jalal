// slides 

    let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}




function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("card");
 
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
 
  slides[slideIndex-1].style.display = "flex";  
}


let slidecount = 1;
Slides(slidecount);

function LEFTSlides(n) {
  Slides(slidecount += n);
}




function Slides(n) {
  let i;
  let slide = document.getElementsByClassName("text_best");
 
  if (n > slide.length) {slidecount = 1}    
  if (n < 1) {slidecount = slide.length}
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
 
  slide[slidecount-1].style.display = "block";  
}



/// clock

let day = 2;

function clock(){
    let Clock = new Date();
    return 24 //Clock.getHours(); 
}

clock();

function activeTabel() {
    if (clock() == 24){
         day++
    }
    let active = document.querySelector(`tbody:nth-child(${10})`)
     
    active.style.background = "#202020";
    active.style.color = "#FFD100"
}

activeTabel();

// Burger Menue

let btn_burger = document.querySelector(".burger");
let burger_span_menue = document.querySelector(".burger-primary");
let burger_menue = document.querySelector(".burger-menu");
let close_burger_menue = document.querySelector(".burger-menu span")
btn_burger.addEventListener("click" , ()=>{
  burger_span_menue.classList.toggle("active");
  burger_menue.classList.add("active");
  
})

close_burger_menue.addEventListener("click", ()=>{
  burger_menue.classList.remove("active");
  console.log("hello");
})



