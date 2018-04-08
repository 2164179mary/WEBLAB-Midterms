var categories = [];
var budget;
var availability;
var ambience = [];
var modal = document.getElementById('filter-background');

function getBudget(){
    budget = document.getElementById("budget-value").value;
    modal.style.display = "block";
    console.log(budget);
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function getCategory(id) {
    var checkBox = document.getElementById(id);
    if(checkBox.checked == true){
        categories.push(id);
        console.log(categories);
    }if(checkBox.checked == false){
        var index = categories.indexOf(id);
        categories.splice(index, 1);
        console.log(categories);
    }
}

function getAmbience(id) {
    var checkBox = document.getElementById(id);
    if(checkBox.checked == true){
        ambience.push(id);
        console.log(ambience);
    }if(checkBox.checked == false){
        var index = ambience.indexOf(id);
        ambience.splice(index, 1);
        console.log(ambience);
    }
}

function getAvailability(id) {
    availability = document.getElementById(id).value;
    console.log(availability);
}