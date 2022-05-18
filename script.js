let input = document.querySelectorAll('.input');
let butt = document.querySelector('.button');
let retPassWord = '';

butt.addEventListener('click', (e) =>{
  e.preventDefault();
let arr = Array.from(input);
let obj = {};

let retPass = '';

arr.forEach(item => {
 obj[item.name] =item.value;

 console.log(obj);
if (item.name === 'name'){

 chekName(item);
}
if(item.name === 'email') {
  chekEmail(item);
}
if(item.name === 'phone') {
  checkPhone(item);
}
if (item.name === 'retPassword'){
  retPassWord = item;
}
if (item.name === 'password'){
  chekPassword(item,retPassWord);
}

});
});


function chekName (nameInput) {
const oldErr = document.querySelector('.error');




if ( nameInput.value.length < 3 || nameInput.value.length > 15){
  outputError(oldErr,nameInput);
  }
    else {
      dellElem(oldErr,nameInput);
    }
  }




function chekEmail (emailInput) {
  let oldErr = document.querySelector('.error');

  if ( emailInput.value.indexOf('@') < 1 ){

    outputError(oldErr,emailInput);
    } else {
      dellElem(oldErr,emailInput);
    }
  }


  function checkPhone (phoneInput)  {

    let oldErr = document.querySelector('.error');


  if ( phoneInput.value.length < 12  ){
    outputError(oldErr,phoneInput);
    } else {
      dellElem(oldErr,phoneInput);
    }
  }

  function chekPassword (passwordInput, passwordConfirmInput) {
    let oldErr = document.querySelector('.error');

    if (passwordInput.value.length < 4 ){
      outputError(oldErr,passwordInput);
      } else {
        dellElem(oldErr,passwordInput);
      }
      if ( passwordInput.value != passwordConfirmInput.value ){
          outputError(oldErr,passwordInput);
          } else {
            dellElem(oldErr,passwordInput);
          }

    }


function outputError(elemErr,currentInput){
  if(elemErr) {
    return;
    } else {
      let err = document.createElement('p');
      err.classList.add('error');
      err.textContent = 'Passwords do not match';
      currentInput.style.border = '2px solid red';

      currentInput.insertAdjacentElement('afterend',err);
    }
}

function dellElem(elemErr,currentInput){
  currentInput.style.border = 'none';
if(elemErr !== null) {
  elemErr.remove();
}
}
