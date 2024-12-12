var emailLogin = document.getElementById('emailLogin');
var passwordLogin = document.getElementById('passwordLogin');
var loginBtn = document.getElementById('loginBtn');


var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var singUpBtn = document.getElementById('singUpBtn');

// signUpBtn.onclick = addUser;
loginBtn.onclick = loginUser ;

var usersList ;
if(localStorage.getItem('usersList') == null){
    usersList = []
}else{
    usersList = JSON.parse(localStorage.getItem('usersList'))
}


// function addUser() {
//     var userInfo = {
//         name: nameInput.value,
//         email: emailInput.value,
//         password: passwordInput.value
//     }
//     usersList.push(userInfo)
//     localStorage.setItem('usersList', JSON.stringify(usersList))
//     location.replace('index.html')
//     // console.log(userInfo, usersList)
// }

function loginUser(){
    for(var i = 0 ; i < usersList.length ; i ++){
        if(usersList[i].email == emailLogin.value && usersList[i].password == passwordLogin.value){
            location.replace("home.html")
            // var userName = usersList[i].name ;
            localStorage.setItem('userName',JSON.stringify(usersList[i].name) )
        }
    }
}

singUpBtn.addEventListener('click' , function(){
    location.replace('sign-up.html')
})


// Validation Input
// function emailValid(){
//     var regx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ ;
//     if(regx.test(emailInput.value) == true){
//         emailInput.classList.add('is-valid')
//         emailInput.classList.remove('is-invalid')
//         emailInput.nextElementSibling.classList.remove('d-block')
//         emailInput.nextElementSibling.classList.add('d-none')
//         signUpBtn.removeAttribute('disabled')
//         return true ;
//     }else{
//         emailInput.classList.add('is-invalid')
//         emailInput.classList.remove('is-valid')
//         emailInput.nextElementSibling.classList.remove('d-none')
//         emailInput.nextElementSibling.classList.add('d-block')
//         signUpBtn.setAttribute('disabled','disabled')
//         return false ;
//     }
// }
// emailInput.addEventListener('input' , emailValid )

// function nameValid(){
//     var regx = /^[A-Z][a-z]{3,15}$/
// //     var x = 'ahmed'
// //    var test = regx.test(x)
// //    console.log(test)
// if(regx.test(nameInput.value) == true){
//     nameInput.classList.add('is-valid')
//     nameInput.classList.remove('is-invalid')
//     nameInput.nextElementSibling.classList.remove('d-block')
//     nameInput.nextElementSibling.classList.add('d-none')
//     signUpBtn.removeAttribute('disabled')
//     // console.log(nameInput.nextElementSibling)
//     return true ;
// }else{
//     nameInput.classList.add('is-invalid')
//     nameInput.classList.remove('is-valid')
//     nameInput.nextElementSibling.classList.remove('d-none')
//     nameInput.nextElementSibling.classList.add('d-block')
//     signUpBtn.setAttribute('disabled','disabled')
//     return false ;
// }
// }


// nameInput.addEventListener('input' , nameValid )