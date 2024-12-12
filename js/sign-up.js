var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var signUpBtn = document.getElementById('signUpBtn');

var usersList;
if (localStorage.getItem('usersList') == null) {
    usersList = []
} else {
    usersList = JSON.parse(localStorage.getItem('usersList'))
}

signUpBtn.onclick = addUser;
emailInput.addEventListener('input', emailValid)
emailInput.addEventListener('focus', repetEmail)
nameInput.addEventListener('input', nameValid)
document.addEventListener('mousemove', isEmpty)

document.addEventListener('input' , function(){
    if(emailValid() == false ||  nameValid() == false || repetEmail() == false || isEmpty() == false){
        signUpBtn.setAttribute('disabled', 'disabled')
    }else{
        signUpBtn.removeAttribute('disabled')
    }
})

function addUser() {
    var userInfo = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
    usersList.push(userInfo)
    localStorage.setItem('usersList', JSON.stringify(usersList))
    signUpBtn.nextElementSibling.classList.add('d-block')
    signUpBtn.nextElementSibling.classList.remove('d-none')
    setTimeout(function(){location.replace('index.html')} , 5000)
    // console.log(userInfo, usersList)
}

function emailValid() {
    var regx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (regx.test(emailInput.value) == true) {
        emailInput.classList.add('is-valid')
        emailInput.classList.remove('is-invalid')
        emailInput.nextElementSibling.classList.remove('d-block')
        emailInput.nextElementSibling.classList.add('d-none')
        // signUpBtn.removeAttribute('disabled')
        return true;
    } else {
        emailInput.classList.add('is-invalid')
        emailInput.classList.remove('is-valid')
        emailInput.nextElementSibling.classList.remove('d-none')
        emailInput.nextElementSibling.classList.add('d-block')
        // signUpBtn.setAttribute('disabled', 'disabled')
        return false;
    }
}

function nameValid() {
    var regx = /^[A-Z][a-z]{3,15}$/
    //     var x = 'ahmed'
    //    var test = regx.test(x)
    //    console.log(test)
    if (regx.test(nameInput.value) == true) {
        nameInput.classList.add('is-valid')
        nameInput.classList.remove('is-invalid')
        nameInput.nextElementSibling.classList.remove('d-block')
        nameInput.nextElementSibling.classList.add('d-none')
        // signUpBtn.removeAttribute('disabled')
        // console.log(nameInput.nextElementSibling)
        return true;
    } else {
        nameInput.classList.add('is-invalid')
        nameInput.classList.remove('is-valid')
        nameInput.nextElementSibling.classList.remove('d-none')
        nameInput.nextElementSibling.classList.add('d-block')
        // signUpBtn.setAttribute('disabled', 'disabled')
        return false;
    }
}


function repetEmail() {
    for (var i = 0; i < usersList.length; i++) {
        if (emailInput.value == usersList[i].email) {
            emailInput.nextElementSibling.nextElementSibling.classList.remove('d-none')
            emailInput.nextElementSibling.nextElementSibling.classList.add('d-block')
            emailInput.classList.add('is-invalid')
            emailInput.classList.remove('is-valid')
            // signUpBtn.setAttribute('disabled', 'disabled')
            // console.log('hiiii form repite');
            return false;

        } else {
            emailInput.nextElementSibling.nextElementSibling.classList.add('d-none')
            emailInput.nextElementSibling.nextElementSibling.classList.remove('d-block')
            emailInput.classList.add('is-valid')
            emailInput.classList.remove('is-invalid')
            // signUpBtn.removeAttribute('disabled')
            // console.log('hiiii');
            return true;
        }

    }
}
function isEmpty() {
    if (nameInput.value == '' || emailInput.value == '' || passwordInput.value == '') {
        // signUpBtn.setAttribute('disabled', 'disabled')
        return false;
    } else {
        // signUpBtn.removeAttribute('disabled')
        return true;
    }
}