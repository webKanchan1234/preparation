// ----------------------mongodb and ites features-------------
// MongoDB is a popular open-source, NoSQL database that is designed for scalability, flexibility, and performance. It differs from traditional relational databases by using a flexible document model instead of tables and rows

// and features below questions

// ----------------------alternative nosql -------------
// There are several alternative NoSQL databases to MongoDB, each with its own strengths and features
// Apache Cassandra:
// Apache CouchDB:
// Redis:
// Apache HBase:
// Amazon DynamoDB:
// Firebase Firestore:

// ----------------------types of data models -------------
// ----------------------when we embed one document to another -------------


// ----------------------capped collection -------------
// Capped collections in MongoDB are fixed-size collections that maintain insertion order. They have a specific use case and behavior that differs from regular collections. Here are the main reasons and scenarios where capped collections are useful:

// Use Cases for Capped Collections
// 1. Log and Event Data Storage:

// Capped collections are ideal for storing log data, event streams, and audit trails where older data can be automatically overwritten by newer data once the collection reaches its size limit.
// db.createCollection("logs", { capped: true, size: 10000000 }) // Creates a capped collection with a size limit of 10 MB

// 2. Fixed-Size Data Buffers:

// Applications that need a fixed-size buffer for data processing or caching can benefit from capped collections. They ensure that the collection never grows beyond a specified size.
// db.createCollection("cache", { capped: true, size: 1000000, max: 1000 }) // Creates a capped collection with a size limit of 1 MB and a document count limit of 1000

// 3. Event Sourcing:

// Capped collections can be used in event sourcing patterns where the collection acts as a persistent store for events or messages. They facilitate efficient querying and processing of event streams.
// db.createCollection("events", { capped: true, size: 50000000, max: 5000 }) // Creates a capped collection with a size limit of 50 MB and a document count limit of 5000



// ----------------------how image, video and large files stores-------------
// Storing large files like images, videos, and other binary data in MongoDB requires a different approach compared to storing regular JSON documents due to MongoDB's document size limitations and performance considerations. MongoDB is not ideally suited for storing very large files directly within its collections. Instead, a common approach is to use MongoDB in combination with other storage solutions tailored for binary data, such as file systems or cloud storage services like Amazon S3 or Azure Blob Storage. Here are some strategies:

// 1. Using GridFS
// MongoDB provides GridFS, a specification for storing and retrieving large files such as images and videos. GridFS stores files in two collections:

// fs.files: Stores metadata about the files, including filename, content type, and other attributes.
// fs.chunks: Stores the actual binary chunks of the file.

// 2. reference 


// -------------------------------aggregation--------------------------------
// Aggregation in MongoDB refers to the process of transforming and combining documents from a collection to produce computed results. It allows you to perform various data manipulation operations on the data stored in MongoDB, similar to SQL's GROUP BY and aggregate functions.

// Key Components of Aggregation Pipeline
// MongoDB's aggregation framework uses pipelines, where documents pass through multiple stages to produce aggregated results. Here are the key components:

// 1. Stages:

// Each stage in the pipeline performs a specific operation on the input documents and passes the results to the next stage.
// Common stages include $match, $group, $project, $sort, $limit, $skip, and $lookup.

// 2. Operators:

// MongoDB provides a rich set of aggregation operators that perform specific tasks within each stage of the pipeline.
// Examples include $match (filters documents), $group (groups documents by a specified expression), $project (reshapes documents), $sort (orders documents), and many more.

// 3. Expressions:

// Expressions are used to compute values or manipulate data within the pipeline stages.
// Examples include arithmetic operators ($add, $subtract, etc.), array operators ($push, $addToSet, etc.), and conditional operators ($cond, $ifNull, etc.).


// example :- 
// customers collection:
// [
//     { "_id": 1, "name": "John Doe", "city": "New York" },
//     { "_id": 2, "name": "Jane Smith", "city": "Los Angeles" },
//     { "_id": 3, "name": "Michael Johnson", "city": "New York" }
// ]

// orders collection:
// [
//     { "_id": 101, "customerId": 1, "totalAmount": 150 },
//     { "_id": 102, "customerId": 2, "totalAmount": 200 },
//     { "_id": 103, "customerId": 1, "totalAmount": 100 },
//     { "_id": 104, "customerId": 3, "totalAmount": 300 },
//     { "_id": 105, "customerId": 2, "totalAmount": 250 }
// ]

// We will use the following aggregation pipeline to achieve our goal:

// Match Stage: Filter orders for a specific city (e.g., "New York").
// Lookup Stage: Join customers collection to orders collection using customerId.
// Group Stage: Group orders by customer and calculate total revenue per customer.
// Sort Stage: Sort results by total revenue in descending order.
// Project Stage: Shape the output to include relevant fields for clarity.

// db.orders.aggregate([
//     {
//       $match: { // Stage 1: Match orders for a specific city
//         $expr: { $eq: ["$city", "New York"] }
//       }
//     },
//     {
//       $lookup: { // Stage 2: Join customers collection to orders
//         from: "customers",
//         localField: "customerId",
//         foreignField: "_id",
//         as: "customer"
//       }
//     },
//     {
//       $unwind: "$customer" // Unwind the customer array
//     },
//     {
//       $group: { // Stage 3: Group by customerId and calculate total revenue
//         _id: "$customer._id",
//         customerName: { $first: "$customer.name" },
//         totalRevenue: { $sum: "$totalAmount" }
//       }
//     },
//     {
//       $sort: { totalRevenue: -1 } // Stage 4: Sort by total revenue descending
//     },
//     {
//       $project: { // Stage 5: Project to shape the output
//         _id: 0,
//         customerName: 1,
//         totalRevenue: 1
//       }
//     }
//   ]);

  
//   Explanation of Each Stage:
//   Match Stage:
  
//   Filters orders where the city field equals "New York".
//   Lookup Stage:
  
//   Joins orders with customers using the customerId field. It retrieves the matching customer details and appends them as an array (customer).
//   Unwind Stage:
  
//   Deconstructs the customer array created by the $lookup stage, so subsequent stages can access individual customer documents.
//   Group Stage:
  
//   Groups orders by customerId, calculates the total revenue (totalAmount summed up for each customer), and retains the customer's name using $first.
//   Sort Stage:
  
//   Sorts the grouped results by totalRevenue in descending order (-1).
//   Project Stage:
  
//   Shapes the output by excluding the _id field and including customerName and totalRevenue for each customer.
//   Output

//   [
//     { "customerName": "John Doe", "totalRevenue": 250 },
//     { "customerName": "Michael Johnson", "totalRevenue": 300 }
//   ]
  
  
// ----------------------role of profiler in mongodb-------------
// The profiler in MongoDB is a diagnostic tool that monitors and records database operations and their performance characteristics. It allows administrators and developers to analyze query patterns, identify slow operations, and optimize database performance. Here's a detailed look at the role and functionality of the profiler in MongoDB:

  

// ----------------------how mangodb is different from other database-------------
// MongoDB is different from other databases in several key ways, especially when compared to traditional relational databases (RDBMS) like MySQL or PostgreSQL. Here are some of the main differences:

// 1. Data Model
// MongoDB: Uses a document-oriented data model, storing data in JSON-like BSON (Binary JSON) format. Each document is a collection of key-value pairs, which can store nested data structures.
// Relational Databases: Use a table-based model where data is stored in rows and columns. Each table has a predefined schema, and relationships are managed through foreign keys.

// 2. Schema Flexibility
// 3. Query Language
// 4. Scaling
// 5. Transactions
// 6. Use Cases
// 7. Performance
// 8. Community and Ecosystem



// --------------------------what is document and collection--------------------
// In MongoDB, the concepts of documents and collections are central to how data is organized and stored. Here's a breakdown of each:

// Document
// A document in MongoDB is a basic unit of data. It is a record in a JSON-like format called BSON (Binary JSON). Documents contain one or more fields, and each field is a key-value pair. The values in these fields can be various data types, including other documents, arrays, and arrays of documents.

// Collection
// A collection in MongoDB is a grouping of MongoDB documents. Collections are akin to tables in relational databases. However, unlike tables, collections do not enforce a schema, allowing documents within the same collection to have different structures.

// Example of a Collection
// Imagine a collection named users containing multiple documents like the one above. Each document represents a user, and each user document can have different fields or structures if necessary.

// Key Characteristics
// Schema Flexibility: Documents within a collection can have different structures, which allows for a more flexible data model.
// Embedded Documents: MongoDB supports nested data structures, allowing documents to contain sub-documents.
// Collections and Documents: Collections serve as containers for documents, and they provide a logical grouping of related data.


// --------------------------join two collection --------------------
// In MongoDB, joining two collections is not as straightforward as in relational databases where you use SQL joins. However, you can achieve similar results using the $lookup aggregation stage. $lookup performs a left outer join to combine data from two collections.

// orders Collection
// [
//     { "_id": 1, "product": "Laptop", "quantity": 1, "customer_id": 1001 },
//     { "_id": 2, "product": "Mouse", "quantity": 2, "customer_id": 1002 },
//     { "_id": 3, "product": "Keyboard", "quantity": 1, "customer_id": 1001 }
// ]

// customers Collection
// [
//     { "_id": 1001, "name": "John Doe", "email": "john.doe@example.com" },
//     { "_id": 1002, "name": "Jane Smith", "email": "jane.smith@example.com" }
// ]


// Using $lookup for Joining Collections
// To join these two collections, you can use the $lookup stage in an aggregation pipeline. Here’s how you can do it:

// Aggregation Query
// db.orders.aggregate([
//     {
//       $lookup: {
//         from: "customers",
//         localField: "customer_id",
//         foreignField: "_id",
//         as: "customer_info"
//       }
//     },
//     {
//       $unwind: "$customer_info"
//     }
// ])

// Explanation
// $lookup Stage:

// from: The name of the collection to join with (customers).
// localField: The field from the orders collection that references the customers collection (customer_id).
// foreignField: The field from the customers collection to match against (_id).
// as: The name of the new array field to add to the orders documents containing the matching customers documents (customer_info).
// $unwind Stage:

// This stage is used to deconstruct the customer_info array field to output a document for each element. This is useful if you want to work with the joined data as individual documents rather than arrays.


// [
//     {
//       "_id": 1,
//       "product": "Laptop",
//       "quantity": 1,
//       "customer_id": 1001,
//       "customer_info": {
//         "_id": 1001,
//         "name": "John Doe",
//         "email": "john.doe@example.com"
//       }
//     },
//     {
//       "_id": 2,
//       "product": "Mouse",
//       "quantity": 2,
//       "customer_id": 1002,
//       "customer_info": {
//         "_id": 1002,
//         "name": "Jane Smith",
//         "email": "jane.smith@example.com"
//       }
//     },
//     {
//       "_id": 3,
//       "product": "Keyboard",
//       "quantity": 1,
//       "customer_id": 1001,
//       "customer_info": {
//         "_id": 1001,
//         "name": "John Doe",
//         "email": "john.doe@example.com"
//       }
//     }
// ]
  
  
// ----------------------------------sharding----------------------------
// Sharding in MongoDB is a method used to distribute data across multiple servers or clusters to ensure scalability and high availability. This approach allows MongoDB to handle large datasets and high-throughput operations by distributing the load across several nodes.
  


// ----------------------------------remove and drop----------------------------
// In MongoDB, remove and drop are used to delete data, but they operate at different levels and have different scopes and effects. Here's a detailed comparison:

// remove()
// The remove() method is used to delete documents from a collection based on a specified condition.

// Key Characteristics:
// Scope: Deletes documents within a collection.
// Query-Based: Can delete specific documents that match a query or condition.
// Partial Deletion: Can remove one, multiple, or all documents based on the query provided.
// Collection Retention: The collection itself remains even if all documents are removed.

// db.collection.remove(query, options)

// query: Specifies the criteria for documents to be removed. If omitted, all documents in the collection are removed.
// options: (optional) Can include options like justOne: true to remove only a single document.

// Remove documents where age is greater than 25
db.users.remove({ age: { $gt: 25 } });

// Remove all documents from the collection
db.users.remove({});


// drop()
// The drop() method is used to completely remove a collection or a database, including all its documents, indexes, and metadata.

// Key Characteristics:
// Scope: Deletes an entire collection or database.
// Non-Query-Based: Deletes the entire collection or database without conditions.
// Full Deletion: All documents, indexes, and the collection itself are deleted.
// Irreversible: Once a collection or database is dropped, it cannot be recovered unless you have a backup.


// Feature	remove()	drop()
// Scope	Documents within a collection	Entire collection or database
// Condition-Based	Yes (can specify query to match documents)	No (deletes all data unconditionally)
// Partial Deletion	Yes (can delete specific documents)	No (deletes all documents and indexes)
// Collection Retained	Yes (collection remains even if empty)	No (collection or database is removed)
// Use Case	Removing specific documents based on criteria	Removing entire collections or databases



// ----------------------------------replica----------------------------



// ----------------------------------mongo shell----------------------------
// The MongoDB shell (mongosh) is an interactive JavaScript interface to MongoDB. It's used for performing administrative tasks, querying databases, and interacting with MongoDB collections and documents

// To start the MongoDB shell, open your terminal and type:
// mongosh

// If you want to connect to a specific MongoDB instance, you can specify the host and port:
// mongosh "mongodb://localhost:27017"

// List all the databases in the MongoDB instance.
// show dbs

// Select a database to use. If the database does not exist, MongoDB will create it when you insert the first document.
// use myDatabase

// List all the collections in the selected database.
// show collections

// Insert a document into a collection. If the collection does not exist, MongoDB will create it.
// db.myCollection.insertOne({ name: "John Doe", age: 29 })
// db.myCollection.insertMany([{ name: "Jane Doe", age: 25 }, { name: "Alex Smith", age: 32 }])

// Query documents in a collection. The find() method returns a cursor to the documents that match the query criteria.
// db.myCollection.find()
// db.myCollection.find({ age: { $gt: 25 } })
// db.myCollection.findOne({ name: "John Doe" })


// Update documents in a collection. The updateOne() and updateMany() methods allow you to modify documents based on a query.
// db.myCollection.updateOne({ name: "John Doe" }, { $set: { age: 30 } })
// db.myCollection.updateMany({ age: { $gt: 25 } }, { $inc: { age: 1 } })

// Remove documents from a collection. The deleteOne() and deleteMany() methods delete documents based on a query.
// db.myCollection.deleteOne({ name: "John Doe" })
// db.myCollection.deleteMany({ age: { $lt: 30 } })


// Create indexes on collections to improve query performance.
// db.myCollection.createIndex({ name: 1 })


// Perform complex data aggregation operations using the aggregate() method.
// db.myCollection.aggregate([
//     { $match: { age: { $gt: 25 } } },
//     { $group: { _id: "$age", count: { $sum: 1 } } },
//     { $sort: { count: -1 } }
//   ])

  
// Retrieve information about the current database and collections.
// db.stats()
// db.myCollection.stats()




// ----------------------------------indexing----------------------------
// Indexing in MongoDB is a powerful feature that helps improve the efficiency of query operations by creating indexes on fields in documents. An index is a special data structure that stores a small portion of the data set in an easily traversable form, thus speeding up read operations. Here’s an overview of how indexing works in MongoDB and how to use it effectively:

// Types of Indexes
// Single Field Index: Indexes a single field of a document.
// Compound Index: Indexes multiple fields of a document.
// Multikey Index: Indexes fields that contain arrays, creating an index entry for each element in the array.
// Text Index: Supports text search queries on string content.
// Hashed Index: Indexes the hash of the value of a field.
// Geospatial Index: Supports queries for geospatial shapes, including points, lines, and polygons.

// 1. Single Field Index
// Creates an index on a single field.
// db.collection.createIndex({ field: 1 }) // Ascending order
// db.collection.createIndex({ field: -1 }) // Descending order
// example db.users.createIndex({ name: 1 })


// 2. Compound Index
// Creates an index on multiple fields.
// db.collection.createIndex({ field1: 1, field2: -1 })
// example db.users.createIndex({ name: 1, age: -1 })


// 3. Multikey Index
// Creates an index on array fields.
// db.posts.createIndex({ tags: 1 })

// 4. Text Index
// Creates an index on string fields to support text search.
// db.collection.createIndex({ field: "text" })
// example db.articles.createIndex({ content: "text" })


// 5. Hashed Index
// Creates an index based on the hash of the field’s value.
// db.collection.createIndex({ field: "hashed" })
// example db.users.createIndex({ userId: "hashed" })

// 6. Geospatial Index
// Creates an index for location-based queries.
// db.collection.createIndex({ location: "2dsphere" })

// example db.places.createIndex({ location: "2dsphere" })

// and there many more 