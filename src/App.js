import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyles';
import QuickQuote from './pages/QuickQuote';
import QuickQuoteResult from './pages/QuickQuoteResult';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/result">
          <QuickQuoteResult />
        </Route>
        <Route path="/">
          <QuickQuote />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
