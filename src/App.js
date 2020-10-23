import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import {Provider} from 'react-redux'
import store from './Store' 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Events from './components/events/Events';
import SearchRegion from './components/events/SearchRegion';
import AddEvent from './components/events/AddEvent';


class App extends Component {
  componentDidMount(){
    document.title = 'EventManager';

  }
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App" style={{color: "blue"}}>
          <Header branding="FindMyEvents" />
          <div className="container"  >
            <Switch>
              <Route exact path="/" component={SearchRegion} />
              <Route exact path="/events/:regionname" component={Events} />
              <Route exact path="/Event/add" component={AddEvent} />
              <Route exact path="/SearchEvent" component={SearchRegion} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
