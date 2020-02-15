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

const Home = React.lazy(() => import('./page/Home.js'));
const App = () => {
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <ThemeProvider>
        <Router>
          <Suspense fallback={<CircularProgress />}>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </Suspense>
        </Router>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
