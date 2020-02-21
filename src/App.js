import React from 'react';
import { observer, inject } from 'mobx-react'
import { Route, Switch }  from 'react-router-dom'
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Error from './pages/Error/Error';

@inject('apiStore')
@observer
class App extends React.Component {
  componentDidMount() {
    this.props.apiStore.fetchNearby();
  }

  render() {
    return (
      <>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route component={Error}/>
        </Switch>
      </>
    )
  }
}

export default App;
