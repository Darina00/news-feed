import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import './App.css';
import PageReadNews from './components/pages/pageReadNews/PageReadNews';
import PageOneNews from './components/pages/pageOneNews/PageOneNews';
import PageLogin from './components/pages/pageLogin/PageLogin';
import { ProtectedRoute } from './components/protectedRouter/Router';
import PageProtectedNews from './components/pages/pageProtectedNews/PageProtectedNews';
import PageNotFound from './components/pages/pageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router history={createHistory()}>
        <Switch>
          <Route path='/' component={PageReadNews} exact />
          <Route path='/news/:idNews' component={PageOneNews} exact />
          <Route path='/login' component={PageLogin} exact />
          <ProtectedRoute path='/protected-news' component={PageProtectedNews} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
