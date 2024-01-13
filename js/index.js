//step-1:add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    //step2:get the email address inside the email input field
    // alawys remember to use .value to get the text from an input field
    const emailField=document.getElementById('user-email');
    const email= emailField.value;
    // step3:get password to same way to step 2
    const passwordField=document.getElementById('user-password');
    const password=passwordField.value;
 
    //DANGER DO NOT VERIFY EMAIL AND PASSWORD ON THE CLIENT SIDE
    //step-4:verify email and password

    if(email === 'mahabub@gmail.com' && password === 'nusratmim'){
        window.location.href = 'bank.html';
    }
    else{
        alert('please type valid password');
    }
})