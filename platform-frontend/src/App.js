import React, { Component } from 'react';

import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <footer className="app__footer">
          <h4>Pepe</h4>
        </footer>

        <style jsx>{`
          .app {
            display: grid;
            grid-template-rows: auto 1fr auto;
            height: 100vh;
          }

          .app__footer {
            display: grid;
            grid-template-columns: 200px 1fr 200px;
            background-color: #000;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
