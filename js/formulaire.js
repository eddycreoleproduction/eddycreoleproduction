function reserve(){
    document.getElementById('form').style.display = 'block';
    document.getElementById('home').style.display ='none';
}
document.getElementById('recu').style.display = 'none'

var choixV, nameV, pnameV, emailV, numberV, ageV, adressV, refV;
      
function send() {
     nameV = document.getElementById('name').value;
     pnameV = document.getElementById('pname').value;
     emailV = document.getElementById('email').value;
     numberV = document.getElementById('number').value;
     ageV = document.getElementById('age').value;
     choixV = document.getElementById('choix').value;
     adressV = document.getElementById('adress').value;
     refV = document.getElementById('ref').value;
  if(nameV == ""){
    document.getElementById('msgname').innerHTML ="*";
    document.getElementById('msgname').style.color = 'red';
  }else if (pnameV == ""){
    document.getElementById('msgpname').innerHTML ="*";
    document.getElementById('msgpname').style.color = 'red';
  }else if(emailV == ""){
    document.getElementById('msgemail').innerHTML ="*";
    document.getElementById('msgemail').style.color = 'red';
  }else if(numberV == ""){
   document.getElementById('msgnumber').innerHTML ="*";
   document.getElementById('msgnumber').style.color = 'red';
 }else if(ageV == ""){
   document.getElementById('msgage').innerHTML ="*";
   document.getElementById('msgage').style.color = 'red';
 }else if(choixV == ""){
   document.getElementById('msgchoix').innerHTML ="*";
   document.getElementById('msgchoix').style.color = 'red';
 }else if(adressV == ""){
   document.getElementById('msgadress').innerHTML ="*";
   document.getElementById('msgadress').style.color = 'red';
 }else if(refV == ""){
   document.getElementById('msgref').innerHTML ="*";
   document.getElementById('msgref').style.color = 'red';
 }else{
    firebase.database().ref('formation drive 27 novembre 21/' + nameV).set({
        ANAME: nameV + pnameV,
        Email: emailV,
        NUMBER: numberV,
        AGE: ageV,
        INFORMATIQUE: choixV,
        ADRESSE: adressV,
        REFERENCE: refV,
    });
    document.getElementById('home').style.display ='none';
    document.getElementById('form').style.display ='none';
    document.getElementById('recu').style.display ='block';
    document.getElementById('name').value = '';
    document.getElementById('pname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
    document.getElementById('adress').value = '';
    document.getElementById('ref').value = '';
    
  }
 }
