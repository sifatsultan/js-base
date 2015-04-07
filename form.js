var firstName, lastName;

var display = function(firstName, lastName){
	document.getElementById('h1-title').innerHTML = "Welcome"+firstName+" "+lastName;	
}

var formIn = function(){
	firstName = document.getElementById('firstName').value;
	lastName = document.getElementById('lastName').value;
}

formIn();
display(firstName, lastName);