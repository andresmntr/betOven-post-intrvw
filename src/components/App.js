import React from 'react';
import Login from './pages/LoginPage/Login'
import {Home} from './pages/HomePage/Home'


const App = currentUser => {
    // pages that advisable without login
    if (!currentUser) {
      return (
        <Login/>
      );
    }
  
    // pages that required login
    return (
      <Home/>
    );
};

export default App;