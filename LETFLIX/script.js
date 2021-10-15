var slideIndex = 1;
var bool;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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
showSlides(1);

function registervalidation(){
  var username = document.registration.username;
  var password = document.registration.password;
  var confirmpass = document.registration.confirmpass;


  if(username.value.length<8 || username.value.length>40){
    alert("username must be at least 8 character and max 40 character");
  }

  else if(password.value.length = 0){
    alert("input password");
  }

  else if(password.value != confirmpass.value){
    alert("password not match");
  }

  else if(document.getElementById("gendermale").checked == false && document.getElementById("genderfemale").checked ==false){
    alert("choose gender");
  }

  else if(!document.getElementById("checkbox").checked){
    alert("agree to Terms and Aggreements");
  }
  
  else{
    
    location.href = "Home.html";    
    return false;
  }
}

var slideIndex = 1;
var bool;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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
showSlides(1);


// subscribe
function registervalidation()
{
  var username = document.registration.username;
  var password = document.registration.password;
  var confirmpass = document.registration.confirmpass;

  if(username.value.length<8 || username.value.length>40)
  {
    alert("username must be at least 8 character and max 40 character");
  }
  else if(password.value.length = 0)
  {
    alert("input password");
  }
  else if(password.value != confirmpass.value)
  {
    alert("password not match");
  }
  else if(document.getElementById("gendermale").checked == false && document.getElementById("genderfemale").checked ==false)
  {
    alert("choose gender");
  }
  else if(!document.getElementById("checkbox").checked)
  {
    alert("agree to Terms and Aggreements");
  }
  else{
    location.href = "Home.html";    
    return false;
  }
}