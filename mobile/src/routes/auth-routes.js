import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/main/index';


const AuthStack = createStackNavigator();

const AuthRoutes = () => {
	return (
		<AuthStack.Navigator>
			<AuthStack.Screen name="Main" component={Main} /> 	
		</AuthStack.Navigator>
	);

}


export default AuthRoutes;