//variables
			
function formValidate() { 
let nameField = document.getElementById("formname").value;
let messageField = document.getElementById("message").value;
let email = document.getElementById('formemail');
let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	if(nameField.length < 4){
			
alert("The name field must be at least 4 characters");
		return false;
	} 
	
	if(messageField.length < 20){
		alert("The message field must be at least 20 characters");
		return false;
	}
	//using regular expression i test the inputed value if it does not meet the requirements
    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
	}
	
	return true;
}
