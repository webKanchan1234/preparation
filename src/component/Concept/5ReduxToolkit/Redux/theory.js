// It is a predictable state container for javascript apps

// -------------------javascript apps means -----------
// Redux is not tied to react 
// Can we used with React, Angular, Vue or even Vanilla javascript
// Redux is a library for javascriptapplication

//---------------state container means-----------
// Reduxx store he state of your application
// State of n app is the state representated by all the individual components of hat app 
// Redux will store and manage the application state 


//------------------predictable means------------------
// Redux is a state container 
// the state of application can be change 
// Ex. todo list app  - item (pending) -> item(completed)

// In redux all state transition re explicit and it is possible o keep track of them 
// The changes of application's state is predictable


// React is a library used to build user interface
// Redux is  library or managing tate in predictable way in a javascript application
// React-Redux is a library hat provides bindings to use React and Redux together in an application

// ------------------three core concept 
// 1. A store hat holds he state of your application
// 2. An action that describe the changes in the state of the application
// 3.  A reducer which is actually arries out the state transition depending on the action 

// ================three principle---------------
// First Principle 
// the state of our whole application is storeed in an object tree within a single store 
// Maintain our application tate in a single object which would be manageed by the Redux store 

// Second Principle
// The only way to change the state is to emit an action , an object describing what happened

//Third principle
// To specify how the state is transformed by action, you rite pure reducer 
// Reducer - (prevState,action) => return new State 


//////////////////////    MIDDLEWARE ===========================
// Provides a third party extension point between dispatching an action and the moment t reaches the reducer
// Use middleware for logging , crash reporting , performing asyncronous task etc 
 


// $$$$$$$$$$$$$$$$$$$$$$$$ ACTIONS $$$$$$$$$$$$$$$$$$$$$$$$
// As soon as action was dispatch , the state as immediately updated


//redux-thunk
// Define async ction creaters 
// middleware 
