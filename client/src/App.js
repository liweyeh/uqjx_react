// Dependecies
import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
import { CircularProgress } from '@material-ui/core';
// Context
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
// Language Import
import { IntlProvider } from 'react-intl';
import messages_ja from './translations/ja.json';
import messages_en from './translations/en.json';
const messages = {
  ja: messages_ja,
  en: messages_en,
};

// Pages
const Home = React.lazy(() => import('./page/Home.js'));
const Signup = React.lazy(() => import('./page/Signup.js'));
const NavBar = React.lazy(() => import('./components/layout/NavBar.js'));
const Intro = React.lazy(() => import('./page/IntroSelection.js'));
const About = React.lazy(() => import('./page/About.js'));
const Events = React.lazy(() => import('./page/Events.js'));
const Sponsors = React.lazy(() => import('./page/Sponsors.js'));

const App = () => {
  const [language, setLanguage] = useState(
    navigator.language.split(/[-_]/)[0] === 'ja' ? 'ja' : 'en'
  );
  return (
    <IntlProvider
      locale={language}
      key={language}
      messages={messages[language]}
    >
      <ThemeProvider>
        <AuthState>
          <AlertState>
            <Router>
              <Suspense fallback={<CircularProgress />}>
                <NavBar language={language} setLanguage={setLanguage} />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/signup' component={Signup} />
                  <Route exact path='/intro' component={Intro} />
                  <Route exact path='/intro/about' component={About} />
                  <Route exact path='/intro/event' component={Events} />
                  <Route exact path='/intro/sponsor' component={Sponsors} />
                </Switch>
              </Suspense>
            </Router>
          </AlertState>
        </AuthState>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
