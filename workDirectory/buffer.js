// Different Method to create Buffer
const buffer1 = Buffer.alloc(100);
const buffer2 = new Buffer('GFG');
const buffer3 = Buffer.from([1, 2, 3, 4]);

// Writing data to Buffer
buffer1.write("Happy Learning");

// Reading data from Buffer
const a = buffer1.toString('utf-8');
console.log(a);

// Check object is buffer or not
console.log(Buffer.isBuffer(buffer1));

// Check length of Buffer
console.log(buffer1.length);

// Copy buffer
const bufferSrc = new Buffer('ABC');
const bufferDest = Buffer.alloc(3);
bufferSrc.copy(bufferDest);

const Data = bufferDest.toString('utf-8');
console.log(Data);

// Slicing data
const bufferOld = new Buffer('GeeksForGeeks');
const bufferNew = bufferOld.slice(0, 4);
console.log(bufferNew.toString());

// concatenate two buffer
const bufferOne = new Buffer('Happy Learning ');
const bufferTwo = new Buffer('With GFG');
const bufferThree = Buffer.concat([bufferOne, bufferTwo]);
console.log(bufferThree.toString());



/// exaple of chatgpt

// Create an empty buffer of a specific size
const emptyBuffer = Buffer.alloc(10);

// Create a buffer and initialize it with values
const initializedBuffer = Buffer.from([1, 2, 3, 4]);

// Create a buffer from a string
const stringBuffer = Buffer.from("Hello, World!");


//Here's a basic example of using a buffer to encode and decode binary data:

const originalData = Buffer.from([65, 66, 67]); // ASCII values for "ABC"

// Encoding to Base64
const encodedData = originalData.toString('base64');
console.log(encodedData); // Outputs: "QUJD"

// Decoding from Base64
const decodedData = Buffer.from(encodedData, 'base64');
console.log(decodedData); // Outputs: <Buffer 41 42 43>
