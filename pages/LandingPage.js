import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text } from 'react-native';
import MainStyles from '../components/config/styles';


const LandingPage = ({ navigation }) => {
    return (
    <View style={MainStyles.container}>
      <Image style={MainStyles.logo} source={require('../assets/JMGH4wX.png')} />
      <Text style={styles.textTitle}>Alpha</Text>
      <Text style={styles.textBody}>The easiest way to start up your day.</Text>
      
      <TouchableOpacity style={MainStyles.buttonvis} 
      onPress={() => navigation.navigate('Login')}>
        <Text style={MainStyles.textColor}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={MainStyles.buttoninvis} 
      onPress={() => navigation.navigate('Register')}>
        <Text>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle:{
    fontSize: 28,
    fontWeight: '800',
    color: '#1e90ff',
    textAlign: 'center',
    marginBottom: 10,
  },
  textBody:{
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default LandingPage;
