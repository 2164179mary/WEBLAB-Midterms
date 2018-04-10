var categories = [];
var budget;
var availability;
var ambience = [];
var modal = document.getElementById('filter-background');
var menuList = [];
var cafeList = [];

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
    cafeList = [];
    availability = document.getElementById(id).value;
    console.log(availability);
}

window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
 
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
 
if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB.")
}
 
const cafe = [
  { id: 1, cafeName: "Kitchy Katt Kaffe", cafeLocation: "Hotel Veniz Session Road, Baguio City", wifi: "yes", ambience: "cozy"},
  { id: 2, cafeName: "Baguio Sercret Garden", cafeLocation: "34 Paterno St., South Drive Rd., Beside South Drive Manor Hotel, Baguio City", wifi: "no", ambience: "quiet"},
  { id: 3, cafeName: "Quoted Cafe", cafeLocation: "Legarda Rd., Baguio City", wifi: "yes", ambience: "casual"},
];

const menu = [
    {id: 1, cafeId: 1, menuName: "Brewed Coffee", menuType: "coffee", price: 59},
    {id: 2, cafeId: 1, menuName: "Espresso Con Panna", menuType: "coffee", price: 59},
    {id: 3, cafeId: 1, menuName: "Green Tea Latte", menuType: "coffee", price: 89},
    {id: 4, cafeId: 1, menuName: "Caramel Macchiato", menuType: "coffee", price: 85},
    {id: 5, cafeId: 1, menuName: "Mocha Latte", menuType: "coffee", price: 85},
    {id: 6, cafeId: 1, menuName: "Cappucino", menuType: "coffee", price: 79},
    {id: 7, cafeId: 1, menuName: "Coffe Latte", menuType: "coffee", price: 85},
    {id: 8, cafeId: 1, menuName: "Espresso Hot Chocolate", menuType: "coffee", price: 69},
    {id: 9, cafeId: 1, menuName: "Americano", menuType: "coffee", price: 59},
    {id: 10, cafeId: 1, menuName: "Hot Milk", menuType: "coffee", price: 59},
    {id: 11, cafeId: 1, menuName: "Pasta Classic", menuType: "pasta", price: 129},
    {id: 12, cafeId: 1, menuName: "Carbonara", menuType: "pasta", price: 129},
    {id: 13, cafeId: 1, menuName: "Tuna Garlic Pasta", menuType: "pasta", price: 129},
    {id: 14, cafeId: 1, menuName: "Yummy Cheezy Lasagna", menuType: "pasta", price: 129},
    {id: 15, cafeId: 1, menuName: "Chicken Strips, toasted bread", menuType: "pasta", price: 149},
    {id: 16, cafeId: 1, menuName: "Four Seasons", menuType: "juice", price: 55},
    {id: 17, cafeId: 1, menuName: "Lemon Iced Tea", menuType: "juice", price: 55},
    {id: 18, cafeId: 1, menuName: "Cranberry Iced Tea", menuType: "juice", price: 55},
    {id: 19, cafeId: 1, menuName: "Cranberry Iced Tea Pitcher", menuType: "juice", price: 120},
    {id: 20, cafeId: 1, menuName: "Mango", menuType: "juice", price: 55},
    {id: 21, cafeId: 1, menuName: "Pinapple", menuType: "juice", price: 55},
    {id: 22, cafeId: 1, menuName: "Coke", menuType: "juice", price: 45},
    {id: 23, cafeId: 1, menuName: "Bottled Water", menuType: "juice", price: 30},
    {id: 24, cafeId: 1, menuName: "Java Chip", menuType: "frappe", price: 129},
    {id: 25, cafeId: 1, menuName: "Mango Graham Frappe", menuType: "frappe", price: 129},
    {id: 26, cafeId: 1, menuName: "Strawberry Frappe", menuType: "frappe", price: 129},
    {id: 27, cafeId: 1, menuName: "Nutty Hazelnut Frappe", menuType: "frappe", price: 149},
    {id: 28, cafeId: 1, menuName: "Cookies and Cream Frappe", menuType: "frappe", price: 109},
    {id: 29, cafeId: 1, menuName: "Ube Milkslush Frappe", menuType: "frappe", price: 109},
    {id: 30, cafeId: 1, menuName: "Pandan Frappe", menuType: "frappe", price: 129},
    {id: 31, cafeId: 1, menuName: "Bubble Gum Frappe", menuType: "frappe", price: 129},
    {id: 32, cafeId: 1, menuName: "Wintermelon Milk Tea", menuType: "milk tea", price: 79},
  	{id: 33, cafeId: 1, menuName: "Thai-Style Milk Tea", menuType: "milk tea", price: 79},
  	{id: 34, cafeId: 1, menuName: "Hokkaido Style Milk Tea", menuType: "milk tea", price: 79},
  	{id: 35, cafeId: 2, menuName: "Secret Garden's Beef Tapa", menuType: "rice meal", price: 195},
  	{id: 36, cafeId: 2, menuName: "Beef Belly Roast", menuType: "rice meal", price: 180},
  	{id: 37, cafeId: 2, menuName: "Beef Broccoli", menuType: "rice meal", price: 180},
  	{id: 38, cafeId: 2, menuName: "Beef Salpicao", menuType: "rice meal", price: 195},
  	{id: 39, cafeId: 2, menuName: "Pork Liempo", menuType: "rice meal", price: 165},
  	{id: 40, cafeId: 2, menuName: "Pork Ribs", menuType: "rice meal", price: 180},
  	{id: 41, cafeId: 2, menuName: "Pork Lechon Kawali", menuType: "rice meal", price: 250},
  	{id: 42, cafeId: 2, menuName: "Cream Garlic Chicken", menuType: "rice meal", price: 230},
  	{id: 43, cafeId: 2, menuName: "Sween and Sour Fish Fillet", menuType: "rice meal", price: 175},
  	{id: 44, cafeId: 2, menuName: "Steamed Fish", menuType: "rice meal", price: 220},
  	{id: 45, cafeId: 2, menuName: "Beef steak", menuType: "rice meal", price: 450},
  	{id: 46, cafeId: 2, menuName: "Bolognese", menuType: "pasta", price: 195},
  	{id: 47, cafeId: 2, menuName: "Seafood Pasta", menuType: "pasta", price: 290},
  	{id: 48, cafeId: 2, menuName: "Shirmp Chili Pasta", menuType: "pasta", price: 260},
  	{id: 49, cafeId: 2, menuName: "Garlic Pasta", menuType: "pasta", price: 170},
  	{id: 50, cafeId: 2, menuName: "Carbonara", menuType: "pasta", price: 250},
  	{id: 51, cafeId: 2, menuName: "Pesto Pasta", menuType: "pasta", price: 175},
  	{id: 52, cafeId: 2, menuName: "Creamy Pesto Pasta", menuType: "pasta", price: 235},
  	{id: 53, cafeId: 2, menuName: "Vongole in Olive Oil", menuType: "pasta", price: 185},
  	{id: 54, cafeId: 2, menuName: "Vongole in Tomato", menuType: "pasta", price: 220},
  	{id: 55, cafeId: 2, menuName: "Pomodoro", menuType: "pasta", price: 180},
  	{id: 56, cafeId: 2, menuName: "Fusilli Chilli", menuType: "pasta", price: 240},
	{id: 57, cafeId: 3, menuName: "Brown Cookies", menuType: "pasta", price: 100},
	{id: 58, cafeId: 3, menuName: "Vanilla tea", menuType: "milk", price: 120},
    {id: 59, cafeId: 3, menuName: "milk Frappe", menuType: "frappe", price: 320},
    {id: 60, cafeId: 3, menuName: "milk juice", menuType: "juice", price: 786},
    {id: 61, cafeId: 3, menuName: "Hotdog mean", menuType: "rice", price: 111},
]
 
 
var db;
var request = window.indexedDB.open("newdbase", 2);
 
request.onerror = function(event) {
  console.log("error: ");
};
 
request.onsuccess = function(event) {
  db = request.result;
  console.log("success: "+ db);
};
 
request.onupgradeneeded = function(event) {
        var db = event.target.result;
        var objectStore = db.createObjectStore("cafe", {keyPath: "id"});
        for (var i in cafe) {
                objectStore.add(cafe[i]);      
        }
    
        var objectStore2 = db.createObjectStore("menu", {keyPath: "id"});
        for (var i in menu) {
                objectStore2.add(menu[i]);      
        }
}
 
function compile(){
    menuQuery();
    cafeQuery();
    printCafe();
}

var printCafe = function(){
    var iterate = 0;
    var j = 0;
    var objectStore = db.transaction("cafe").objectStore("cafe");
        objectStore.openCursor().onsuccess = function(event) {
          var cursor = event.target.result;
          if (cursor) {
              if(availability==undefined && ambience.length == 0){
                  var print = cursor.value.cafeName;
                        var location = cursor.value.cafeLocation;
                        var id = cursor.value.id;
                        var ids = "a"+id+"b";
                        var prints = print+"a";
                        var div = document.createElement('div');
                        div.setAttribute('id', ids);
                        var a = document.createElement('button');
                        //a.setAttribute('href', "");
                        a.setAttribute('id', id);
                        a.setAttribute('value', iterate);
                        a.setAttribute('onclick', "callPrintMenu(this.id, this.getAttribute('value'))");
                        a.innerHTML = print+"\t\t Location: "+location;
                        var li = document.createElement('li');
                          //li.setAttribute('id', i);
                        var element = document.getElementById("cafeResults");
                        element.appendChild(li);
                        li.appendChild(a);
                        li.appendChild(div);
                        iterate++;
              }else{
                  if(availability==undefined && ambience.length != 0){
                      for(var i = 0; i < ambience.length; i++) {
                      if(cursor.value.ambience == ambience[i]){
                        var print = cursor.value.cafeName;
                        var location = cursor.value.cafeLocation;
                        var id = cursor.value.id;
                        var ids = "a"+id+"b";
                        var prints = print+"a";
                        var div = document.createElement('div');
                        div.setAttribute('id', ids);
                        var a = document.createElement('button');
                        //a.setAttribute('href', "");
                        a.setAttribute('id', id);
                        a.setAttribute('value', i);
                        a.setAttribute('onclick', "callPrintMenu(this.id, this.getAttribute('value'))");
                        a.innerHTML = print+"\t\t Location: "+location;
                        var li = document.createElement('li');
                          //li.setAttribute('id', i);
                        var element = document.getElementById("cafeResults");
                        element.appendChild(li);
                        li.appendChild(a);
                        li.appendChild(div);
                    }
                    }
                  }else{
                    for(var i=0; i < ambience.length; i++){
                    if(cursor.value.wifi == availability){ 
                        var index = 0;
                              if(ambience.length == 0){
                                    var print = cursor.value.cafeName;
                                    var location = cursor.value.cafeLocation;
                                    var id = cursor.value.id;
                                    var ids = "a"+id+"b";
                                    var prints = print+"a";
                                    var div = document.createElement('div');
                                    div.setAttribute('id', ids);
                                    var a = document.createElement('button');
                                    //a.setAttribute('href', "");
                                    a.setAttribute('id', id);
                                    a.setAttribute('value', iterate);
                                    a.setAttribute('onclick', "callPrintMenu(this.id, this.getAttribute('value'))");
                                    a.innerHTML = print+"\t\t Location: "+location;
                                    var li = document.createElement('li');
                                      //li.setAttribute('id', i);
                                    var element = document.getElementById("cafeResults");
                                    element.appendChild(li);
                                    li.appendChild(a);
                                    li.appendChild(div);
                                    iterate++;
                              }else {
                                  if(cursor.value.ambience == ambience[i]){
                                    console.log("HELLO WORLD");
                                    var print = cursor.value.cafeName;
                                    var location = cursor.value.cafeLocation;
                                    var id = cursor.value.id;
                                    var ids = "a"+id+"b";
                                    var prints = print+"a";
                                    var div = document.createElement('div');
                                    div.setAttribute('id', ids);
                                    var a = document.createElement('button');
                                    //a.setAttribute('href', "");
                                    a.setAttribute('id', id);
                                    a.setAttribute('value', j);
                                    a.setAttribute('onclick', "callPrintMenu(this.id, this.getAttribute('value'))");
                                    a.innerHTML = print+"\t\t Location: "+location;
                                    var li = document.createElement('li');
                                      //li.setAttribute('id', i);
                                    var element = document.getElementById("cafeResults");
                                    element.appendChild(li);
                                    li.appendChild(a);
                                    li.appendChild(div);
                                    j++;
                                    console.log(j);
                                }
                              }
                          }
                    }
                }
                                  
                  
                  
                    }
              
            cursor.continue();
        }
    };     
    return;
}

var printMenu = function(id){
    var ids ="a"+id+"b";
    var objectStore = db.transaction("menu").objectStore("menu");
  
        objectStore.openCursor().onsuccess = function(event) {
          var cursor = event.target.result;
          if (cursor) {
              if(cursor.value.price <= budget){
                  if(categories.length == 0){
                      if(cursor.value.cafeId == id){
                            var print = cursor.value.menuName;
                            var price = cursor.value.price;
                            var p = document.createElement('p');
                            p.setAttribute('href', "");
                            p.innerHTML = print +"\t\tPrice: "+ price;
                            var element = document.getElementById(ids);
                            element.appendChild(p);
                      }
                  }else {
                      for(var i = 0; i < categories.length; i++){
                        if(categories[i] == cursor.value.menuType){
                          if(cursor.value.cafeId == id){
                            var print = cursor.value.menuName;
                            var price = cursor.value.price;
                            var p = document.createElement('p');
                            p.setAttribute('href', "");
                            p.innerHTML = print +"\t\tPrice: "+ price;
                            var element = document.getElementById(ids);
                            element.appendChild(p);
                        }
                        } 
                       }
                  } 
                  
              }
            cursor.continue();
          }
        }; 
}


var callPrintCafe = function(){
    if(cafeResults.hasChildNodes()){
        return;
    }else{
        printCafe();
    }
}

var callPrintMenu = function(id, index){
    
    var indexb = parseInt(index)+1;
    console.log("HELLO "+indexb);
   var element = cafeResults.childNodes[index].childNodes[1];
    var has = cafeResults.childNodes[index].childNodes[1].hasChildNodes();
    if(has){
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }else{
        printMenu(id);
    }
}

var resetCafe = function(){
   location.reload();

}







 
