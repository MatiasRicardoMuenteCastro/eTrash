import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';


import Routes from './src/routes/routes';

const App = () => {
    return (
        <>
        <StatusBar backgroundColor="#ffffff" barStyle='dark-content' translucent /> 
        <NavigationContainer>
        	<Routes />
        </NavigationContainer>
        </>
     );
    
}

export default App;