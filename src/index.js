import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SinglePage from './SinglePage';
import { Helmet } from 'react-helmet';
import List from './List';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data';
import Top from './Top';
import './cute.css';
import Home from "./Home"
import About from './About';

import Footer from './Footer';
class App extends Component {
  render() {
    return (
      <Router>
        <Top />
        <div className="container-fluid">
          <Nav />
        </div>
        <div>
          <div className="container-fluid">
            <div className="row">
              <Route path="/"  component={Home} exact />
              <Route path="/home"  component={Home} exact />
              <Route path="/tour" component={List} exact />
              <Route path="/article" component={List} exact />
              <Route path="/article/:name" component={SinglePage} />  
              <Route path="/about" component={About} />
            </div>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
