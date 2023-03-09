import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import Toast from 'react-native-toast-message';
import MainRoute from './src/routes/MainRoute';
export default function App() {
  React.useEffect(() => {
    RNBootSplash.hide();
  }, []);
  return (
    <>
      <MainRoute />
      <Toast />
      {/* <LandingScreen/> */}
    </>
  );
}
