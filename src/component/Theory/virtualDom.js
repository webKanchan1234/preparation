// The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.

// The Virtual DOM works in three simple steps.

// 1. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.

// 2. Then the difference between the previous DOM representation and the new one is calculated.

// 3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.




// --------------------------What is reconciliation?-----------------
// Reconciliation is the process through which React updates the Browser DOM and makes React work faster. React use a diffing algorithm so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components. React stores a copy of Browser DOM which is called Virtual DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. This comparison is done by Diffing Algorithm. Now React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.





// -----------Difference between Virtual DOM and Real DOM--------------
// DOM stands for Document Object Model it is the structural representation of the HTML Document. Real DOM is the actual structure represented in the User Interface while Virtual DOM is the memory representation of the same. It is a tree-like Structure consisting of all nodes in an HTML document DOM represents the Ul of your applications.

// Real DOM
// Real DOM is the actual structure of the webpage.
// React Update complete document in the Real DOM.
// React DOM is the actual webpage rendered on the browser any changes made directly reflect on the complete webpage.
// The DOM represents the web page often called a document with a logical tree and each branch of the tree ends in a node and each node contains objects.
// The developer can modify the content of the document using a scripting language like JavaScript.
// The changes and updates to the DOM are fast because of its tree-like structure but re-rendering whole documents makes the DOM Slow.
// All UI components need to be re-rendered for every DOM update.

// Virtual DOM
// Virtual DOM is the virtual representation of Real DOM
// React update the state changes in Virtual DOM first and then it syncs with Real DOM
// Virtual DOM is just like a blueprint of a machine, can do changes in the blueprint but those changes will not directly apply to the machine.
// Virtual DOM is a programming concept where a virtual representation of a UI is kept in memory synced with “Real DOM ” by a library such as ReactDOM and this process is called reconciliation
// Virtual DOM makes the performance faster, not because the processing itself is done in less time. The reason is the amount of changed information – rather than wasting time on updating the entire page, you can dissect it into small elements and interactions

// Methods of DOM
// write(“string”): Writes in document area
// writeln(“string”): Writes in a new line in the document area
// getElementById(“id”): Returns the element with the passed ID
// getElementByName(” name” ): Returns the element with the passed name
// getElementByTagName(“tagname”): Returns the element with the passed tag name
// getElementByClassName(“classname”): Returns the element with the passed class name

// Differences
// 1. Real DOM represent actual structure of the webpage. while Virtual DOM represent the virtual/memory representation of the Webpage.

// 2. Real DOM manipulation is very expensive while Virtual DOM manipulation is very easy.

// 3. Real Dom There is too much memory wastage while Virtual No memory wastage.

// 4. Real Dom It updates Slow while Virtual Dom It updates fast

// 5. Real Dom It can directly update HTML while Virtual Dom It can’t update HTML directly.
  
//  6. Real Dom Creates a new DOM if the element updates while Virtual Dom 	Update the JSX if the element update.

// 7. Real Dom It allows us to directly target any specific while 
// node (HTML element) while Virtual  Dom It can produce about 200,000 Virtual DOM Nodes / Second.

// 8. Real Dom It represents the Ul of your application while Virtual Dom It is only a virtual representation of the DOM.
