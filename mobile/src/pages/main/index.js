import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Main = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.mainTxt}>Main</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	mainTxt: {
		color: 'black',
		fontSize: 20,
		fontFamily: 'Roboto-Bold'
	}
});

export default Main;