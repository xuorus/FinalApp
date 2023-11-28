import React from 'react';
import { TouchableOpacity, TextInput, View, Image, Text, Alert, StyleSheet } from 'react-native';
import MainStyles from '../components/config/styles';


const AccountRecoveryPage = ({ navigation }) => {
    const [email, setEmail] = React.useState('');

    return (
    <View style={MainStyles.container}>
      <Image style={MainStyles.logo} source={require('../assets/JMGH4wX.png')} />
      <Text style={styles.textTitle}>Restore Password</Text>
      <TextInput style={MainStyles.input} placeholder="Email" onChangeText={setEmail} />
      
      <TouchableOpacity style={MainStyles.buttonvis} 
      onPress={() => {navigation.navigate('Login'); Alert.alert('Account recovery successful!') }} >
        <Text style={MainStyles.textColor}>SEND RESET CODE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={MainStyles.buttoninvis} 
      onPress={() => navigation.navigate('Login')} >
        <Text>BACK TO LOGIN</Text>
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
    marginBottom: 25,
},
});

export default AccountRecoveryPage;
