//navigation
var nav = document.getElementById("navigation");

//nav logo
var whiteLogo = document.getElementById("white-logo");
var pinkLogo = document.getElementById("pink-logo");

//nav buttons
var signUpBtn = document.getElementById("sign-up");
var logInBtn = document.getElementById("log-in");

//scroll event for nav
window.addEventListener("scroll", navScroll);

function navScroll(){
	if(document.body.scrollTop >= 100){
		nav.classList.add("nav-white");
        nav.classList.remove("nav-transparent");

        whiteLogo.classList.add("hidden");
        pinkLogo.classList.remove("hidden");

        logInBtn.classList.remove("btn-margin");
        signUpBtn.classList.remove("hidden");
    } 
    else{
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-white");

        whiteLogo.classList.remove("hidden");
        pinkLogo.classList.add("hidden");

        logInBtn.classList.add("btn-margin");
        signUpBtn.classList.add("hidden");
    }    
}
navScroll();

//Form
var form = document.getElementById("form-container");

//click event for phone input
var inputPhone = document.getElementById("phone");
inputPhone.addEventListener("click", addForm);

function addForm(){
	//name
	var nameLabel = document.getElementById("name-lb");
	var name = document.getElementById("name");
	name.classList.remove("hidden");
	nameLabel.classList.remove("hidden");
	//email
	var emailLabel = document.getElementById("email-lb");
	var email = document.getElementById("email");
	email.classList.remove("hidden");
	emailLabel.classList.remove("hidden");
	//city
	var cityLabel = document.getElementById("city-lb");
	var email = document.getElementById("city");
	city.classList.remove("hidden");
	cityLabel.classList.remove("hidden");
	//drive button
	var driveBtn = document.getElementById("drive");
	driveBtn.addEventListener("click", submit);
	function submit(){
		name.classList.add("hidden");
		email.classList.add("hidden");
		city.classList.add("hidden");
		nameLabel.classList.add("hidden");
		emailLabel.classList.add("hidden");
		cityLabel.classList.add("hidden");
	}
}

