function main(){
    var burger= document.getElementById("burger");
    var policybtn=document.getElementById("policy_agree_btn");
    burger.addEventListener('click',show);
 }
 
 function show(){
     var navlinks=document.querySelector('.nav-links');
     navlinks.classList.toggle('nav-active');
 }
 
 function openModal(){
    document.getElementById("policy_modal_container").style.display='block';
    document.getElementById("wrapper").style.display='none';
    document.getElementById("head_img").style.display='none';
    document.getElementById("footer").style.display='none';

    $("html, body").animate({ scrollTop: 0 }, 10);


    document.getElementById("close_btn").addEventListener('click',closeModal);
}
function closeModal(){
    var popup=document.getElementById("policy_modal_container").style.display='none';
    document.getElementById("wrapper").style.display='block';
    document.getElementById("head_img").style.display='block';
    document.getElementById("footer").style.display='block';


}
 