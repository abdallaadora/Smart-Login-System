var logOutBtn = document.getElementById('logOutBtn')
var welcome = document.getElementById('welcome')
logOutBtn.addEventListener('click' , function(){
    location.replace('index.html')
})
welcomeuser()

function welcomeuser(){
welcome.innerHTML = `Welcome ${JSON.parse(localStorage.getItem('userName'))}` 
var x = JSON.parse(localStorage.getItem('userName'))
console.log('hi' , x);

}