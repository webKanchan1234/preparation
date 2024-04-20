// DOM stands for ‘Document Object Model’. In simple terms, it is a structured representation of the HTML elements that are present in a webpage or web app. DOM represents the entire UI of your application. The DOM is represented as a tree data structure. 

// Virtual DOM
// React uses Virtual DOM exists which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is exactly the same, but it does not have the power to directly change the layout of the document. 
// Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM. 

// How does virtual DOM actually make things faster?
// When anything new is added to the application, a virtual DOM is created and it is represented as a tree. Each element in the application is a node in this tree. So, whenever there is a change in the state of any element, a new Virtual DOM tree is created. This new Virtual DOM tree is then compared with the previous Virtual DOM tree and make a note of the changes. After this, it finds the best possible ways to make these changes to the real DOM. Now only the updated elements will get rendered on the page again.


// Virtual DOM Key Concepts :
// Virtual DOM is the virtual representation of Real DOM
// React update the state changes in Virtual DOM first and then it syncs with Real DOM
// Virtual DOM is just like a blueprint of a machine, can do changes in the blueprint but those changes will not directly apply to the machine.
// Virtual DOM is a programming concept where a virtual representation of a UI is kept in memory synced with “Real DOM ” by a library such as ReactDOM and this process is called reconciliation
// Virtual DOM makes the performance faster, not because the processing itself is done in less time. The reason is the amount of changed information – rather than wasting time on updating the entire page, you can dissect it into small elements and interactions



// Differences between Virtual DOM and Real DOM
// Virtual DOM	Real DOM
// It is a lightweight copy of the original DOM	It is a tree representation of HTML elements
// It is maintained by JavaScript libraries	It is maintained by the browser after parsing HTML elements
// After manipulation it only re-renders changed elements	After manipulation, it re-render the entire DOM
// Updates are lightweight	Updates are heavyweight
// Performance is fast and UX is optimised	Performance is slow and the UX quality is low
// Highly efficient as it performs batch updates	Less efficient due to re-rendering of DOM after each update


// Reconciliation is the process by which React updates the UI to reflect changes in the component state. The reconciliation algorithm is the set of rules that React uses to determine how to update the UI in the most efficient way possible.