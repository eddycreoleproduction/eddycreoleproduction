function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//inscription du formulaire
const scriptURL = 'https://script.google.com/macros/s/AKfycby0663OeuYdnz3d5XlU-A25CmqsZy9YZ_cIEt6WALeSC2Pv6JiefDQDia2TO193znOP/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => document.getElementById('home').style.display = "none")
    .then(response => document.getElementById('msgform').style.display  = "block")
    .then(response => document.getElementById('name').value = '')
    .then(response => document.getElementById('email').value = '')
    .then(response => document.getElementById('phone').value = '')
    .catch(error => console.error('Error!', error.message))
});