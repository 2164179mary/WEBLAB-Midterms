var addP = function(){
    var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
var element = document.getElementById("sample");
element.appendChild(para);
}