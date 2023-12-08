import React from 'react';
import { View, Image, Text, StyleSheet, ToastAndroid, Touchable } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from "yup";
import fetchServices from "../components/config/fetchServices";
import MainStyles from '../components/config/styles';


const LoginPage = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPass, setShowPass] = React.useState('');

    const showToast = (message = "Something wen't wrong") => {
      ToastAndroid.show(message, 3000);
    };

    const handleLogin = async (values) => {
      try { 
        const url = "http://192.168.1.34/api/v1/login";
        const result = await fetchServices.postData(url, values);
  
        if (result.message != null) {
          showToast(result?.message);
        } else {
          navigation.navigate("Landing");
        }
      } catch (e) {
        console.debug(e.toString());
      }
    };
  
    const validationSchema = Yup.object().shape({
      email: Yup.string()
        .email("Invalid Email")
        .required("Please enter your email"),
      password: Yup.string().required("Please enter your password"),
    });

    return (
    <Formik
    initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        await handleLogin(values);
      }}
      validationSchema={validationSchema}
      >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
        setTouched,
      }) => {
        return (
          <View style={MainStyles.container}>
            <Image style={MainStyles.logo} source={require('../assets/JMGH4wX.png')} />
            <Text style={styles.textTitle}>Welcome Back!</Text>
            <TextInput
            mode="outlined"
              placeholder="Email"
              label="Email"
              style={{ marginTop: 10 }}
              defaultValue={values.email}
              value={values.email}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email && touched.email}
              onFocus={() => setTouched({ email: true }, false)}
            />
            {errors.email && touched.email && (
              <HelperText type="error" visible={errors.email}>
                {errors.email}
              </HelperText>
            )}
            <TextInput
              mode="outlined"
              placeholder="Password"
              label="Password"
              secureTextEntry={!showPass}
              right={
                <TextInput.Icon
                  icon={showPass ? "eye" : "eye-off"}
                  onPress={() => setShowPass(!showPass)}
                />}
              style={{ marginTop: 10 }}
              value={values.password}
              onChangeText={handleChange("setPassword")}
              onBlur={handleBlur("setPassword")}
              error={errors.password && touched.password}
              onFocus={() => setTouched({ password: true }, false)}
            />
            {errors.password && touched.password && (
              <HelperText type="error" visible={errors.password}>
                {errors.password}
              </HelperText>
            )}
            <Button
              loading={isSubmitting}
              disabled={isSubmitting}
              onPress={handleSubmit}
              mode="contained"
              style={{ marginTop: 30 }}
            >
              LOGIN
            </Button>
            <Button
              disabled={isSubmitting}
              onPress={() => navigation.navigate('Register')}
              mode="contained-tonal"
              style={{ marginTop: 10 }}
            >
              SIGN UP
            </Button>
            <Button
              disabled={isSubmitting}
              onPress={() => navigation.navigate('AccountRecovery')}
              mode="contained-tonal"
              style={{ marginTop: 10 }}
            >
              RECOVER ACCOUNT
            </Button>
            <Button
              disabled={isSubmitting}
              onPress={() => navigation.navigate('Landing')}
              mode="text"
              style={{ marginTop: 10 }}
            >
              BACK TO MAIN
            </Button>





          </View>
        )
      }}
    </Formik>
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