console.log("loaded");
let email=document.getElementById("email");
let error=document.getElementById("error");
let pwd=document.getElementById("pwd");
let error4=document.getElementById("error4");
let pwd2=document.getElementById("pwd2")
let exppwd= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
let strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{12,}$/;
let medium = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/;
let enough = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
let error5=document.getElementById("error5");
function validate(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error.innerHTML="Valid";
        error.style.color="green";
        return passwordValidation();
    }
    else{
        error.innerHTML="Invalid";
        error.style.color="red";
        return false;
    }
}

function passwordValidation()
    {
    
      if(exppwd.test(pwd.value))
      {
        error4.innerHTML="Password format accepted!";
        error4.style.color="green";
        return password2Validation();
      }
     else{
    
        error4.innerHTML="Password format accepted: Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number.";
        error4.style.color="red";
        return false;
    
         } 
      
    }
    function password2Validation(){
      if (strong.test(pwd.value)) 
          {
            error4.innerHTML="Strong password!";
            error4.style.color="green";
            return password3Validation();
            
          }

        else if (medium.test(pwd.value)) 
          {
            error4.innerHTML="Medium strength password!";
            error4.style.color="orange";
            return password3Validation();
            
            
          }
        else
          {
            error4.innerHTML="Weak password!";
            error4.style.color="red";
            return password3Validation();
            
            
          }
   }
 

    function password3Validation(){
      if(pwd2.value==pwd.value )
      {
        error5.innerHTML="Password confirmed.";
        error5.style.color="green";
        return true;
      }
     else{
        error5.innerHTML="Invalid confirmation. Please enter the password entered above.";
        error5.style.color="red";
        return false;
    
         } 
    }   