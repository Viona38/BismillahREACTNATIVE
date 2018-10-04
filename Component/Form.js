import React from 'react';
import {   
  StyleSheet,Text, View,TextInput,TouchableOpacity
} from 'react-native';

export default class Logo extends React.Component {

	render() {
		return(
			<View style={styles.container}>
				<TextInput style={styles.inputBox} 
					underlineColorAndroid='rgba(0,0,0,0)' 
					placeholder="Email" 
					placeholderTextColor = "white"
					/>
				<TextInput style={styles.inputBox} 
					underlineColorAndroid='rgba(0,0,0,0)' 
					placeholder="Password" 
					secureTextEntry={true}
					placeholderTextColor = "white"
				/>

				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>{this.props.type}</Text>
				</TouchableOpacity>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container : {
		flexGrow: 1,
		justifyContent:'center',
		alignItems:'center'
	},

	inputBox: {
		width:300,
		backgroundColor:'rgba(255, 255, 255, 0.3)',
		borderRadius: 25,
		paddingHorizontal:16,
		fontSize:16,
		color:'white',
		marginVertical: 13
	},
	button: {
		width:300,
		backgroundColor:'#1c313a',
		borderRadius: 25,
		marginVertical: 10,
		paddingVertical: 12
	},
	buttonText: {
		fontSize:16,
		fontWeight:'500',
		color:'white',
		textAlign:'center'
	}
});