let b64 = window.location.search.substr(3);
let total = b64.substr(0, 1);
let nameGuest = decodeURIComponent(escape(window.atob( b64.substr(1) )));
document.querySelector(".guest").innerHTML = nameGuest;
console.log(total, nameGuest);


/* setTimeout(function () {
  document.querySelector(".folder").classList.add("closed");
}, 3000); */

switch (parseInt(total)) {
  case 2:
    document.querySelector(".right-back img").setAttribute("src", "images/paper-two-2.jpg");
    break;
  case 3:
    document.querySelector(".right-back img").setAttribute("src", "images/paper-two-3.jpg");
    break;
  case 4:
    document.querySelector(".right-back img").setAttribute("src", "images/paper-two-4.jpg");
    break;
  case 4:
    document.querySelector(".right-back img").setAttribute("src", "images/paper-two-5.jpg");
    break;
  default:
    document.querySelector(".right-back img").setAttribute("src", "images/paper-two-1.jpg");
}

document.querySelector("button").addEventListener("click", function () {
  document.querySelector(".guest").classList.add("out");
  setTimeout(function(){
    document.querySelector(".folder").classList.remove("closed");
    document.querySelector("button").classList.add("opened");
  }, 2000);
  setTimeout(function(){
    document.querySelector(".right-front").style.display = "none";
  }, 2800);
  setTimeout(function(){
    document.querySelector(".right-back").classList.add("slided");
  }, 5000);
});