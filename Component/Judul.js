import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends React.Component{
	render(){
		return(
			<Text style= {style.judul}>{this.props.title}</Text>
		)
	}
}

const style = {
	judul: {
		color:'black',
		fontSize: 30,
		fontWeight: 'bold'
	}
}

export default Judul;