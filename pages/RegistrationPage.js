import React from 'react';
import { TouchableOpacity, Text, TextInput, View, Image, Alert, StyleSheet } from 'react-native';
import MainStyles from '../components/config/styles';


const RegistrationPage = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
    <View style={MainStyles.container}>
      <Image style={MainStyles.logo} source={require('../assets/JMGH4wX.png')} />
      <Text style={styles.textTitle}>Create Account</Text>
      <TextInput style={MainStyles.input} 
      placeholder="Name" onChangeText={setName} />
      <TextInput style={MainStyles.input} 
      placeholder="Email" onChangeText={setEmail} />
      <TextInput style={MainStyles.input} 
      placeholder="Password" onChangeText={setPassword} secureTextEntry />
      
      <TouchableOpacity style={MainStyles.buttonvis} 
      onPress={() => {navigation.navigate('Home'); Alert.alert('Successfully registered!') }} >
        <Text style={MainStyles.textColor}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={MainStyles.buttoninvis} 
      onPress={() => navigation.navigate('Login')} >
        <Text>GO TO LOGIN</Text>
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

export default RegistrationPage;
