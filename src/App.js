import React from 'react';
import { fetchNearby } from './store/actions';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './components/HomeScreen/HomeScreen';
import NavBar from './components/NavBar/NavBar';


const Error = () => 
  <div style={{
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    fontWeight: 700,
    textAlign: 'center',
    color: '#e6e6e6'}}>404<br/>Page Not Found</div>

class App extends React.Component {
  componentDidMount() {
    this.props.fetchNearby();
  }

  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={HomeScreen}/>
          <Route component={Error}/>
        </Switch>
      </Router>
    )
  }
}

export default connect(null, {fetchNearby})(App);
