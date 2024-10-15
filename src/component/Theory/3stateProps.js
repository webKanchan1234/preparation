// State of a component is an object that holds some information that may change over the lifetime of the component. The important point is whenever the state object changes, the component re-renders. It is always recommended to make our state as simple as possible and minimize the number of stateful components.
// const [message, setMessage] = useState("Welcome to React world");

// State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.

// Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation similar to HTML-tag attributes. Here, the data is passed down from a parent component to a child component.

// The primary purpose of props in React is to provide following component functionality:

// Pass custom data to your component.
// Trigger state changes.
// Use via this.props.reactProp inside component's render() method.

// The properties from props object can be accessed directly using destructing feature from ES6 (ECMAScript 2015). It is also possible to fallback to default value when the prop value is not specified. The above child component can be simplified like below.



// difference between state and props?
// In React, both state and props are plain JavaScript objects and used to manage the data of a component, but they are used in different ways and have different characteristics.

// The state entity is managed by the component itself and can be updated using the setter(setState() for class components) function. Unlike props, state can be modified by the component and is used to manage the internal state of the component. Moreover, changes in the state trigger a re-render of the component and its children. The components cannot become reusable with the usage of state alone.

// On the otherhand, props (short for "properties") are passed to a component by its parent component and are read-only, meaning that they cannot be modified by the own component itself. Also, props can be used to configure the behavior of a component and to pass data between components. The components become reusable with the usage of props.