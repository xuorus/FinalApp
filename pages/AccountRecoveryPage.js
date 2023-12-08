import React from 'react';
import { TouchableOpacity,  View, Image, Text, Alert, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import MainStyles from '../components/config/styles';


const AccountRecoveryPage = ({ navigation }) => {
    const [email, setEmail] = React.useState('');

    return (
    <View style={MainStyles.container}>
      <Image style={MainStyles.logo} source={require('../assets/JMGH4wX.png')} />
      <Text style={styles.textTitle}>Restore Password</Text>
      <TextInput style={{ marginTop: 10 }}  
      mode="outlined"
      placeholder="Email" onChangeText={setEmail} />
      
      <Button
      onPress={() => {navigation.navigate('Login'); Alert.alert('Account recovery successful!') }}
      mode='contained'
      style={{ marginTop: 10 }}
      >
      SEND RESET CODE
      </Button>
      <Button
      onPress={() => navigation.navigate('Login')}
      mode='text'
      style={{ marginTop: 10 }}
      >
      BACK TO LOGIN
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
    marginBottom: 25,
},
});

export default AccountRecoveryPage;
