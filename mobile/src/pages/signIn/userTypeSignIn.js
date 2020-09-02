import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';


const UserTypeSignIn = () => {
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="white"  barStyle="dark-content" /> 
			<View style={styles.imageView}>
				<Image source={require('../../assets/pictures/trash.png')}
					style={styles.image}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageView: {
		width: 400,
		height: 400,
		borderRadius: 500,
		backgroundColor: '#38c172',
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		width: 350,
		height: 350,
		borderWidth: 2,
		borderRadius: 1000,
		overflow: 'hidden'
		
	}
});

export default UserTypeSignIn;