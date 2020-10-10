import React from 'react';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Chat from './components/chat/chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>Home Screen</h1>
            </Route>
          </Switch>
          {/* React-Router -> Chat screen */}
        </div>
      </Router>
    </div>
  );
};

export default App;
