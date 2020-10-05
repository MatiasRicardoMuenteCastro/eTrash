import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import UserMain from '../pages/users/main';


const AuthStack = createStackNavigator();

const AuthRoutes = () => {
	return (
		<AuthStack.Navigator>
			<AuthStack.Screen name="UserMain" component={UserMain} /> 	
		</AuthStack.Navigator>
	);

}


export default AuthRoutes;