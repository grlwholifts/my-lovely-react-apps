import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar"
import Post from "./components/Post";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
              <Navbar />
              <Route path='/' exact component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/:post_id' component={Post}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
