/**
 *Events Listener 
**/

if ('serviceWorker' in navigator) { 
			window.addEventListener('load', function() {   
			  navigator.serviceWorker.register('sw.js').then(
				function(registration) { 
				  // Registration was successful
				  console.log('ServiceWorker registration successful with scope: ', registration.scope); }, 
				function(err) { 
				  // registration failed 😞 
				  console.log('ServiceWorker registration failed: ', err); 
				}); 
			});
}
/*if('serviceWorker' in navigator){
	try{
		navigator.serviceWorker.register('sw.js');
		console.log('SW registered');
		}catch (error){
			console.log('SW reg failed'); 
			}
}*/
 document.getElementById("button").onclick = function () {
                    location.href="home.html";
 }
 
 
 
 
 