var InputName=document.querySelector('#InputName')
var InputEmail=document.querySelector('#InputEmail')
var InputPassword=document.querySelector('#InputPassword')
var inputSignUp=document.querySelector('#signUp')
emailErorrMS=document.querySelector('.email-dublicated')
var list=[];
function signUp(){
   var Daplicat= list.some(user => user.email === InputEmail.value);
        if(list.email===InputEmail.value){
            Daplicat=1;
        }
        if(Daplicat){
            emailErorrMS.classList.replace('d-none', 'd-block');
                        return;
        }
        if(Validation(InputName)&& Validation(InputEmail)&& Validation(InputPassword)){
var inputs={
    name:InputName.value
    ,email:InputEmail.value,
    password:InputPassword.value
};
list.push(inputs);
localStorage.setItem("list",JSON.stringify(list));
console.log(list);
clearForm();
console.log("Navigating to login page...");
console.log(localStorage.getItem("list"));
location.href = "../login.html";
}
}
inputSignUp.addEventListener('click',signUp);

function clearForm(){
    InputName.value=""
    InputEmail.value=""
    InputPassword.value=""
//validation clear form
    InputName.classList.remove('is-valid', 'is-invalid');
    InputEmail.classList.remove('is-valid', 'is-invalid');
    InputPassword.classList.remove('is-valid', 'is-invalid');
}
function Validation(input){
    var regax={
        InputName:/^[A-Za-z]{3,}$/,
        InputEmail:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        InputPassword:/^.{8,}$/
    }
   
console.log(input.id);
    if(regax[input.id].test(input.value)){
        //true
        input.classList.add('is-valid')
        input.classList.remove('is-invalid')
        return true;
    }
    else{
    input.classList.add('is-invalid')
    input.classList.remove('is-valid')
    return false;
}
}

