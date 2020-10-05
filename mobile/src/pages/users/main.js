import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const UserMain = () => {
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
		fontSize: 20,
		fontFamily: 'Roboto-Bold',
		color: 'black'
	}
});




export default UserMain;