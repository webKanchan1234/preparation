// In Node.js, serialization and deserialization are commonly handled using JSON, but other formats like XML and binary formats can also be used depending on the requirements. Here’s a detailed look at how you can perform serialization and deserialization in Node.js.

// JSON Serialization and Deserialization
// Serialization: Converting a JavaScript object to a JSON string.
// Deserialization: Converting a JSON string back to a JavaScript object.

const obj2 = { name: 'Alice', age: 30 };

// Serialization
const jsonString = JSON.stringify(obj2);
console.log(jsonString); // Output: '{"name":"Alice","age":30}'

// Deserialization
const deserializedObj11 = JSON.parse(jsonString);
console.log(deserializedObj11); // Output: { name: 'Alice', age: 30 }



// ----------------------XML Serialization and Deserialization--------------------
// To handle XML, you can use libraries like xml2js for deserialization and js2xmlparser for serialization.

const xml2js = require('xml2js');
const js2xmlparser = require('js2xmlparser');

const obj11 = { name: 'Alice', age: 30 };

// Serialization to XML
const xmlString = js2xmlparser.parse("person", obj);
console.log(xmlString);
// Output:
// <person>
//   <name>Alice</name>
//   <age>30</age>
// </person>

// Deserialization from XML
xml2js.parseString(xmlString, (err, result) => {
  if (err) {
    throw err;
  }
  console.log(result);
  // Output: { person: { name: ['Alice'], age: ['30'] } }
});



// --------------Binary Serialization and Deserialization--------------
// For binary serialization, you can use libraries like protocol-buffers or msgpack.

const msgpack = require('msgpack5')();
const obj = { name: 'Alice', age: 30 };
// Serialization to MessagePack
const buffer = msgpack.encode(obj);
console.log(buffer); // Output: <Buffer 82 a4 6e 61 6d 65 a5 41 6c 69 63 65 a3 61 67 65 1e>
// Deserialization from MessagePack
const deserializedObj = msgpack.decode(buffer);
console.log(deserializedObj); // Output: { name: 'Alice', age: 30 }




// ---------------------------Practical Use Cases---------------------------
// 1. Storing and Retrieving Data: Serialization is useful for saving application state or user data to a file or a database. Deserialization helps in loading this data back into the application.
const fs = require('fs');

const obj1 = { name: 'Alice', age: 30 };

// Serialize to JSON and write to file
const jsonString1 = JSON.stringify(obj1);
fs.writeFileSync('data.json', jsonString1);

// Read from file and deserialize
const fileContent = fs.readFileSync('data.json', 'utf8');
const deserializedObj1 = JSON.parse(fileContent);
console.log(deserializedObj1); // Output: { name: 'Alice', age: 30 }


// 2. Communication between Services: Serialization is essential for transmitting data over a network, for instance, in RESTful APIs or WebSocket communication.
const express = require('express');
const app = express();

app.use(express.json());

app.post('/data', (req, res) => {
  // Deserialize request body
  const obj = req.body;
  console.log(obj);

  // Process and respond
  const responseObj = { message: 'Data received', receivedData: obj };
  res.json(responseObj); // Serialize response as JSON
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
