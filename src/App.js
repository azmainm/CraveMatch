import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GameScreen from './components/GameScreen';
import DetailsScreen from './components/DetailsScreen';
import Landing from './components/Landing';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/GameScreen" component={GameScreen} />
        <Route path="/details" component={DetailsScreen} />
      </Switch>
    </Router>
  );
}

export default App;
