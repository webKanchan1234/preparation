// JSX stands for JavaScript XML and it is an XML-like syntax extension to ECMAScript.
// JSX (JavaScript XML) is a syntax extension for JavaScrip. It allows you to write HTML-like syntax within JavaScript code

// Basic Concepts of JSX
// Embedding Expressions: You can embed any JavaScript expression in JSX by wrapping it in curly braces {}.

// JSX Elements: These are similar to HTML elements but are used to describe what the UI should look like in a React component.

// Attributes: JSX attributes are similar to HTML attributes but follow camelCase naming conventions (e.g., className instead of class, onClick instead of onclick).

// Components: JSX allows you to use React components as if they were HTML elements.


// JSX Syntax
const element = <h1>Hello, world!</h1>;
// Embedding JavaScript Expressions
// You can embed JavaScript expressions in JSX using curly braces {}:
const name = 'John';
const element1 = <h1>Hello, {name}!</h1>;


// Rendering Elements
// To render a JSX element to the DOM, you use the ReactDOM.render method:
import React from 'react';
import ReactDOM from 'react-dom';

const element2 = <h1>Hello, world!</h1>;
ReactDOM.render(element2, document.getElementById('root'));

