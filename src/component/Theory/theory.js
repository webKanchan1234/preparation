// ----------------------------What is React? ----------------------
// React (aka React.js or ReactJS) is an open-source front-end JavaScript library that is used for building composable user interfaces, especially for single-page applications.

// The major features of React are:
// Uses JSX syntax, a syntax extension of JS that allows developers to write HTML in their JS code.
// It uses Virtual DOM instead of Real DOM considering that Real DOM manipulations are expensive.
// Supports server-side rendering which is useful for Search Engine Optimizations(SEO).
// Follows Unidirectional or one-way data flow or data binding.
// Uses reusable/composable UI components to develop the view.

// how react different from others framework or library
// 1. Virtual DOM
// 2. Component-based architecture: React is centered around the concept of reusable components. Components encapsulate their own state and behavior, making it easier to build complex UIs by composing smaller, reusable pieces. This modular approach promotes code reusability and maintainability.
// 3. JSX syntax: React introduces JSX, a syntax extension that allows developers to write HTML-like code directly within JavaScript. This makes it easier to visualize and understand the structure of UI components, as well as to integrate HTML seamlessly with JavaScript logic
// 4. Unidirectional data flow:


// -------------------What are the limitations of React?----------------------
// Apart from the advantages, there are few limitations of React too,

// React is just a view library, not a full framework.
// There is a learning curve for beginners who are new to web development.
// Integrating React into a traditional MVC framework requires some additional configuration.
// The code complexity increases with inline templating and JSX.
// Too many smaller components leading to over engineering or boilerplate.




// What is React Fiber?
// Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.


// What is the main goal of React Fiber?
// -----------------------react fiber---------------------------------
// The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

// from documentation

// Its main goals are:

// Ability to split interruptible work in chunks.
// Ability to prioritize, rebase and reuse work in progress.
// Ability to yield back and forth between parents and children to support layout in React.
// Ability to return multiple elements from render().
// Better support for error boundaries.

// The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

// from documentation

// Its main goals are:

// Ability to split interruptible work in chunks.
// Ability to prioritize, rebase and reuse work in progress.
// Ability to yield back and forth between parents and children to support layout in React.
// Ability to return multiple elements from render().
// Better support for error boundaries.


// What is React lazy function?
// The React.lazy function lets you render a dynamic import as a regular component. It will automatically load the bundle containing the OtherComponent when the component gets rendered. This must return a Promise which resolves to a module with a default export containing a React component.

// const OtherComponent = React.lazy(() => import("./OtherComponent"));

// function MyComponent() {
//   return (
//     <div>
//       <OtherComponent />
//     </div>
//   );
// }
// Note: React.lazy and Suspense is not yet available for server-side rendering. If you want to do code-splitting in a server rendered app, we still recommend React Loadable.


// What is code-splitting?
// Code-Splitting is a feature supported by bundlers like Webpack and Browserify which can create multiple bundles that can be dynamically loaded at runtime. The react project supports code splitting via dynamic import() feature.

// For example, in the below code snippets, it will make moduleA.js and all its unique dependencies as a separate chunk that only loads after the user clicks the 'Load' button. moduleA.js


// const moduleA = "Hello";
// export { moduleA };

// class App extends Component {
//   handleClick = () => {
//     import("./moduleA")
//       .then(({ moduleA }) => {
//         // Use moduleA
//       })
//       .catch((err) => {
//         // Handle failure
//       });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>Load</button>
//       </div>
//     );
//   }
// }

// export default App;




// ------------------------------code-splitting----------------------------------
// Code splitting is a technique used to improve the performance and loading time of web applications by splitting the codebase into smaller bundles that can be loaded on demand. In a React application, code splitting is particularly useful for optimizing the initial load time of the application, especially when dealing with large codebases or complex single-page applications.

// There are several approaches to implement code splitting in a React application:

// Dynamic imports: JavaScript's dynamic import() function allows you to import modules asynchronously at runtime. You can use dynamic imports to split your code into separate bundles that are loaded only when needed.Example:
// const MyComponent = React.lazy(() => import('./MyComponent'));

// React.lazy and Suspense: React's React.lazy() function allows you to dynamically import components. When combined with the Suspense component, you can define a fallback UI to display while the component is being loaded.

// Route-based code splitting: In React applications using a router (e.g., React Router), you can split your code based on routes. This allows you to load only the code needed for a specific route when it's accessed.