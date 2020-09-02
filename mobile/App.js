import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

import Routes from './src/routes/routes';

const App = () => {

	useEffect( async () => {
		await AsyncStorage.clear();
	}, []);


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