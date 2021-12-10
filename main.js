const form = document.getElementById('login-form');
const username = document.getElementById('user');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');
// const form = document.getElementById('login-form');



form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(username.value == "" || username.value == null ){
            console.log('username is empty')
            document.getElementById('user-text').innerHTML = "username is empty, please enter your name";
            username.style.border = "2px solid red"
        }else {
            console.log(username.value)
            username.style.border = "5px solid green";
            document.getElementById('user-text').innerHTML = "username created successfully"
        }

        if(email.value == "" || email.value == null){
            console.log('email is empty')
        }else {
            console.log(email.value)
        }

        if(password.value == "" || password.value == null){
            console.log('password is empty')
        }else {
            console.log(password.value)
        }

        if(confirm_password.value == "" || confirm_password.value == null){
            console.log('password is empty')
        }else {
            console.log(confirm_password.value)
        }

        if(password.value === confirm_password.value){
            console.log("passwords are same")
        }else{
            console.log("passwords are not same")
        }
})