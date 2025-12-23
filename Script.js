let namepattern=/^[A-Z]{1}[a-z]{3,8}$/;
let passwordpattern=/^[A-Z]{1}[a-z !@#$%^&*]{3,8}[0,9]{1}$/;
let emailpattern=/^[A-Za-z0-9!@#$%^^&*]+@[A-Za-z0-9^&*#]+\.[A-Za-z]{2}$/;
let mobilepattern=/^[6-9]{1}[0-9]{9}$/;
let aadharcardpattern=/^[0-9]{4} [0-9]{4} [0-9]{4}$/;
let pancardpattern=/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/

let erroru=document.getElementById('erroru'); 
let errorp=document.getElementById('errorp');
let errore=document.getElementById('errore');
let errorm=document.getElementById('errorm');
let errora=document.getElementById('errora');
let errorpc=document.getElementById('errorpc');

function validation(){
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    let email=document.getElementById('email').value;
    let mobile=document.getElementById('mobile').value;
    let aadharcard=document.getElementById('aadharcard').value;
    let pancard=document.getElementById('pancard').value;

    let isvalid=true;

    if(!namepattern.test(username)){
        erroru.innerText="please enter valid username";
        erroru.style.color="red";
        isvalid=false
    }
    else{
        erroru.innerText=""
    }

    if(!passwordpattern.test(password)){
        errorp.innerText="please enter valid password";
        errorp.style.color="red";
        isvalid=false
    }
    else{
        errorp.innerText=""
    }

        if(!emailpattern.test(email)){
        errore.innerText="please enter valid email";
        errore.style.color="red";
        isvalid=false
    }
    else{
        errore.innerText=""
    }

        if(!mobilepattern.test(mobile)){
        errorm.innerText="please enter valid mobile";
        errorm.style.color="red";
        isvalid=false
    }
    else{
        errorm.innerText=""
    }

        if(!aadharcardpattern.test(aadharcard)){
        errora.innerText="please enter valid aadharcard";
        errora.style.color="red";
        isvalid=false
    }
    else{
        errora.innerText=""
    }

        if(!pancardpattern.test(pancard)){
        errorpc.innerText="please enter valid pancard";
        errorpc.style.color="red";
        isvalid=false
    }
    else{
        errorpc.innerText=""
    }

    if(isvalid){
        alert("Successful")
    }
    return isvalid;
}