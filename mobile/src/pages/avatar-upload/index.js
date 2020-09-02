import React, { useState, useEffect } from 'react';
import { View,  StyleSheet, Animated, Text, StatusBar, TouchableOpacity } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

import LottieView from 'lottie-react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'; 


const Avatar = () => {

	const navigation = useNavigation();
	const route = useRoute();

	const [AnimProgress] = useState(new Animated.Value(0));
	const [endAnim] = useState(new Animated.Value(1));
	const [hideAnim] = useState(new Animated.ValueXY({x: 0, y: 0}));
	const [displayHide, setDisplayHide] = useState({ display: 'flex' });
	const [displayAvatar, setDisplayAvatar] = useState({ display: 'none' });
	const [avatarViewOpacity] = useState(new Animated.Value(0));
	const [showAvatarView] = useState(new Animated.ValueXY({x: 0, y: 80}));

	useEffect(() => {
		Animated.timing(AnimProgress, {
			toValue: 1,
			duration: 3000,
			useNativeDriver: true
		}).start();
	}, []);

	function hideAnimation(){
		Animated.parallel([
			Animated.spring(hideAnim.y, {
				toValue: -180,
				speed: 4,
				useNativeDriver: true
			}),
			Animated.timing(endAnim, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true
			})
		]).start();
	}

	function AnimationAvatarView(){
		Animated.parallel([
			Animated.timing(avatarViewOpacity, {
				toValue: 1,
				duration: 300,
				useNativeDriver: true
			}),
			Animated.spring(showAvatarView.y, {
				toValue: 0,
				speed: 1,
				useNativeDriver: true
			})
		]).start();	
	}

	function hideWelcomeView(){
		setDisplayHide({ display: 'none' });
	}

	function showDisplayAvatar() {
		setDisplayAvatar({ display: 'flex' });
	}

	useEffect( async () => {
		try {
			await AsyncStorage.setItem('@user', route.params.user);
			await AsyncStorage.setItem('@id', route.params.id);
			await AsyncStorage.setItem('@token', route.params.token);
		}catch(e){
			console.log(e);
		}
	}, []);



	useEffect(() => {
		setTimeout(hideAnimation, 3000);
		setTimeout(hideWelcomeView, 3500);
		setTimeout(showDisplayAvatar, 3500);
		setTimeout(AnimationAvatarView, 3500);
	}, []);

	return(
		<View style={styles.container}>
			<StatusBar backgroundColor="#38c172" barStyle="light-content" />
			<Animated.View style={[styles.centerAnimation, displayHide, { opacity: endAnim, transform: [ { translateY: hideAnim.y } ] }]}>
				<LottieView style={styles.readyAnimation} progress={AnimProgress} source={require('../../assets/animations/ready.json')} />
				<Text style={styles.welcome}>{route.params.welcome}</Text>
			</Animated.View>

			<Animated.View style={[styles.uploadView, displayAvatar, { opacity: avatarViewOpacity, transform: [{ translateY: showAvatarView.y }] }]}>
				<Text style={styles.uploadText}>Adicione um Avatar</Text>
				<TouchableOpacity style={styles.uploadButton} onPress={() => {}}>
					<FontAwesomeIcon size={40} icon={ faCloudUploadAlt } style={styles.iconUpload} /> 
				</TouchableOpacity>

				<TouchableOpacity style={styles.addButton} onPress={() => {}}>
					<Text style={styles.addText}>Adicionar</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.skipButton} onPress={() => {}}>
					<Text style={styles.skipText}>Pular</Text>
				</TouchableOpacity>
			</Animated.View>
		</View>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#38c172'
	},
	centerAnimation: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent'
	},
	readyAnimation: {
		width: 100,
	},
	welcome: {
		color: 'white',
		fontFamily: 'Roboto-Bold',
		fontSize: 18,
		marginTop: 20
	},
	uploadView: {
		width: 300,
		height: 350,
		backgroundColor: 'white',
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	uploadText: {
		color: 'black',
		fontFamily: 'Roboto-Bold',
		fontSize: 20, 
		top: 0,
		position: 'absolute',
		marginTop: 40
	},
	uploadButton: {
		borderRadius: 100,
		width: 100, 
		height: 100,
		borderWidth: 2,
		borderColor: '#38c172',
		marginTop: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconUpload: {
		color: '#38c172'
	},
	addButton: {
		width: 100,
		height: 40,
		backgroundColor: '#38c172',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		marginTop: 30
	},
	addText: {
		color: 'white',
		fontSize: 15,
		fontFamily: 'Roboto-Bold'
	},
	skipButton: {
		width: 100,
		height: 40,
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
		bottom: 0,
		position: 'absolute',
		marginBottom: 10
	},
	skipText: {
		color: '#38c172',
		fontSize: 15,
		fontFamily: 'Roboto-Bold'
	}

});

export default Avatar;