let now = new Date();
let partyDate = new Date(2021,6,17);
let diffTime = partyDate.getTime() - now.getTime();
let days = Math.trunc(diffTime / (1000 * 3600 * 24));
let textRemainingTime;
if (days >= 0) {
  textRemainingTime = `${days} días para el evento`;
} else {
  textRemainingTime = `hace ${Math.abs(days)} días del evento`;
}
document.querySelector('#remainingDays').innerHTML = textRemainingTime;

function openMap (elem) {
  let mapLink = elem.dataset.link;
  console.log(mapLink);
  if( (navigator.platform.indexOf('iPhone') != -1) 
    || (navigator.platform.indexOf('iPod') != -1)
    || (navigator.platform.indexOf('iPad') != -1)
    || (navigator.platform.indexOf('Android') != -1)) {
      window.open('maps://' + mapLink);
  } else {
    window.open('https://' + mapLink);
  }
}