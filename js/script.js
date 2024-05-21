const firebaseConfig = {
    apiKey: "AIzaSyDwc9T_jMP1Ust-vH1yfu8HlCrRZ_AGtV8",
    authDomain: "firebasics-01.firebaseapp.com",
    projectId: "firebasics-01",
    storageBucket: "firebasics-01.appspot.com",
    messagingSenderId: "975869999815",
    appId: "1:975869999815:web:df7a2b28ea59236ba21ce2",
    measurementId: "G-DF1SXLBWXS"
};

firebase.initializeApp(firebaseConfig);
const auth =  firebase.auth();

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
});
document.getElementById("form2").addEventListener("submit", (event) => {
    event.preventDefault();
});

auth.onAuthStateChanged((user)=>{
    if(user){
        location.replace("profile/location.html");
    }
});

const firebase_login = () => {
    const email = document.getElementById("login_email").value;
    const password = document.getElementById("login_password").value;
    auth.signInWithEmailAndPassword(email,password)
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.getElementById("error").innerHTML = error.message;
    });
}

const firebase_signup = () =>{
    const email = document.getElementById("sign_email").value;
    const password = document.getElementById("sign_password").value;
    auth.createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.getElementById("error").innerHTML = error.message;
    });
}

document.getElementById("signup-button").onclick = () => {
    firebase_signup();
    form.classList.remove("animate__bounceIn");
            form.classList.add("animate__bounceOut");
            setTimeout(function(){
                signup[0].style.display = 'none';
            },800);
}

document.getElementById("login-button").onclick = () => {
    firebase_login();
}

const signup = () => {
    let sign_btn = document.getElementById("signbtn");
    let sign_btn2 = document.getElementById("signbtn2");
    let signup = document.getElementsByClassName("signup");
    let form = document.getElementById("form");
    sign_btn.onclick = () =>{
        signup[0].style.display = "grid";
        form.classList.remove("animate__bounceOut");
        form.classList.add("animate__bounceIn");
        return false;
    }
    sign_btn2.onclick = () =>{
        signup[0].style.display = "grid";
        form.classList.remove("animate__bounceOut");
        form.classList.add("animate__bounceIn");
        return false
    }
    signup[0].onclick = function(e){
        if(e.target.id == 'signup'){
            form.classList.remove("animate__bounceIn");
            form.classList.add("animate__bounceOut");
            setTimeout(function(){
                signup[0].style.display = 'none';
            },800);     
        }
        return false;
    }
}
signup();

const login = () => {
    let log_btn = document.getElementById("logbtn");
    let login = document.getElementsByClassName("login");
    let form2 = document.getElementById("form2");
    log_btn.onclick = () =>{
        login[0].style.display = "grid";
        form2.classList.remove("animate__bounceOut");
        form2.classList.add("animate__bounceIn");
        return false;
    }
    login[0].onclick = function(e){
        if(e.target.id == 'login'){
            form2.classList.remove("animate__bounceIn");
            form2.classList.add("animate__bounceOut");
            setTimeout(function(){
                login[0].style.display = 'none';
            },800);
            return false;     
        }
    }
}
login();

function signup2(){
    var name = btoa(document.getElementById("sign_email").value);
    var password = btoa(document.getElementById("sign_password").value);
    if(name!="" && password!="")
    {
        var user_input = {name:name,password:password};
        var user_data = JSON.stringify(user_input);
        let signup = document.getElementsByClassName("signup");
        let form = document.getElementById("form");
        localStorage.setItem(name,user_data);
        window.alert("success")
        document.getElementById("sign_email").value="";
        document.getElementById("sign_password").value="";
        form.classList.remove("animate__bounceIn");
            form.classList.add("animate__bounceOut");
            setTimeout(function(){
                signup[0].style.display = 'none';
            },800);     
    }
}

// function signup_check(){
//     var name = btoa(document.getElementById("sign_email").value);
//     var eml = document.getElementById("sign_email");
//     if(localStorage.getItem(name)!=null){
//         window.alert("user already exists");
//         // eml.onclick = function(){
//         //     this.value="";
//         // }
//         return false;
//     }
// }

// function login2(){
//     var username = btoa(document.getElementById("login_email").value);
//     var password = btoa(document.getElementById("login_password").value);
//     var login_input = {username:username,password:password};
//     var login_data = JSON.stringify(login_input);
//     sessionStorage.setItem(username,login_data);
//     var session_data = sessionStorage.getItem(username);
//     var user_detail = JSON.parse(session_data);
//     if(localStorage.getItem(user_detail.username) == null){
//         alert("user not found");
//     }
//     else{
//         if(localStorage.getItem(user_detail.username).match(user_detail.password)){
//             window.open("profile/profile.html");
//             sessionStorage.setItem('user_mail',username);
//             return false;
//         }
//         else{
//             alert("user not found2");
//         }
//     }
// }