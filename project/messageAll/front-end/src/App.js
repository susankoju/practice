import React from 'react';

import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Message from './components/Message';
import Home from './components/Home';
import User from './components/User';
import Logout from './components/Logout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      err: ""
    }
  }


  render() {

    return (
      <Router>

        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/message" component={Message} />
          <Route path="/user" component={User} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }

  setPage = (page) => {
    
    if (this.state.page !== page) {
      
      this.setState({
        page: page
      });
    }
  }
}

export default App;