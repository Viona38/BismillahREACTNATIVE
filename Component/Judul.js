import React, {Component} from 'react';
import {Text} from 'react-native';

import default class Judul extends React.Component{
	render(){
		return(
			<Text style= {style.judul}>{this.props.title}</Text>
		);
	}
}

const style = {
	judul: {
		color:'black',
		fontSize: 50,
		fontWeight: 'bold'
	}
}