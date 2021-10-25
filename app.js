
let closeBar = document.querySelector(".nav_close");

let closingContainer = document.querySelector(".responsive_navigation");

let nav = document.querySelector(".responsive_nav");

let checkBox = document.querySelector("#check-box");

closeBar.addEventListener("click", function () { 
  nav.classList.remove("nav-active");  
  checkBox.checked = false;  
  closingContainer.style.visibility = "hidden";
  closingContainer.style.opacity = 0;
});

checkBox.addEventListener('click', function(){
    if (checkBox.checked === true ){
        closingContainer.style.visibility = "visible";
        closingContainer.style.opacity = 1;
    }
    else{
      closingContainer.style.visibility = "hidden";
      closingContainer.style.opacity = 0;  
    }

    nav.classList.toggle('nav-active');
})

//Form validation


function formValidation() {
  let lastName = document.getElementById("last_name");
  let firstName = document.getElementById("first_name");
  let emailAddress = document.getElementById("email_address");
  let phoneNumber = document.getElementById("phone_num");

  let location = document.getElementById("location");
  let checkIn = document.getElementById("check_in");
  let checkOut = document.getElementById("check_out");
  let children = document.getElementById("Children");
  let adult = document.querySelector("Adult");

  if (firstName.value.length === 0) {
    attention.innerHTML = "Please fill in your First name!";
    attention.style.fontSize = "1rem";
    attention.style.color = "#FF5C58";
    firstName.focus();
    firstName.style.background = "#FF5C58";
    return false;
  } else if (lastName.value.length === 0) {
    attention.innerHTML = "Please fill in your Last name!";
    attention.style.fontSize = "1rem";
    attention.style.color = "#FF5C58";
    lastName.focus();
    lastName.style.background = "#FF5C58";
    return false;
  } else if (emailAddress.value.length === 0) {
    attention.innerHTML = "Please fill in your Email Address!";
    attention.style.fontSize = "1rem";
    attention.style.color = "#FF5C58";
    emailAddress.focus();
    emailAddress.style.background = "#FF5C58";
    return false;
  } else if (phoneNumber.value.length === 0) {
    attention.innerHTML = "Please fill in your Phone Number!";
    attention.style.fontSize = "1rem";
    attention.style.color = "#FF5C58";
    phoneNumber.focus();
    phoneNumber.style.background = "#FF5C58";
    return false;
  }

  firstName.style.background = "white";
  lastName.style.background = "white";
  emailAddress.style.background = "white";
  phoneNumber.style.background = "white";
}

document.querySelector(".form-item").addEventListener("submit", formValidation);


