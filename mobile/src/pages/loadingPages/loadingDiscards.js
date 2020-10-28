import React, { useEffect, useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';

import AuthContext from '../../context/authContext';

import { useRoute } from '@react-navigation/native'; 

import api from '../../services/api';

import AsyncStorage from '@react-native-community/async-storage';


const LoadingDiscards = () => {

	const route = useRoute();

	const { signUpUser, signUpCompany, signUpPoint } = useContext(AuthContext);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const uploadDiscardsNewUser = async () => {
			const userType = route.params.user;

			try {


				if (userType == 'company') {

					const userId = await AsyncStorage.getItem('@id');
					const userToken = await AsyncStorage.getItem('@token');

					discards = { discards: route.params.discards  }

					const response = await api.put('/discarts/company/update', discards,  {
						headers: {
							authorization: userId,
							authentication: `Bearer ${userToken}`
						}

					});

					signUpCompany();

				}

				if (userType == 'user') {

					const userId = await AsyncStorage.getItem('@id');
					const userToken = await AsyncStorage.getItem('@token');
			
					discards = { discards: route.params.discards  }

					const response = await api.put('/discarts/user/update', discards, {
						headers: {
							authorization: userId,
							authentication: `Bearer ${userToken}`
						}
					});

					signUpUser();

				}
				if (userType == 'point') {

					const userId = await AsyncStorage.getItem('@id');
					const userToken = await AsyncStorage.getItem('@token');
					

					discards = { discards: route.params.discards  }

					const response = await api.put('/discarts/point/update', discards, {
						headers: {
							authorization: userId,
							authentication:`Bearer ${userToken}`
						}
					});
					
					signUpPoint();
				}

			}
			
			catch(error){
				console.log(error.response.data);
			}


		}

		uploadDiscardsNewUser();
	}, []);

	const renderLoading = () => {
		while(loading){
			return (
				<>
				<LottieView source={require('../../assets/animations/robot.json')} autoPlay loop />
				<Text style={styles.loadingtext}>Carregando...</Text>
				</>
			);

		}
	}

	return (
		<View style={styles.container}>
		{renderLoading()}
		</View>
	);
} 

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	loadingtext: {
		fontSize: 18,
		fontFamily: 'Roboto-Bold',
		color: '#38c172',
		marginTop: 230
	}
});

export default LoadingDiscards;