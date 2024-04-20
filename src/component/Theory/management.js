// ----------------------------What is context?------------------
// Context provides a way to pass data through the component tree without having to pass props down manually at every level.

// For example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components.

// const { Provider, Consumer } = React.createContext(defaultValue);