import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Slider from '../pages/slider/index';
import SignOption from '../pages/signOption/index';
import ChooseUser from '../pages/chooseUser/index';
import SignIn from '../pages/signIn/index';
import SignUpPoints from '../pages/discardPoints/signUp';
import Address from '../pages/discardPoints/address';
import DiscardMain from '../pages/discardPoints/discards';
import SignUpCompany from '../pages/companies/signUp';
import SignUpUser from '../pages/users/signUp';
import UserEmail from '../pages/users/email';
import LoadingSignUp from '../pages/loadingPages/loadingSignUp';
import SwitchCollector from '../pages/companies/switchCollector';
import InvalidCnpj from '../pages/companies/invalidCnpj';
import DiscardCompany from '../pages/companies/discards';
import Avatar from '../pages/avatar-upload/index';
import UserTypeSignIn from '../pages/signIn/userTypeSignIn';


const NewUserStack = createStackNavigator();

const NewUserRoutes = () => {
	return(
		<NewUserStack.Navigator 
			headerMode="none"
			screenOptions = {{
			cardStyle: {
				backgroundColor: '#ffffff'
			}
			}} >
			<NewUserStack.Screen name="Slider" component={Slider} />
			<NewUserStack.Screen name="SignOption" component={SignOption} />
			<NewUserStack.Screen name="ChooseUser" component={ChooseUser} /> 
			<NewUserStack.Screen name="SignIn" component={SignIn} />
			<NewUserStack.Screen name="SignUpPoints" component={SignUpPoints} />
			<NewUserStack.Screen name="Address" component={Address} />
			<NewUserStack.Screen name="DiscardMain" component={DiscardMain} />
			<NewUserStack.Screen name="SignUpCompany" component={SignUpCompany} />
			<NewUserStack.Screen name="SignUpUser" component={SignUpUser} />
			<NewUserStack.Screen name="UserEmail" component={UserEmail} />
			<NewUserStack.Screen name="LoadingSignUp" component={LoadingSignUp} />
			<NewUserStack.Screen name="SwitchCollector" component={SwitchCollector} />
			<NewUserStack.Screen name="InvalidCnpj" component={InvalidCnpj} />
			<NewUserStack.Screen name="DiscardCompany" component={DiscardCompany} />
			<NewUserStack.Screen name="Avatar" component={Avatar} />
			<NewUserStack.Screen name="UserTypeSignIn" component={UserTypeSignIn} />
		</NewUserStack.Navigator>
	);
}


export default NewUserRoutes;