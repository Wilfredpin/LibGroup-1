import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './UserContext';

function Main() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Main />
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
