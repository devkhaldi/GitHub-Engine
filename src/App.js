import React from 'react';
import './App.css';
import Users from './components/users/Users';
import Navbar from './components/layouts/Navbar';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import UserItem from './components/users/UserItem';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container mt-3">
          <Switch>
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:login" component={UserItem} />
            <Route exact component={Users} />
            <Users />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
