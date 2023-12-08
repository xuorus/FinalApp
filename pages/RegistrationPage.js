import React from 'react';
import { Text, View, Image, Alert, StyleSheet } from 'react-native';
import { Button, TextInput} from 'react-native-paper';
import MainStyles from '../components/config/styles';


const RegistrationPage = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
    <View style={MainStyles.container}>
      <Image style={MainStyles.logo} source={require('../assets/JMGH4wX.png')} />
      <Text style={styles.textTitle}>Create Account</Text>
      <TextInput style={{ marginTop: 10 }}
      mode="outlined" 
      placeholder="Name" onChangeText={setName} />
      <TextInput style={{ marginTop: 10 }}
      mode="outlined" 
      placeholder="Email" onChangeText={setEmail} />
      <TextInput style={{ marginTop: 10 }} 
      mode="outlined"
      placeholder="Password" onChangeText={setPassword} secureTextEntry />
      
      <Button
      onPress={() => {navigation.navigate('Home'); 
      Alert.alert('Successfully registered!') }}
       mode="contained"
       style={{ marginTop: 10 }}>
       SIGN UP
      </Button>
      <Button 
      onPress={() => navigation.navigate('Login')}
      style={{ marginTop: 10 }}>
      GO TO LOGIN
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

export default RegistrationPage;
