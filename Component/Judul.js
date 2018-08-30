import React from 'react';
import {Text} from 'react-native';

export default class Judul extends React.Component{
	render(){
		return(
			<Text style={salon.judul}>Biodata</Text>
	
		)
	}
}

const salon = {
	judul: {
		color: "#7D1313",
		fontsize: 35,
		fontWeight: 'bold'
	}
}