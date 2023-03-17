import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import codePush from 'react-native-code-push';
import Toast from 'react-native-toast-message';
import {
  FORCE_STAGING,
  PRODUCTION_DEPLOYMENT_KEY,
  STAGING_DEPLOYMENT_KEY,
} from './constants';
import MainRoute from './src/routes/MainRoute';
let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  // installMode: codePush.InstallMode.IMMEDIATE,
};

function App() {
  React.useEffect(() => {
    RNBootSplash.hide();

    const deploymentKey = STAGING_DEPLOYMENT_KEY || PRODUCTION_DEPLOYMENT_KEY;
    console.log(deploymentKey, 'sedddd');
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
      deploymentKey: STAGING_DEPLOYMENT_KEY || PRODUCTION_DEPLOYMENT_KEY,
    });
  }, []);

  React.useEffect(() => {
    console.log(FORCE_STAGING, 'force st');
    console.log(PRODUCTION_DEPLOYMENT_KEY, 'another');
    console.log(STAGING_DEPLOYMENT_KEY, 'keyyyy');
  }, []);
  return (
    <>
      <MainRoute />
      <Toast />
      {/* <LandingScreen/> */}
    </>
  );
}

export default codePush(codePushOptions)(App);
