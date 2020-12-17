function validate(){
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name === ''){
    text = "Name field is mandatory.";
    error_message.innerHTML = text;
    return false;
  }
 
  if(phone==='' || phone.length < 9){
    text = "Please enter a valid phone number";
    error_message.innerHTML = text;
    return false;
  } 

  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please enter a valid e-mail";
    error_message.innerHTML = text;
    return false;
  }

  if(message===''){
    text = "Please write a short message";
    error_message.innerHTML = text;
    return false;
  }

  alert("Form submitted successfully");
  return true;
}