import React from 'react';
import {   
  StyleSheet,Text,View,Image
} from 'react-native';

export default class Logo extends React.Component {
	render() {
		return(
			<View style={styles.container}>
				<Image style={{width:60, height:60}}
					source={require('../Image/j.png')}/>
				<Text style={styles.logoText}>Welcome To My App </Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container : {
		flexGrow: 1,
		justifyContent:'flex-end',
		alignItems:'center'
	},
	logoText : {
		marginVertical: 15,
		fontSize:18,
		color:'rgba(255, 255, 255, 0.7)'
	}
});