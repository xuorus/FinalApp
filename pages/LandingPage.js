import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Button } from 'react-native-paper';
import MainStyles from '../components/config/styles';


const LandingPage = ({ navigation }) => {
    return (
    <View style={MainStyles.container}>
      <Image style={MainStyles.logo} source={require('../assets/JMGH4wX.png')} />
      <Text style={styles.textTitle}>Alpha</Text>
      <Text style={styles.textBody}>The easiest way to start up your day Welcome.</Text>
      
      <Button
      onPress={() => navigation.navigate('Login')}
        mode="contained"
        style={{ marginTop: 10 }}
      >
        LOGIN
      </Button>

      <Button
      onPress={() => navigation.navigate('Register')}
        mode="contained"
        style={{ marginTop: 10 }}
      >
        SIGN UP
      </Button>
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
