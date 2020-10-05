import React, { useState, useEffect, useRef } from 'react';
import { View, 
		 Text, 
		 StyleSheet, 
		 StatusBar, 
		 TouchableOpacity, 
		 Animated, 
		 TextInput} from 'react-native';
		 
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; 
import { faArrowLeft, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';


const SignIn = () => {

	const navigation = useNavigation();
	const route = useRoute();
	const input2 = useRef(null);

	const [containerOpacity] = useState(new Animated.Value(0));
	const [containerShow] = useState(new Animated.ValueXY({x: 0, y: 80}));

	const [email, setEmail] = useState();
	const [passwordInput, setPasswordInput] = useState();


	useEffect(() => {
		Animated.parallel([
			Animated.timing(containerOpacity, {
				toValue: 1,
				duration: 500,
				useNativeDriver: true
			}),
			Animated.spring(containerShow.y, {
				toValue: 0,
				speed: 1,
				useNativeDriver: true
			})
		]).start();
	}, []); 

	return (
		<Animated.View style={[styles.container, { opacity: containerOpacity, transform: [ { translateY: containerShow.y } ] }]}>
			<StatusBar backgroundColor="#38c172" barStyle="light-content"/> 
			<View style={styles.center}>
				<View style={styles.header}>	
					<Text style={styles.appName}>ETrash</Text>
					<TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
						<FontAwesomeIcon style={styles.backIcon} icon={ faArrowLeft } />
					</TouchableOpacity>
				</View> 
				<Text style={styles.title}> Seja Bem-Vindo(a) ao{'\n'} Descarte Inteligente e {'\n'} Sustentável</Text>
			</View>
			<View style={styles.footer}>
				<FontAwesomeIcon size={20} icon={ faEnvelope } style={styles.emailIcon} />
				<Text style={styles.emailLabel}>Email</Text>
				<TextInput 
					style={styles.emailInput}
					placeholder="Seu email"
					placeholderTextColor="#38c172"
					onChangeText={text => setEmail(text)}
					value={email}
					keyboardType={'email-address'}
					autoCorrect={false}
					autoCapitalize={'none'}
					onEndEditing={() => input2.current.focus()}
				/>	

				<FontAwesomeIcon size={20} icon={ faLock } style={styles.passwordIcon} />
				<Text style={styles.passwordLabel}>Senha</Text>
				<TextInput 
					style={styles.passwordInput}
					placeholder="Sua senha"
					placeholderTextColor="#38c172"
					onChangeText={text => setPasswordInput(text)}
					value={passwordInput}
					secureTextEntry={true}
					ref={input2}
				/>	

				<TouchableOpacity style={styles.entryButton} onPress={() => {
					if(email != null && passwordInput != null && email != "" && passwordInput != ""){
						navigation.navigate('UserTypeSignIn', {
							email: email,
							passwordInput: passwordInput,
							country: route.params.country,
							city: route.params.city,
							region: route.params.region,
							latitude: route.params.latitude,
							longitude: route.params.longitude 
						});
					}
				}}>
					<Text style={styles.entryText}>Entrar</Text>
				</TouchableOpacity>
			</View>
		</Animated.View>
	);
};


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#38c172'
	},
	header: {
		width: 400,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		top: 0,
		position: 'absolute',
		marginTop: 30, 
		backgroundColor: 'transparent'
	},
	appName: {
		color: 'white',
		fontFamily: 'Nerik-normal',
		fontSize: 20
	},
	backButton: {
		width: 90,
		height: 60,
		marginTop: 35,
		left: 0,
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center'
		
	},
	backIcon: {
		color: 'white',
		width: 200
	},
	center: {
		width: 360,
		height: 250,
		justifyContent: 'center',
		alignItems: 'center',
		top: 0,
		position: 'absolute',
		backgroundColor: '#38c172',
		

	},
	title: {
		color: 'white',
		fontSize: 25,
		fontFamily: 'Roboto-Bold',
		left: 0,
		position: 'absolute',
		marginLeft: 20,
		top: 0,
		marginTop: 100

	},
	footer: {
		width: 500,
		height: 410,
		bottom: 0,
		position: 'absolute',
		backgroundColor: 'white',
		borderTopLeftRadius: 300,
		justifyContent: 'center',
		alignItems: 'center'
	},
	emailInput: {
		width: 250,
		height: 50,
		borderWidth: 2,
		borderColor: '#38c172',
		borderRadius: 18,
		paddingLeft: 40,
		top: 0,
		position: 'absolute',
		marginTop: 120,
		color: '#38c172',
		fontFamily: 'Roboto-Bold'

	},
	emailLabel: {
		color: '#38c172',
		fontFamily: 'Roboto-Bold',
		fontSize: 15,
		marginBottom: 15,
		top: 0,
		left: 0,
		marginLeft: 135,
		position: 'absolute',
		marginTop: 90
	},
	emailIcon: {
		left: 0,
		marginLeft: 135,
		marginBottom: 255,
		bottom: 0,
		position: 'absolute',
		color: '#38c172'
	},
	entryButton: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#38c172',
		width: 200,
		height: 50,
		borderRadius: 25,
		bottom: 0,
		position: 'absolute',
		marginBottom: 20
	},
	entryText: {
		fontSize: 20,
		fontFamily: 'Roboto-Bold',
		color: 'white'
	},
	passwordInput: {
		width: 250,
		height: 50,
		borderWidth: 2,
		borderColor: '#38c172',
		borderRadius: 18,
		paddingLeft: 40,
		top: 0,
		position: 'absolute',
		marginTop: 220,
		color: '#38c172',
		fontFamily: 'Roboto-Bold'

	},
	passwordLabel: {
		color: '#38c172',
		fontFamily: 'Roboto-Bold',
		fontSize: 15,
		marginBottom: 15,
		top: 0,
		left: 0,
		marginLeft: 135,
		position: 'absolute',
		marginTop: 190
	},
	passwordIcon: {
		left: 0,
		marginLeft: 135,
		marginBottom: 155,
		bottom: 0,
		position: 'absolute',
		color: '#38c172'
	},
});

export default SignIn;