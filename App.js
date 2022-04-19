/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 console.disableYellowBox = true;
import React from 'react';

import {SafeAreaView, ScrollView, StyleSheet, View,Text} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import Signin from './src/components/Auth/Signin/Signin';
import SignupOne from './src/components/Auth/Signup/SignupOne';
import Signuptwo from './src/components/Auth/Signup/Signuptwo';
import Signupthree from './src/components/Auth/Signup/Signuptwo';
import ForgotPassword from './src/components/ForgotPassword/ForgotPassword';
// import SplashScreen from './src/components/Splash/SplashScreen';
import Onboarding1 from './src/components/Onboarding/Onboarding1';
import Questionaireone from './src/components/Questionaires/Questionaireone';
import Questionairetwo from './src/components/Questionaires/Questionairetwo';
import Questionairethree from './src/components/Questionaires/Questionairethree';
import Questionaireseven from './src/components/Questionaires/Questionaireseven';
import Questionairefour from './src/components/Questionaires/Questionairefour';
import Questionairefive from './src/components/Questionaires/Questionairefive';
import Questionairesix from './src/components/Questionaires/Questionairesix';
 import ResetPassword from './src/components/ForgotPassword/ResetPassword';
import Verification from './src/components/ForgotPassword/Verification';
import ContactUs from './src/components/Contact_Us/ContactUs';
import TermsCondition from './src/components/Terms&Condition/TermsCondition';
// import Navigation from './src/Navigation';
import Navigation from './src/Navigation';
import Onboarding from './src/components/Onboarding/Onboarding1';

const App = props => {
  return (
    <NativeBaseProvider>
      {/* <SplashScreen /> */}
      {/* <SignupOne /> */}
      {/* <Signuptwo /> */}
      {/* <Signupthree /> */}
      {/* <ForgotPassword /> */}
      {/* <Onboarding1/> */}
      <Navigation {...props}/>
       {/* <Signin /> */}
      {/* <Questionaireone/> */}
      {/* <Questionairetwo/> */}
      {/* <Questionairethree/> */}
      {/* <Questionaireseven /> */}
      {/* <Questionairefour/> */}
      {/* <Questionairefive/> */}
      {/* <Questionairesix/> */}
      {/* <ResetPassword/> */}
      {/* <Verification/> */}
      {/* <ContactUs/> */}
      {/* <TermsCondition/> */}
      {/* <Onboarding/> */}
      
    </NativeBaseProvider>
  );
};

export default App;
