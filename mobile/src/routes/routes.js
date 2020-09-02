import React, { useEffect, useState } from 'react';


import AppRoutes from './app-routes';
import NewUserRoutes from './new-user-routes';
import AsyncStorage from '@react-native-community/async-storage';

const Routes = () => {

	const [user, setUser] = useState();
  
	useEffect( async () => {
		const userStorage = await AsyncStorage.getItem('@user');
		setUser(userStorage);
	}, []);

	if(user != null){
		return <AppRoutes />
	}else{
		return <NewUserRoutes />
	}
}

export default Routes;