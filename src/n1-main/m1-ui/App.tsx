import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/*<Provider store={store}>*/}
        <HashRouter>
          {/*<Header/>*/}
          {/*<Main/>*/}
        </HashRouter>
      {/*</Provider>*/}
    </div>
  );
}

export default App;
