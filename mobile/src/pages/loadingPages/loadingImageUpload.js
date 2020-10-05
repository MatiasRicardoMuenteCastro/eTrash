import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';

import api from '../../services/api';

import AsyncStorage from '@react-native-community/async-storage';

import { useNavigation, useRoute } from '@react-navigation/native';

import AuthContext from '../../context/authContext';


const LoadingImageUpload = () => {

	const route = useRoute();
	const navigation = useNavigation();

	const imageUpload = async () => {

		try { 


			const userId = await AsyncStorage.getItem('@id');
			const userToken = await AsyncStorage.getItem('@token');

			const formImage = new FormData();

			formImage.append('file', {
				name: route.params.imageName,
				fileSize: route.params.imageSize,
				uri: route.params.imageUri,
				type: route.params.imageType
			});

			if(route.params.user == 'user'){	

				const response = await api.post('/users/upload', formImage, {
					headers: {
						'authentication': `Bearer ${userToken}`,
						'authorization': userId,
						'Content-Type': 'multipart/form-data'
					}
				})

				navigation.navigate('DiscardMainUser');
				

			}

			if(route.params.user == 'company'){
				const response = await api.post('/companies/upload', formImage, {
					headers: {
						'authentication': `Bearer ${userToken}`,
						'authorization': userId,
						'Content-Type': 'multipart/form-data'
					}
				});
			}

		}catch(error){
			console.log(error.response.data);
		}
	}

	useEffect( async () => {
		await setTimeout(imageUpload, 1000);
	}, []);




	return (
		<View style={styles.container}>
			<StatusBar barStyle="dark-content" backgroundColor="white" />
			<ActivityIndicator color="#38c172" size="large" /> 
			<Text style={styles.awaitText}>Aguarde um pouco...</Text>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	awaitText: {
		color: '#38c172',
		fontSize: 15,
		fontFamily: 'Roboto-Bold',
		marginTop: 10
	}
});


export default LoadingImageUpload;