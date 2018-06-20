import React, { Component } from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
import Navigation from 'components/Navigation';
import { Provider } from 'react-redux';
import reducer from 'reducers';
import { getAccessTokenFromUrl, storeSessionToken, getAuthUrl } from 'adapters';
import { saveState } from './utils/localStorage';
import StaticJSONFileDatabase from 'utils/fileStorage';
import { Loader, Wrapper, Container } from 'styled';
import GlobalStyles from 'styled/components/Base';
import sagas from 'sagas';
import { Router } from '@reach/router';
import Dashboard from 'routes/dashboard';
import LandingScreen from 'routes/landing';
import Project from 'routes/project';
import Patterns from 'routes/patterns';

const sagaMiddleware = createSagaMiddleware();

const PRE_PROD = process.env.NODE_ENV === 'development';

let enhancer = compose(applyMiddleware(sagaMiddleware));

if (PRE_PROD) {
  enhancer = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

const Layout = ({ children }) => (
  <Container>
    <Navigation />
    {children}
  </Container>
);

class App extends Component {
  constructor() {
    super();
    this.state = { store: null };
  }
  componentDidMount() {
    const token = getAccessTokenFromUrl();

    window.loginDB = function() {
      window.location.href = getAuthUrl();
    };

    if (token) storeSessionToken(token);

    StaticJSONFileDatabase.hydrateStoreFromFileDatabase().then(data => {
      const store = createStore(reducer, data, enhancer);
      sagaMiddleware.run(sagas);

      store.subscribe(() => {
        saveState(store.getState());
      });
      this.setState({ store });
    });
  }
  render() {
    GlobalStyles();
    const { store } = this.state;
    return store ? (
      <Provider store={store}>
        <Wrapper>
          <Router>
            <Layout path="/">
              <LandingScreen default />
              <Dashboard path="dashboard" />
              <Patterns path="patterns" />
              <Project path="project/:projectId/*" />
            </Layout>
          </Router>
        </Wrapper>
      </Provider>
    ) : (
      <Loader fullPage />
    );
  }
}

export default App;
