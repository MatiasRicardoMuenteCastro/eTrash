import React, { createContext, useState, useEffect } from 'react';

import api from '../services/api';

import ipApi from '../services/ip-api';

const AuthContext = createContext({ 
	signed: false, 
	signUpUser: '',
	signUpPoint: '',
	signUpCompany: '',
	getUserLocation: '', 
	country: '',
	city: '',
	region: '',
	latitude: 0,
	longitude: 0
  });


export const AuthProvider = ({children}) => {

	const [signed, setSigned] = useState(false);
	const [country, setCountry] = useState();
	const [city, setCity] = useState();
	const [region, setRegion] = useState();
	const [latitude, setLatitude] = useState();
	const [longitude, setLongitude] = useState();

	const signInUser = async (email, password) => {
		const response = await api.post('/session', {
			email: email,
			passwordInput: password
		})
		.then(function(response){
			console.log(response.data);
		})
		.catch(function(error){
			console.log(error);
		})

	}

	const signInCompany = async (email, password) => {
		const response = await api.post('/session/companies', {
			email: email,
			passwordInput: password
		})
		.then(function(response){
			console.log(response.data);
		})
		.catch(function(error){
			console.log(error);
		})
	} 

	const signInPoint = async (email, password) => {
		const response = await api.post('/session/points', {
			email: email,
			passwordInput: password
		})
		.then(function(response){
			console.log(response.data);
		})
		.catch(function(error){
			console.log(error);
		})
	}


	const signUpUser = () => {
		return setSigned(true);
	}

	const signUpPoint = () => {
		return setSigned(true);
	}
 
	const signUpCompany = () => {
		return setSigned(true);
	}

	const getUserLocation = async () => {
		const response = await ipApi.get('/json');
		setCountry(response.data.country);
		setCity(response.data.city);
		setRegion(response.data.region);
		setLatitude(response.data.lat);
		setLongitude(response.data.lon);
	} 



	return (
		<AuthContext.Provider value={{
			signed: signed,
			signUpUser: signUpUser,
			signUpPoint: signUpPoint,
			signUpCompany: signUpCompany,
			getUserLocation: getUserLocation,
			country: country,
			city: city,
			region: region,
			latitude: latitude,
			longitude: longitude
		}}>
			{children}
		</AuthContext.Provider>
	);

}


export default AuthContext;




