import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
import MainStyles from '../components/config/styles';
import { Button } from 'react-native-paper';

const HomePage = ({ navigation }) => {
  return (
    <View style={MainStyles.container}>
      <Image style={MainStyles.logo} source={require('../assets/JMGH4wX.png')} />
      <Text style={styles.textTitle}>Let's Start</Text>
      <Text style={styles.textBody}>Welcome to your personal space.</Text>
      <Button
      onPress={() => navigation.navigate('Landing')}
      mode='contained'
      style={{ marginTop: 10 }}
      >
      LOGOUT
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

export default HomePage;
