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
  { id: 1, cafeName: "cafeOne", cafeLocation: "Baguio", wifi: "yes", ambience: "cozy"},
  { id: 2, cafeName: "cafeTwo", cafeLocation: "Naguilian", wifi: "no", ambience: "quiet"},
  { id: 3, cafeName: "cafeThree", cafeLocation: "La union", wifi: "yes", ambience: "casual"},
];

const menu = [
    {id: 1, cafeId: 1, menuName: "Coffee", menuType: "coffee", price: 120},
    {id: 2, cafeId: 1, menuName: "Strawberry Shortcake", menuType: "cakes", price: 536},
    {id: 3, cafeId: 1, menuName: "Chocolate Cookies", menuType: "cookies", price: 154},
    {id: 4, cafeId: 1, menuName: "Vanilla Frappe", menuType: "frappe", price: 120},
    {id: 5, cafeId: 1, menuName: "Orange Juice", menuType: "juice", price: 50},
    {id: 6, cafeId: 1, menuName: "Taro", menuType: "Milk tea", price: 300},
    {id: 7, cafeId: 1, menuName: "Carbonara", menuType: "pasta", price: 400},
    {id: 8, cafeId: 1, menuName: "Meat and Fist", menuType: "rice", price: 520},
    {id: 9, cafeId: 2, menuName: "Fish", menuType: "rice", price: 220},
    {id: 10, cafeId: 2, menuName: "Matcha Cake", menuType: "cakes", price: 600},
    {id: 11, cafeId: 2, menuName: "Matcha Frappe", menuType: "frappe", price: 400},
    {id: 12, cafeId: 2, menuName: "Matcha Juice", menuType: "juice", price: 50},
    {id: 13, cafeId: 2, menuName: "Matcha Tea", menuType: "milk", price: 123},
    {id: 14, cafeId: 2, menuName: "Matcha Pasta", menuType: "pasta", price: 430},
    {id: 15, cafeId: 3, menuName: "milk Cake", menuType: "cakes", price: 320},
    {id: 16, cafeId: 3, menuName: "milk Cookies", menuType: "cookies", price: 500},
    {id: 17, cafeId: 3, menuName: "Sweet pasta", menuType: "pasta", price: 120},
    {id: 18, cafeId: 3, menuName: "vanilla latte", menuType: "coffee", price: 120},
    {id: 19, cafeId: 3, menuName: "Vanilla tea", menuType: "milk", price: 120},
    {id: 20, cafeId: 3, menuName: "milk Frappe", menuType: "frappe", price: 320},
    {id: 21, cafeId: 3, menuName: "milk juice", menuType: "juice", price: 786},
    {id: 22, cafeId: 3, menuName: "Hotdog mean", menuType: "rice", price: 111},
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
    var objectStore = db.transaction("cafe").objectStore("cafe");
        objectStore.openCursor().onsuccess = function(event) {
          var cursor = event.target.result;
          if (cursor) {
              if(availability==undefined && ambience.length == 0){
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
                      if(cursor.value.wifi == availability){
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

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
}else{
    console.log("ERROR");
}







 
