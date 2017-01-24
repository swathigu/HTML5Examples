var first = document.querySelector('#number1');
var second = document.querySelector('#number2');

var result = document.querySelector('.result');

if (window.Worker) { // Check if Browser supports the Worker api.
	// Requries script name as input
	var myWorker = new Worker("./scripts/worker1.js");

	first.onkeyup = function() {
	  myWorker.postMessage([first.value,second.value]); // Sending message as an array to the worker
	  console.log('Message posted to worker');
	};

	second.onkeyup = function() {
	  myWorker.postMessage([first.value,second.value]);
	  console.log('Message posted to worker');
	};

	myWorker.onmessage = function(e) {
		result.textContent = e.data;
		console.log('Message received from worker');
	};
} 





/*var worker;
    
    function startWorker(){
        // Initialize web worker
        worker = new Worker("./scripts/worker1.js");
        
        // Run update function, when we get a message from worker
        worker.onmessage = update;
        
        // Tell worker to get started
        worker.postMessage("start");
    }
    
    function update(event){
        // Update the page with current message from worker
        document.getElementById("result").innerHTML = event.data;
    }
    
    function stopWorker(){
        // Stop the worker
        worker.terminate();
    }
*/