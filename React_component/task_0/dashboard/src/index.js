import React from 'react';
import App from './App/App';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// Hot Module Replacement (HMR) setup
if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept("./App/App", () => {
    const NextApp = require("./App/App").default;
    ReactDOM.render(
      <React.StrictMode>
        <NextApp />
      </React.StrictMode>,
      rootElement
    );
  });
}
