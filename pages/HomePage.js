import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
import MainStyles from '../components/config/styles';

const HomePage = ({ navigation }) => {
  return (
    <View style={MainStyles.container}>
      <Image style={MainStyles.logo} source={require('../assets/JMGH4wX.png')} />
      <Text style={styles.textTitle}>Let's Start</Text>
      <Text style={styles.textBody}>Welcome to your personal space.</Text>
      <TouchableOpacity style={MainStyles.buttonvis} 
      onPress={() => navigation.navigate('Landing')} >
        <Text style={MainStyles.textColor}>LOGOUT</Text>
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

export default HomePage;
