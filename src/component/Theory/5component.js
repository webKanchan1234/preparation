// ------------------------------pure component--------------------------
// Pure components are the components which render the same output for the same state and props. In function components, you can achieve these pure components through memoized React.memo() API wrapping around the component. This API prevents unnecessary re-renders by comparing the previous props and new props using shallow comparison. So it will be helpful for performance optimizations.

// But at the same time, it won't compare the previous state with the current state because function component itself prevents the unnecessary rendering by default when you set the same state again.

// The syntactic representation of memoized components looks like below,

// const MemoizedComponent = memo(SomeComponent, arePropsEqual?);



// ------------------------What are controlled components?-----------
// A component that controls the input elements within the forms on subsequent user input is called Controlled Component, i.e, every state mutation will have an associated handler function. That means, the displayed data is always in sync with the state of the component.

// The controlled components will be implemented using the below steps,

// Initialize the state using use state hooks in function components or inside constructor for class components.
// Set the value of the form element to the respective state variable.
// Create an event handler to handle the user input changes through useState updater function or setState from class component.
// Attach the above event handler to form elements change or click events


// function UserProfile() {
//   const [username, setUsername] = useState("");

//   const handleChange = (e) => {
//     setUsername(e.target.value);
//   };

//   return (
//     <form>
//       <label>
//         Name:
//         <input type="text" value={username} onChange={handleChange} />
//       </label>
//     </form>
//   );
// }


// ----------------------What are uncontrolled components?-------------
// The Uncontrolled Components are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

// The uncontrolled components will be implemented using the below steps,

// Create a ref using useRef react hook in function component or React.createRef() in function component.
// Attach this ref to the form element.
// The form element value can be accessed directly through ref in event handlers or componentDidMount for class components
// In the below UserProfile component, the username input is accessed using ref.

// import React, { useRef } from "react";

// function UserProfile() {
//   const usernameRef = useRef(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("The submitted username is: " + usernameRef.current.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input type="text" ref={usernameRef} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// In most cases, it's recommend to use controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.


// What are Higher-Order Components?
// A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.

// We call them pure components because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components.

// const EnhancedComponent = higherOrderComponent(WrappedComponent);
// HOC can be used for many use cases:

// Code reuse, logic and bootstrap abstraction.
// Render hijacking.
// State abstraction and manipulation.
// Props manipulation.




// ---------------------What are stateless components?-------------
// If the behaviour of a component is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether.



// ----------------------What are stateful components?-------------
// If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. These stateful components are either function components with hooks or class components.

// Let's take an example of function stateful component which update the state based on click event,

// import React, {useState} from 'react';

// const App = (props) => {
// const [count, setCount] = useState(0);
// handleIncrement() {
//   setCount(count+1);
// }

// return (
//   <>
//     <button onClick={handleIncrement}>Increment</button>
//     <span>Counter: {count}</span>
//   </>
//   )
// }


//-------------------statefull and stateless component-------------------------
// The components that have their own state are known as a stateful component, while the components that don’t have their own state are known as a stateless component.
// Stateful component :
// class Main extends Component {
//  constructor() {
//    super()
//    this.state = {
//      books: []
//    }
//  }
//  render() {
//    return <BooksList books={this.state.books} />;
//  }
// }

// Stateless component :
// const BooksList = ({books}) => {
//  return (
//    <ul>
//      {books.map(book => {
//        return <li>book</li>
//      })}
//    </ul>
//  )
// }

// Differences:-
// 1. Components that have state and can change their own data while Components that don’t have state and rely on props.
// 2. Class components while Function components.
// 3. Can manage state using this.state and this.setState() while Cannot manage state.
// 4. Can receive props from parent components while Can receive props from parent components.
// 5. Re-renders when state or props change while Re-renders when props change.
// 6. More complex and can be less performant due to managing state while Simpler and can be more performant since they don’t manage state
// 7. Have access to lifecycle methods like componentDidMount() and componentWillUnmount() while Don’t have access to lifecycle methods.
// 8. Ideal for complex components that need to manage state while Ideal for simpler components that just render UI based on props.



// ---------------Functional Components over Class Components------------------
// 1. Simplicity: 
// Functional components are simpler and easier to understand than class components. They don’t have the added complexity of lifecycle methods, state, and this binding.
// 2. Performance: 
// Functional components are more performant than class components. They don’t have the added overhead of creating a new instance for each render and also functional components can use the React Hooks which makes it more performant.
// 3. Easier to test: 
// Functional components are easier to test than class components. Because they are just plain JavaScript functions, they can be tested with standard JavaScript testing tools like Jest.
// 4. Hooks: 
// Functional components can use the React hooks, which allows you to use state and other React features in functional components, while class components can’t. 

// Steps to convert any Class Component to a Functional Component:

// Import all the necessary libraries.
// Replace the class declaration with the function declaration.
// We simply don’t use this in the functional component, hence remove this from the code. for eg (Replace this.props with simple props)
// You have to pass all the props as we do with a normal function.
// Replace this.state with useState() hook, 
// Replace all the lifecycle methods like ComponentDidMount() with useEffect() hook.
// At the end remove the render() method and return the component’s JSX directly from the function.



//////////////difference b/t element and component//////////////////
// Element:
// An element is the smallest building block in React. It represents a DOM element or a piece of UI.
// Elements are typically created using JSX syntax or React.createElement() function.
// Elements are immutable, meaning they cannot be modified once created.
// Elements are lightweight objects that describe what you want to render on the screen.
// const element = <div>Hello, world!</div>;


// Component:
// A component is a reusable piece of UI that can contain one or more elements.
// Components are typically created as functions or classes in React.
// Components can accept inputs called props and return React elements, which describe what should be rendered on the screen.
// Components can have their own state and lifecycle methods (for class components).
// Components can be composed together to build complex UIs.

// In summary, elements are the building blocks that describe what you want to render on the screen, while components are reusable pieces of UI that can contain one or more elements and encapsulate their behavior and rendering logic. Components are often composed of elements, but elements themselves are not components.

