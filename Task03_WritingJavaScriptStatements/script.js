// Declare and instantiate a variable with our message
var msg = "hello world!";

// Check if the code is running in a browser environment
if (typeof document !== 'undefined') {
    // Use document.write() in the browser
    document.write(msg);
} else {
    // Use console.log() in Node.js or environments without a document object
    console.log(msg);
}
