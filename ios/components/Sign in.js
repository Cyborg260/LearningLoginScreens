import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, { useState } from "react";

//First screen UI....(Sign in)
function SigninScreen({ navigation }) {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")

  //Validation with RegEx.........
  const checkvalidation = () => {

    const passwordlenght = /^.{8,16}$/;
    const passworduppercase = /^(?=.*[A-Z]).*$/;
    const passwordlowercase = /^(?=.*[a-z]).*$/;
    const passwordspecialcharc = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/

    //Username ........
    if (username == "") {
      Alert.alert("Please enter Username")
    }
    else if (username.length < 4) {
      Alert.alert("Username must contain more than four characters")
    }
    //Password .........
    else if (password == "") {
      Alert.alert("Please enter Password")
    }
    else if (!passwordlenght.test(password)) {
      Alert.alert("Password must be 8-16 Characters Long.")
    }
    else if (!passwordlowercase.test(password)) {
      Alert.alert("Password must have at least one Lowercase Character.")
    }
    else if (!passworduppercase.test(password)) {
      Alert.alert("Password must have at least one Uppercase Character.")
    }
    else if (!passwordspecialcharc.test(password)) {
      Alert.alert("Password must contain at least one Special Symbol")
    }
    else {
      return navigation.navigate('Sign up')
    }
    console.log(username, "", password);

  };

  //Main Body.............
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.text1}>
          Sign in
        </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder='Username'
        autoCapitalize="none"
        maxLength={15}
        autoCorrect={false}
        value={username}
        onChangeText={(text) => {
          setusername(text)
        }}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        value={password}
        maxLength={16}
        onChangeText={(text) => {
          setpassword(text)
        }}
      />
      <View>
        <TouchableOpacity
          title="Forgot password"
          onPress={() => navigation.navigate("Forgot password")}
          activeOpacity={0.85}
        >
          <Text style={{ marginTop: 10, fontSize: 18, textAlign: 'center' }}>
            Forgot password ?
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          title="Create an account"
          onPress={() => navigation.navigate("Sign up")}
          activeOpacity={0.85}
        >
          <Text style={{ marginTop: 340, fontSize: 18, textAlign: 'center' }}>
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.opacity}
          title="Sign in"
          activeOpacity={0.85}
          onPress={() => { checkvalidation() }}
        >
          <Text
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 18,
              marginTop: 15,
              color: 'white'
            }}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
  },

  text1: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 35,
    marginRight: 10

  },

  text2: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 80

  },

  text3: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 120

  },

  opacity: {
    alignItems: 'center',
    borderRadius: 30,
    width: 350,
    height: 50,
    backgroundColor: "#1e90ff",
    marginTop: 10
    // backgroundColor:"#faebd7"
  },

  input: {
    backgroundColor: 'white',
    fontSize: 18,
    width: 350,
    marginTop: 20,
    borderRadius: 30,
    textAlign: 'left',
    paddingLeft: 20
  },

  back: {
    marginTop: 10,
    width: 60,
    height: 30,
  },

  button: {
    marginBottom: 20
  },

  backopacity: {

  },

  tinylogo: {

  },

})



export default SigninScreen;