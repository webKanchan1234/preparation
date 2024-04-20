// Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.
// Redux is the state management library that is used in JavaScript apps. It is used to manage the state of data and access them at different components level in the app

// action
// Actions are plain JavaScript objects or payloads of information that send data from your application to your store. They are the only source of information for the store. Actions must have a type property that indicates the type of action being performed.


//reducer
// reducers are pure functions that handle state logic, accepting the initial state and action type to update and return the state.
// A Reducer is a pure function that takes the state of an application and action as arguments and returns a new state.


//state
// A store is an immutable object tree in Redux. A store is a state container which holds the application’s state. Redux can have only a single store in your application. Whenever a store is created in Redux, you need to specify the reducer.
// The only way to change the state inside it is to dispatch an action on it.

// Redux Thunk?
// Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch() and getState() as parameters.