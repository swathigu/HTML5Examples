
onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}

























/*var i = 0;

function timedCount() {
    i = i + 1;
    postMessage("Test"+i);
    setTimeout("timedCount()",5000);
}

timedCount();*/