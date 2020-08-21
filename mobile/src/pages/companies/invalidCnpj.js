import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, StatusBar, TextInput } from 'react-native';
import LottieView from 'lottie-react-native';

import { useNavigation, useRoute } from '@react-navigation/native';


const InvalidCnpj = () => {

	const navigation = useNavigation();
	const route = useRoute();

	const [showErrorMsg] = useState(new Animated.ValueXY({x: 0, y: 0}));
	const [errorMsgOpacity] = useState(new Animated.Value(1));
	const [animationProgress] = useState(new Animated.Value(0));
	const [inputViewDisplay, setViewDisplay] = useState({ display: 'none' });
	const [ContainerViewDisplay, setContainerDisplay] = useState({ display: 'flex' });
	const [showInputView] = useState(new Animated.ValueXY({x: 0, y: 80})); 
	const [inputViewOpacity] = useState(new Animated.Value(0));
	const [cnpj, setCnpj] = useState();

	const animation = () => {
		Animated.parallel([
			Animated.timing(errorMsgOpacity, {
				toValue: 0,
				duration: 500,
				useNativeDriver: true
			}),
			Animated.spring(showErrorMsg.y, {
				toValue: -150,
				speed: 1,
				useNativeDriver: true 
			}),
		]).start();
	}

	const setDisplayFlex = () => {
		 Animated.parallel([
			Animated.timing(inputViewOpacity, {
				toValue: 1,
				duration: 500,
				useNativeDriver: true
			}),
			Animated.spring(showInputView.y, {
				toValue: 0,
				speed: 1,
				useNativeDriver: true 
			}),
		]).start();
		setViewDisplay({ display: 'flex' });
	}

	const setDisplayNone = () => {
		return setContainerDisplay({ display: 'none' });
	}


	useEffect(() => {
		Animated.timing(animationProgress, {
			toValue: 1,
			duration: 2000,
			useNativeDriver: true
		}).start();
	}, []);


	useEffect(() => {
		setTimeout(animation, 2000);
		setTimeout(setDisplayNone, 2500);
		setTimeout(setDisplayFlex, 2500);
	}, []);


	return (
		<View style={styles.container}>
			<Animated.View style={[styles.animation, 
				{ opacity: errorMsgOpacity, transform: [ { translateY: showErrorMsg.y  } ] }, ContainerViewDisplay]}>
				<LottieView source={require('../../assets/animations/error.json')} 
				style={styles.errorAnimation}
				progress={animationProgress} /> 
				<Text style={styles.invalid}>{route.params.error}</Text>
			</Animated.View>
			<Animated.View style={[styles.inputView, inputViewDisplay, 
			{ opacity: inputViewOpacity, transform: [ {translateY: showInputView.y } ]}]}>
				<Text style={styles.inputLabel}>Insira um CNPJ válido</Text>
				<TextInput
					onChangeText={text => setCnpj(text)}
					value={cnpj}
					style={styles.cnpjInput}
					keyboardType={'numeric'}

				/>
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
	animation: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	invalid: {
		color: 'white',
		fontSize: 15,
		fontFamily: 'Roboto-Bold'
	},
	errorAnimation: {
		width: 80,
		height: 80,
		marginBottom: 20
	},
	inputView: {
		width: 300,
		height: 300,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20
	},
	inputLabel: {
		color: 'black',
		fontFamily: 'Roboto-Bold',
		fontSize: 15
	}
});

export default InvalidCnpj;