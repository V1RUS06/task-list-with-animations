import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';

const HeadlessCheck = ({isHeadless}) => {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }

  return <App />;
};

AppRegistry.registerComponent(appName, () => HeadlessCheck);
