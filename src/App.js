import React from 'react';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* Sidebar */}
        {/* React-Router -> Chat screen */}
      </div>
    </div>
  );
};

export default App;
