


const heading=document.getElementById('login-status');

function login(){
     localStorage.setItem("auth",true);
     window.location.reload();
}

function logout(){
     localStorage.setItem("auth", false);
     window.Location.reload();
}

// const heading=document.getElementById('login-status');


const loginStatus=localStorage.getItem("auth");

if(loginStatus!='false'){
     heading.innerHTML='User is  Logged In';
}
else{
     heading.innerHTML='User is Logged Out';
}