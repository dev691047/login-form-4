const form=document.getElementById('form');
const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')

form.addEventListener('submit',function(e){
e.preventDefault();
checkInput();

});

function checkInput(){
    
    const usernameValue=username.value.trim()
    const emailValue=email.value.trim()
    const passwordValue=password.value.trim()
    

    if(usernameValue==="" ){
        setErrorFor(username,'username cannot be empty')
    }
    // }else if(usernameValue.length<3){
    //     setErrorFor(username,'username is invalid')
    // }
    else{
        setSuccessFor(username);
    }

    if(emailValue===""){
        setErrorFor(email,'email cannot be empty')
    }else if(!validateEmail(emailValue)){
        setErrorFor(email,'incorrect email');
    }
    else{
        setSuccessFor(email);
    }

    if(passwordValue===""){
        setErrorFor(password,'password cannot be empty')
    }
    
    else{
        setSuccessFor(password);
    }
    
    // if(emailValue)
    if(validateEmail(emailValue) &&passwordValue!=''&& usernameValue!="" && emailValue!=''){
        // alert("logged in");
        // swal("Hello world!");
        swal("Good job!", "You are logged in", "success");
    }

}
function setErrorFor(input,message){
      
    const formcontrol=input.parentElement;
    const small=formcontrol.querySelector('small')

    small.innerText=message;
    formcontrol.className='form-control error'

}
function setSuccessFor(input){
    const formcontrol=input.parentElement;
    
    formcontrol.className='form-control success'
}

function validateEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    
}