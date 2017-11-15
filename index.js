/*
This is sample Javascript
*/

 

var resultDiv = document.getElementById("results");
resultDiv.innerHTML = "<p> This is  nice <p>";

console.log("msg is of type  "+ typeof(msg));			
console.log("msg is of type  "+ typeof(resultDiv));


function showMsg (msg,more) {
	if(more) {
		console.log("show message+ "+ more +msg);
	} else {
		console.log("show message+ "+ msg);
	}
	
	
}

showMsg("some info");
showMsg("some info","even more");

/*
var  showIt = funciton (msg) {
	console.log(msg);
}
showIt("Hi Message");
*/

function showItThen(message,callback) {
	callback();
}
showItThen("showItThenCalled", function (){
	console.log("Callback called");
});



