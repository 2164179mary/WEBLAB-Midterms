 var button = document.getElementById('budget-button');
 button.onclick = function(){
    var budget = document.getElementById('budget-value').value;
	if(budget === ""){
		window.alert("Budget Required");
	}else{
        var modal = document.getElementById("filter-background");
        button.onclick = function() {
	       modal.style.display = "block";
        }
 
    }

     var cancel = document.getElementById("filter-cancel");
     var modal = document.getElementById("filter-background");
     cancel.onclick = function(){
     modal.style.display ="none";
     }
     
 }
 
 
 
 
