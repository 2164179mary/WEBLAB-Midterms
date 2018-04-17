var categories=["drinks", "breakfast", "desserts", "rice", "appetizers", "pasta", "sandwiches"];
var category = "none";
var budget = 0;
var availability;
var ambience;
var currentIndex = 0;
//console.log(cafe[0].cafeName);
var myJSON = JSON.stringify(cafe);
//console.log(myJSON)

var data = JSON.parse(myJSON);
//console.log(data);


var getAvailability = function(id){
    availability = document.getElementById(id).value;
}

var getAmbience = function(id){
    ambience = document.getElementById(id).value;
}

var printCafe = function(){
   console.log("hello");
   var myNode = document.getElementById("cafe");
    while(myNode.firstChild){
        myNode.removeChild(myNode.firstChild);
    }
   for(var i = 0; i < data.length; i++){
       var parent = document.getElementById("cafe");
       var div = document.createElement('div');
       div.setAttribute('data-cafe', data[i].cafeID);
       div.setAttribute('id', data[i].cafeID);
       div.setAttribute('onclick', "seeMenu(this.id)");
       
       var divForImage = document.createElement('div');
       divForImage.setAttribute('class', "pic");
    
       var img = document.createElement('img');
       img.setAttribute("src", data[i].image);
       divForImage.appendChild(img);
       
       var divForText = document.createElement('div');
       divForText.setAttribute('class', "text");
       var h1 = document.createElement('h1');
       var name = document.createTextNode(data[i].cafeName);
       h1.appendChild(name);
       var h2 = document.createElement('h2');
       var address = document.createTextNode(data[i].cafeLocation);
       h2.appendChild(address);
       
       var container = document.createElement('div');
       container.setAttribute('class', "cafeContainer");
       
       divForText.appendChild(h1);
       divForText.appendChild(h2);
       container.appendChild(divForImage);
       container.appendChild(divForText);
       div.appendChild(container);
       parent.appendChild(div);
   } 
}

var reset = function(){
    location.reload();
}

var printCafeWithIndex = function(index){
        console.log("hello");
       var parent = document.getElementById("cafe");
       var div = document.createElement('div');
       div.setAttribute('data-cafe', data[index].cafeID);
       div.setAttribute('id', data[index].cafeID);
       div.setAttribute('onclick', "seeMenu(this.id)");
       
       var divForImage = document.createElement('div');
       divForImage.setAttribute('class', "pic");
    
       var img = document.createElement('img');
       img.setAttribute("src", data[index].image);
       divForImage.appendChild(img);
       
       var divForText = document.createElement('div');
       divForText.setAttribute('class', "text");
       var h1 = document.createElement('h1');
       var name = document.createTextNode(data[index].cafeName);
       h1.appendChild(name);
       var h2 = document.createElement('h2');
       var address = document.createTextNode(data[index].cafeLocation);
       h2.appendChild(address);
       
       var container = document.createElement('div');
       container.setAttribute('class', "cafeContainer");
       
       divForText.appendChild(h1);
       divForText.appendChild(h2);
       container.appendChild(divForImage);
       container.appendChild(divForText);
       div.appendChild(container);
       parent.appendChild(div);

}

//window.onload = printCafe;

var searchCafe = function(){
 var myNode = document.getElementById("cafe");
    while(myNode.firstChild){
        myNode.removeChild(myNode.firstChild);
    }
  var search = document.getElementById("search-cafe").value;
  console.log(search);
  var exist = false
    for(var i = 0; i < data.length; i++){
        for(var j = 0; j < data[i].alias.length; j++){
            if(search.toUpperCase() == data[i].alias[j].toUpperCase()){
                printCafeWithIndex(i);
                exist = true;
            }
        }
    }
    if(exist === false){
        var parent = document.getElementById("cafe");
        var p = document.createElement('p');
        var text = document.createTextNode("No Results");
        p.appendChild(text);
        parent.appendChild(p);
    }
}

var seeMenu = function(index){
    currentIndex = parseInt(index);
    var parent = document.getElementById("cafe");
    parent.style.display = "none";
    var searchCafe = document.getElementById("cafeSearch");
    searchCafe.style.display = "none";
    var searchMenu = document.getElementById("menuSearch");
    searchMenu.style.display = "block";
    var category = document.getElementById("category");
    category.style.display = "block";
    dropName();
    printMenu();
    var menu = document.getElementById("menu");
    menu.style.display = "block";
    
}

var back = function(){
    var parent = document.getElementById("cafe");
    parent.style.display = "block";
    var searchCafe = document.getElementById("cafeSearch");
    searchCafe.style.display = "block";
    var searchMenu = document.getElementById("menuSearch");
    searchMenu.style.display = "none";  
    var menu = document.getElementById("menu");
    menu.style.display = "none";
    var category = document.getElementById("category");
    category.style.display = "none";
}

var printMenu = function(){
    var myNode = document.getElementById("menu");
    while(myNode.firstChild){
        myNode.removeChild(myNode.firstChild);
    }
   for(var i = 0; i < data[currentIndex].menu.length; i++){
       var parent = document.getElementById("menu");
       var div = document.createElement('div');
       var h1 = document.createElement('h1');
       var name = document.createTextNode(data[currentIndex].menu[i].menuName);
       h1.appendChild(name);
       var h2 = document.createElement('h2');
       var price = document.createTextNode(data[currentIndex].menu[i].price);
       h2.appendChild(price);
       div.appendChild(h1);
       div.appendChild(h2);
       parent.appendChild(div);
   } 
}

var dropName = function(){
    var myNode = document.getElementById("category");
    
    while(myNode.firstChild){
        myNode.removeChild(myNode.firstChild);
    }
    
    var parent = document.getElementById("category");
    var p = document.createElement('p');
    p.innerHTML = "Categories: ";
    parent.appendChild(p);
    var select = document.createElement('select');
    select.id = "categories";
    select.name = "categories";
    var option = document.createElement('option');
    option.value = "none";
    option.id = 0;
    option.innerHTML = "none";
    select.appendChild(option);
        
    for(var i=0; i < categories.length; i++){
        option = document.createElement('option');
        option.value = categories[i];
        option.id = i+1;
        option.innerHTML = categories[i];
        select.appendChild(option);
    }
    
    parent.appendChild(select);
}

var getCategory = function(index){
    var parentCategory = document.getElementById("categories");
    var selectedValue = parentCategory.options[parentCategory.selectedIndex].value;
    category = selectedValue;
    
    var inputBudget = document.getElementById("budget-value").value;
    console.log(inputBudget);
    
    budget = inputBudget;
    
    var myNode = document.getElementById("menu");
    while(myNode.firstChild){
        myNode.removeChild(myNode.firstChild);
    }
    
    var exist = false;
    
    
    if(category != "none" & budget != 0){
        for(var i = 0; i < data[currentIndex].menu.length; i++){
           if(category == data[currentIndex].menu[i].type && budget >= data[currentIndex].menu[i].price){
               var parent = document.getElementById("menu");
               var div = document.createElement('div');
               var h1 = document.createElement('h1');
               var name = document.createTextNode(data[currentIndex].menu[i].menuName);
               h1.appendChild(name);
               var h2 = document.createElement('h2');
               var price = document.createTextNode(data[currentIndex].menu[i].price);
               h2.appendChild(price);
               div.appendChild(h1);
               div.appendChild(h2);
               parent.appendChild(div);
               exist = true;
           }
       }
    }
    
    if(category != "none" & budget == 0){
        for(var i = 0; i < data[currentIndex].menu.length; i++){
           if(category == data[currentIndex].menu[i].type){
               var parent = document.getElementById("menu");
               var div = document.createElement('div');
               var h1 = document.createElement('h1');
               var name = document.createTextNode(data[currentIndex].menu[i].menuName);
               h1.appendChild(name);
               var h2 = document.createElement('h2');
               var price = document.createTextNode(data[currentIndex].menu[i].price);
               h2.appendChild(price);
               div.appendChild(h1);
               div.appendChild(h2);
               parent.appendChild(div);
               exist = true;
           }
       }
    }
    
    if(category == "none" & budget != 0){
        for(var i = 0; i < data[currentIndex].menu.length; i++){
           if(budget >= data[currentIndex].menu[i].price){
               var parent = document.getElementById("menu");
               var div = document.createElement('div');
               var h1 = document.createElement('h1');
               var name = document.createTextNode(data[currentIndex].menu[i].menuName);
               h1.appendChild(name);
               var h2 = document.createElement('h2');
               var price = document.createTextNode(data[currentIndex].menu[i].price);
               h2.appendChild(price);
               div.appendChild(h1);
               div.appendChild(h2);
               parent.appendChild(div);
               exist = true;
           }
       }
    }
    
   
    if(category == "none" && budget == 0){
        printMenu();
    }
    
    if(exist === false && category != "none"){
        var parent = document.getElementById("menu");
        var p = document.createElement('p');
        p.innerHTML = "No results";
        parent.appendChild(p);
    }
}

var filterCafe = function(){
    var myNode = document.getElementById("cafe");
    while(myNode.firstChild){
        myNode.removeChild(myNode.firstChild);
    }
    if(ambience != undefined && availability != undefined){
        for(var i = 0; i < data.length; i++){
            if(ambience == data[i].ambience && availability == data[i].wifi){
                var parent = document.getElementById("cafe");
                var div = document.createElement('div');
                div.setAttribute('data-cafe', data[i].cafeID);
                div.setAttribute('id', data[i].cafeID);
                div.setAttribute('onclick', "seeMenu(this.id)");
                var img = document.createElement('img');
                img.setAttribute("src", data[i].image);
                var h1 = document.createElement('h1');
                var name = document.createTextNode(data[i].cafeName);
               h1.appendChild(name);
                var h2 = document.createElement('h2');
                var address = document.createTextNode(data[i].cafeLocation);
                h2.appendChild(address);
                div.appendChild(img);
                div.appendChild(h1);
                div.appendChild(h2);
                parent.appendChild(div);
            }
        } 
    }
    
    if(ambience != undefined && availability == undefined){
        for(var i = 0; i < data.length; i++){
            if(ambience == data[i].ambience){
                var parent = document.getElementById("cafe");
                var div = document.createElement('div');
                div.setAttribute('data-cafe', data[i].cafeID);
                div.setAttribute('id', data[i].cafeID);
                div.setAttribute('onclick', "seeMenu(this.id)");
                var img = document.createElement('img');
                img.setAttribute("src", data[i].image);
                var h1 = document.createElement('h1');
                var name = document.createTextNode(data[i].cafeName);
               h1.appendChild(name);
                var h2 = document.createElement('h2');
                var address = document.createTextNode(data[i].cafeLocation);
                h2.appendChild(address);
                div.appendChild(img);
                div.appendChild(h1);
                div.appendChild(h2);
                parent.appendChild(div);
            }
        } 
    }
    
    if(ambience == undefined && availability != undefined){
        for(var i = 0; i < data.length; i++){
            if(availability == data[i].wifi){
                var parent = document.getElementById("cafe");
                var div = document.createElement('div');
                div.setAttribute('data-cafe', data[i].cafeID);
                div.setAttribute('id', data[i].cafeID);
                div.setAttribute('onclick', "seeMenu(this.id)");
                var img = document.createElement('img');
                img.setAttribute("src", data[i].image);
                var h1 = document.createElement('h1');
                var name = document.createTextNode(data[i].cafeName);
               h1.appendChild(name);
                var h2 = document.createElement('h2');
                var address = document.createTextNode(data[i].cafeLocation);
                h2.appendChild(address);
                div.appendChild(img);
                div.appendChild(h1);
                div.appendChild(h2);
                parent.appendChild(div);
            }
        } 
    }
   
}

