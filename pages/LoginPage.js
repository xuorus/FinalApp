import React from 'react';
import { TouchableOpacity, View, Image, Text, Alert, TextInput, StyleSheet } from 'react-native';
import MainStyles from '../components/config/styles';


const LoginPage = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    return (
    <View style={MainStyles.container}>
      <Image style={MainStyles.logo} source={require('../assets/JMGH4wX.png')} />
      <Text style={styles.textTitle}>Welcome Back!</Text>
      <TextInput style={MainStyles.input} 
      placeholder="Email" onChangeText={setEmail} />
      <TextInput style={MainStyles.input} 
      placeholder="Password" onChangeText={setPassword} secureTextEntry />
      
      <TouchableOpacity style={MainStyles.buttonvis} 
      onPress={() => {navigation.navigate('Home'); Alert.alert('Successfully logged in!') }} >
        <Text style={MainStyles.textColor}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={MainStyles.buttoninvis} 
      onPress={() => navigation.navigate('Register')} >
        <Text>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={MainStyles.buttoninvis} 
      onPress={() => navigation.navigate('AccountRecovery')} >
        <Text>RECOVER ACCOUNT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={MainStyles.buttoninvis} 
      onPress={() => navigation.navigate('Landing')} >
        <Text>BACK TO MAIN</Text>
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

export default LoginPage;
