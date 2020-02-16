// Dependecies
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
import { CircularProgress } from '@material-ui/core';

// Language Import
import { IntlProvider } from 'react-intl';
import messages_ja from './translations/ja.json';
import messages_en from './translations/en.json';
const messages = {
  ja: messages_ja,
  en: messages_en
};
const language = navigator.language.split(/[-_]/)[0] === 'ja' ? 'ja' : 'en';

// Pages
const Home = React.lazy(() => import('./page/Home.js'));
const Signup = React.lazy(() => import('./page/Signup.js'));
const NavBar = React.lazy(() => import('./components/layout/NavBar.js'));

const App = () => {
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <ThemeProvider>
        <Router>
          <Suspense fallback={<CircularProgress />}>
            <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/signup' component={Signup} />
            </Switch>
          </Suspense>
        </Router>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
