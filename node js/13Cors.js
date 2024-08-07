// CORS (Cross-Origin Resource Sharing) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the resource originated. In a Node.js application, you can handle CORS by using the cors middleware.

// Use CORS middleware
app.use(cors());

// By default, this will allow all origins to access your resources. If you want to restrict access to specific origins, you can configure it as follows:


const corsOptions = {
    origin: 'http://example.com', // Replace with your client's domain
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));


// Advanced CORS Configuration:
// You can also set additional options like methods, allowed headers, etc.
const corsOptions1 = {
    origin: 'http://example.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions1));


// Handling Preflight Requests:
// Preflight requests are sent by the browser to check if the server will allow the actual request. This happens for requests that might have side-effects on the server (e.g., methods other than GET or POST, custom headers).
app.options('*', cors(corsOptions)); // Allow preflight for all routes
// By using the cors middleware, you can control how your Node.js application handles cross-origin requests, making your API more secure and robust.