function main(){
    var burger= document.getElementById("burger");
    var policybtn=document.getElementById("policy_agree_btn");
    burger.addEventListener('click',show);
    policybtn.addEventListener('click',hide_policy);
 }
 
 function show(){
     var navlinks=document.querySelector('.nav-links');
     navlinks.classList.toggle('nav-active');
 }
 function hide_policy(){
     var popup=document.getElementById("policymessage").style.display='none';
 }
 
 function openModal(){
    document.getElementById("policy_modal_container").style.display='block';
    document.getElementById("wrapper").style.display='none';
    document.getElementById("index_head").style.display='none';
    document.getElementById("footer").style.display='none';

    $("html, body").animate({ scrollTop: 0 }, 10);


    document.getElementById("close_btn").addEventListener('click',closeModal);
}
function closeModal(){
    var popup=document.getElementById("policy_modal_container").style.display='none';
    document.getElementById("wrapper").style.display='block';
    document.getElementById("index_head").style.display='block';
    document.getElementById("footer").style.display='block';

}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
 