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
