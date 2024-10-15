// Hooks is a special JavaScript function that allows you use state and other React features without writing a class. 
// There are 3 rules for hooks:
// Hooks can only be called inside React function components.
// Hooks can only be called at the top level of a component.
// Hooks cannot be conditional
// Note: Hooks will not work in React class components.


// What is the difference between useState and useRef hook?
// useState causes components to re-render after state updates whereas useRef doesn’t cause a component to re-render when the value or state changes. Essentially, useRef is like a “box” that can hold a mutable value in its (.current) property.
// useState allows us to update the state inside components. While useRef allows referencing DOM elements.


// 1. --------------------------------useState--------------------------
// The React useState Hook allows us to track state in a function component.
// State generally refers to data or properties that need to be tracking in an application.
// we are destructuring useState from react as it is a named export.
// We initialize our state by calling useState in our function component.
// useState accepts an initial state and returns two values:
// The current state.
// A function that updates the state.

// const [color, setColor] = useState("");
// Notice that again, we are destructuring the returned values from useState.
// The first value, color, is our current state.
// The second value, setColor, is the function that is used to update our state.

// When state is updated, the entire state gets overwritten.

// useState in React is synchronous. When you call useState to update the state of a component, React schedules a re-render of the component with the updated state, but the state update itself is synchronous
const handleClick = () => {
    setCount(count + 1);
    console.log(count); // This will log the old value, not the updated one
  };

  const handleClick1 = () => {
    setCount(prevCount => {
      console.log(prevCount); // Logs the current count
      return prevCount + 1;
    });
  };

//   or 
useEffect(() => {
    console.log('Count updated:', count);
  }, [count]);
// why:

// Synchronous behavior: When you call the state updater function returned by useState, React immediately updates the state of the component synchronously. This means that any code executed after the state update will see the updated state

// Batching updates: Although state updates are synchronous, React may batch multiple state updates together for performance reasons. However, this batching behavior doesn't affect the synchronous nature of individual state updates. React will still update the state synchronously when you call the state updater function.

// Re-renders: After updating the state, React will schedule a re-render of the component with the updated state. This re-render might be asynchronous, but the state update itself is still synchronous.

// Use of callbacks: If you need to perform an action after the state has been updated, you can pass a callback function to the state updater function. This callback function will be executed after the state has been updated.Example:
 
// 2 --------------------------------useEffect--------------------------
// The useEffect Hook allows you to perform side effects in your components.
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// useEffect accepts two arguments. The second argument is optional.
// useEffect(<function>, <dependency>)

// No dependency passed: means remove []
// //Runs on every render

// An empty array:
// //Runs only on the first render

// Props or state values:
// //Runs on the first render
//   //And any time any dependency value changes

// Effect Cleanup
// Some effects require cleanup to reduce memory leaks.


// 3 --------------------------------useContext--------------------------
// React Context is a way to manage state globally.
// It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

// Problem
// State should be held by the highest parent component in the stack that requires access to the state.
// To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.
// To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".





// 3 --------------------------------useRef--------------------------
// It provides a way to access React DOM nodes or React elements and how to interact with it. It is used when we want to change the value of a child component, without making the use of props.

// When to Use Refs
// Refs can be used in the following cases:

// When we need DOM measurements such as managing focus, text selection, or media playback.
// It is used in triggering imperative animations.
// When integrating with third-party DOM libraries.
// It can also use as in callbacks.

// How to access Refs
// In React, when a ref is passed to an element inside render method, a reference to the node can be accessed via the current attribute of the ref.

// Refs current Properties
// The ref value differs depending on the type of the node:

// When the ref attribute is used in HTML element, the ref created with React.createRef() receives the underlying DOM element as its current property.
// If the ref attribute is used on a custom class component, then ref object receives the mounted instance of the component as its current property.
// The ref attribute cannot be used on function components because they don't have instances.


// How to create refs?
// There are two approaches

// This is a recently added approach. Refs are created using React.createRef() method and attached to React elements via the ref attribute. In order to use refs throughout the component, just assign the ref to the instance property within constructor.

// You can also use ref callbacks approach regardless of React version. For example, the search bar component's input element is accessed as follows,


// use of refs?
// The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.

// When do you need to use refs?
// There are few use cases to go for refs,

// Managing focus, text selection, or media playback.
// Triggering imperative animations.
// Integrating with third-party DOM libraries.

// Refs in React are used to interact with the DOM or to store references to components and elements. They provide a way to access and manipulate DOM nodes or React elements directly. Here are some common use cases for refs:

// 1.Accessing DOM elements:
// 2.Managing focus
// 3.Integration with third-party libraries
// 4.Animating React components
// 5.Working with forms
// 6.Accessing child components



//  --------------------------------useReducer--------------------------
// The useReducer hook is a powerful hook in React that provides a way to manage complex state logic in functional components
// useReducer accepts two arguments: a reducer function and an initial state. It returns a state and a dispatch function.
const [state, dispatch] = useReducer(reducer, initialState);

// The reducer function receives the current state and an action and returns the new state.
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}


//  --------------------------------useMemo--------------------------
// The useMemo hook in React is used to memoize expensive computations so that they are only re-executed when their dependencies change. This can help improve performance by avoiding unnecessary recalculations.

// Basic Usage of useMemo
// The useMemo hook takes two arguments: a function that computes a value and an array of dependencies. It returns the memoized value.
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);


//  --------------------------------useCallback--------------------------
// The useCallback hook in React is used to memoize callback functions, ensuring that a function instance is only recreated when its dependencies change. This can be particularly useful for optimizing performance in components that rely on passing functions as props or handling event callbacks.

// Basic Usage of useCallback
// The useCallback hook takes two arguments:

// A callback function to be memoized.
// An array of dependencies that determine when the function should be recreated.

const memoizedCallback = useCallback(() => {
    // Function body
  }, [dependencies]);
  



//  --------------------------------useTransition--------------------------
// useTransition is used to manage the transition of state updates, providing a way to handle updates that might take some time without blocking user interactions.
// Usage: Helps manage UI transitions and improve user experience during complex updates.


//  --------------------------------useDeferredValue--------------------------
// useDeferredValue allows you to defer the value of a state or prop until after the browser has finished updating the screen. This can help improve performance by reducing the impact of high-priority updates on the rendering of less critical updates.


//  --------------------------------useId--------------------------
// The useId hook, introduced in React 18, provides a unique ID for use in client and server rendering. This is particularly useful for generating IDs that are consistent between server-side and client-side renders.

// Usage: Ideal for generating unique IDs for accessibility attributes, form controls, and other elements.



//  --------------------------------useSyncExternalStore--------------------------
// useSyncExternalStore is designed for subscribing to external stores. It helps manage state synchronization between React and external state management libraries.

// Usage: Useful for integrating with state management libraries that follow the store pattern.


//  --------------------------------useDebugValue--------------------------
// The useDebugValue hook is used to display debug information in React DevTools. This can help with debugging custom hooks by showing relevant information.

// Usage: Useful for displaying debugging information for custom hooks.