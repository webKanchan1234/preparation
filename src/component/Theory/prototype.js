// Type checking in React helps catch errors early in the development process, improves code readability, and enhances collaboration within teams. Here are some common ways type checking is used in React:

// 1. PropTypes:
// PropTypes is a built-in type checking feature in React that allows you to specify the types of props that a component should receive. By defining PropTypes for your components, you can catch type-related errors at runtime, providing better error messages and improving debugging.

// import PropTypes from 'prop-types';

// function MyComponent(props) {
//   // ...
// }

// MyComponent.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number,
//   email: PropTypes.string.isRequired,
// };


// 2. TypeScript:
// TypeScript is a statically typed superset of JavaScript that adds optional static typing to the language. With TypeScript, you can define types for variables, functions, and components, helping catch type-related errors at compile time rather than runtime.Example:

// interface User {
//     name: string;
//     age?: number;
//     email: string;
//   }
  
//   function MyComponent(props: User) {
//     // ...
//   }

// 3. Flow:
// Flow is a static type checker for JavaScript developed by Facebook. It allows you to add type annotations to your code and performs type checking during development. Flow can be used alongside React to catch type-related errors early in the development process.Example:


// @flow

// type Props = {
//     name: string,
//     age?: number,
//     email: string,
//   };
  
//   function MyComponent(props: Props) {
//     // ...
//   }

// 4. IDE integration:
// Many integrated development environments (IDEs) and text editors offer support for type checking in React. IDEs like Visual Studio Code, WebStorm, and Atom provide features like auto-completion, type inference, and error highlighting, helping developers write type-safe React code more efficiently.