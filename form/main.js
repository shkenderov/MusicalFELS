function main(){
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCqHLwsfxwPSwJ3IwMWnWeseM6O_hzbJuc",
    authDomain: "test-33b8a.firebaseapp.com",
    databaseURL: "https://test-33b8a.firebaseio.com",
    projectId: "test-33b8a",
    storageBucket: "test-33b8a.appspot.com",
    messagingSenderId: "891645643905",
    appId: "1:891645643905:web:165fe3134defdd9f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    //create table


    var burger= document.getElementById("burger");
    burger.addEventListener('click',show);
    var submitbtn=document.getElementById("submit_form");
    submitbtn.addEventListener('click',validate);

 }
 
 function show(){
     var navlinks=document.querySelector('.nav-links');
     navlinks.classList.toggle('nav-active');
 }

 function validate(){
     var counter=0;
     var form=document.getElementById("contact_us");
    var radio=form.radio.value;
     if(form.name.value==""){
         document.getElementById("NameError").style.display="block";
         counter++;
         event.preventDefault();
     }
     if(form.subject.value==""){
        document.getElementById("SubjectError").style.display="block";
        counter++;

        event.preventDefault();

    }
     if(form.email.value==""){
        document.getElementById("EmailError").style.display="block";
        counter++;
        event.preventDefault();
        counter++;

    }
    if(!radio){
        document.getElementById("RadioError").style.display="block";
        counter++;

        event.preventDefault();
        }
    if(form.policy_check.checked==""){
        alert("Please agree to the privacy policy.");
        counter++;

        event.preventDefault();
    }
    console.log(counter);
    if(counter==0){
        event.preventDefault();

        var messages_ref=firebase.database().ref('messages');

        var name=document.getElementById("name").value;
        var subject=document.getElementById("subject").value;
        var email=document.getElementById("email").value;
        var message=document.getElementById("message").value;
        
        var newMessage=messages_ref.push();
        newMessage.set({
            to_who:radio,
            Name:name,
            Subject:subject,
            EMail:email,
            Message:message

        })

        alert("Form Submitted! Please press OK!");
        
    }
 }
 function openModal(){
    document.getElementById("policy_modal_container").style.display='block';
    document.getElementById("wrapper").style.display='none';
    document.getElementById("footer").style.display='none';
    $("html, body").animate({ scrollTop: 0 }, 10);
    document.getElementById("close_btn").addEventListener('click',closeModal);
}
function closeModal(){
    var popup=document.getElementById("policy_modal_container").style.display='none';
    document.getElementById("wrapper").style.display='block';
    document.getElementById("footer").style.display='block';

  
}
 