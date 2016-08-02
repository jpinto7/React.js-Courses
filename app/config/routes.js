import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import PromptContainer from '../containers/PromptContainer';
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer';
import ResultsContainer from '../containers/ResultsContainer';

const App = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='playerOne' header='Player One' component={PromptContainer} />
      <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
      <Route path='battle' header='Confirm Battle' component={ConfirmBattleContainer} />
      <Route path='results' header='Results' component={ResultsContainer} />
    </Route>
  </Router>
 );

export default App;
