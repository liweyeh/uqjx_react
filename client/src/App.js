import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
import { CircularProgress } from '@material-ui/core';

const Home = React.lazy(() => import('./page/Home.js'));
const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<CircularProgress />}>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
