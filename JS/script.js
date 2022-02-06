var correctAsw = {
    loop: "while loop",
    per: "remainder",
    data: "let" ,
    syntax: "1f(condition){What do if condition is true}",
    var1: "Sting"      
    };
    // getting data from form 
// using either "let" or "var"

let geta = document.getElementById("geta");
let score = 0;

// to keep track of form data
geta.addEventListener("submit", function (event) {

    event.preventDefault();
    // for info on submited data
    var getaData = new FormData(geta);
    compareData(getaData);
    
    
});
function compareData(getaData) {
    var loop = getaData.get("while loop");
    var per = getaData.get("remainder");
    var  data = getaData.get("let");
    var syntax = getaData.get("1f(condition){What to do if condition is true}");
    var var1 = getaData.get("String");


    if (loop === correctAsw["while loop"]){
       score += 2;

	}
    else{
        alert("incorrect");
    }
    if (per === correctAsw["remainder"]) {
		score += 3;
	} 
    else {
		// if the user answer is wrong/false
		alert("incorrect");
	}

	if (data === correctAsw["let"]) {
		score += 4;
	}
     else {
		
		alert("incorrect");
	}

	if (syntax === correctAsw["if(condition){What to do if condition is true}"]) {
		score += 5;
	} 
    else {
		
	
        alert("incorrect");
	}
    if (var1 === correctAsw["String"]) {
		score += 6;
	} 
    else {
		
		alert("incorrect");
	}
    let score = document.querySelector(".score");
	score.textContent = score;
	score.style.color = "red";
	geta.style.display = "none";


}
