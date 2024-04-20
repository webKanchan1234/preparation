// React is a declarative, efficient, flexible open source front-end JavaScript library developed. It follows the component-based approach for building reusable UI components, especially for single page application.  It is used for developing interactive view layer of web and mobile apps.

// What are the features of React?
// JSX
// Components
// One-way Data Binding
// Virtual DOM
// Simplicity
// Performance

// Advantage
// React is easy to learn and use
// React follows the MVC architecture.
// React uses Virtual DOM to improve efficiency.
// Creating dynamic web applications is easy.
// React is SEO-friendly.
// React allows reusable components.

// Biggest limitations
// React is just a library. It is not a complete framework.(elaborate)
// It has a huge library which takes time to understand.



// ---------difference between server-side and client-side------------------
// Server-side processes are executed on the web server, while client-side processes are executed on the user's device.
// One of the main differences between server-side and client-side processes is the amount of control and access to resources that each has. Server-side processes have access to the server's resources, such as its CPU, memory, and storage, as well as any databases or other servers that the web application uses. Client-side processes, on the other hand, have access only to the resources of the user's device, such as its CPU, memory, and storage.


//----------------------structure of jwt----------------------------
// JSON Web Tokens (JWT) consist of three parts separated by dots (.): the header, the payload, and the signature. Here's the structure of a JWT:

// header.payload.signature

// Header:
// The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.
// The header is base64url-encoded to form the first part of the JWT.
// Example: {"alg": "HS256", "typ": "JWT"}
// Payload:
// The payload contains claims or statements about the entity (user) and additional data.
// Claims are pieces of information asserted about the entity, such as user ID, username, roles, expiration time, etc.
// The payload is also base64url-encoded to form the second part of the JWT.
// Example: {"sub": "1234567890", "name": "John Doe", "admin": true}
// Signature:
// The signature is used to verify that the message hasn't been changed along the way and comes from the expected sender.
// The signature is created by encoding the header and payload, appending a secret key, and then hashing the result using the specified algorithm from the header.
// The signature ensures the integrity of the token.
// Example: HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)