import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import {Header} from "./header/Header";
import {Routes} from "./routes/Routes";
import {store} from "../m2-bll/b1-srore/redux-store";

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <HashRouter>
          <Header/>
          <Routes/>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
