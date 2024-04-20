// 1 Mounting - when a instance of component is being created and inserted into DOM
//  In mounting phase there are four methods constructor, static, getDerivedStateFromProps, render and componentDidMount

// constructructor(props)
// 1. a special function that will get called whenever new component is created 
// 2. Initializing state binding the events handlers
// 3. Do not cause side effects. i.e HTTP request 
// 4. super(props) directly overwrites the this.state 

// getDerivedStateFromProps(props,state)
// 1. when the state of component depends on changes in props over time
// 2. set the state 
// 3. Do not cause side effects i.e HTTP requests

// render() 
// 1. only required methods
// 2. Read state and props and return jsx
// 3. Do not change state or interact with DOM or make ajx call 
// 4. children component lifecycle  methods are also executed

// componentDidMount()
// 1. invoked immediately after  component and all its children components have been rendered o the DOM 
// 2. Cause side effect . Ex. Interact with DOM or perform any ajax call to load data 









// ------------updating phase---------------------


// 2 Updating - when a component is being rerendered as a result of changes to either its props or state 
// In Updating phase, there are five methods such as getDerivedStateFromProps, shouldComponentUpdate,render, getSnapshortBeforeUpdate and componentDidUpdate

// static getDerivedStateFromProps(props,state)
// 1. method is called every time a component is rendered 
// 2. set a state 
// 3. do not cause side effect expect. http request 

// shouldComponentUpdate
// 1. dictates if the component should be re-rendered or not 
// 2. perfomance optimisation
// 3. do not cause side effect ex. http request calling the etstate method 


// render() 
// 1. only required method 
// 2. read props and states and return jsx
// 3. do not change the state or interact with DOM or make ajax call 

// getSnapshortBeforeUpdate(prevProps, preState)
// 1. call right before the changes from virtual DOM are to be eflected in the DOM 
// 2. capture some information from DOM 
// 3. method will either return null or return a value . return value will be passed as the parameter o the next method 

// componentDidUpdate(prevProps, preState,snapshot)
// 1. called after he render is finished in the re-rendered cycle 
// 2. cause side effect 









// 3 Unmounting - when a component is being removed from DOM
// In Unmounting phase, there is only one methods componentWillUnmount

// 4 Error Hnadling - when there is an error during rendering, in a lifecycle method, or in the constructor of any child component 
// In Error Handling phase there are two methods such as static getDerivedStateFromError and componentDidatch