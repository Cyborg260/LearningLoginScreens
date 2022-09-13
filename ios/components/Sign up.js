import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, Alert, Keyboard, StyleSheet, LogBox } from 'react-native'
import React, { useState } from "react";

//Second screen UI.......(Sign up)
function SignupScreen({ navigation }) {

  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [phone, setphone] = useState('')

  // Validation with RegEx.........
  const checkEmailValidity = () => {

    const passwordlenght = /^.{8,16}$/;
    const passworduppercase = /^(?=.*[A-Z]).*$/;
    const passwordlowercase = /^(?=.*[a-z]).*$/;
    const passwordspecialcharc = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/
    const emailhandling = /\S+@\S+\.\S+/;
    const phoneNum = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;


    //Username ........
    if (username == "") {
      checkEmailValidity(false)
      //  Alert.alert("Please enter username.")
    }
    else if (username.length < 4) {
      checkEmailValidity(false)
      //  Alert.alert("Username must contain more than four characters.")
    }
    //Password .........
    else if (password == "") {
      Alert.alert("Please enter Password.")
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
    //Email .........
    else if (email == "") {
      Alert.alert("Please enter email address.")
    }
    else if (!emailhandling.test(email)) {
      Alert.alert("Email format is not valid.")
    }
    //Phone
    else if (phone == "") {
      Alert.alert("Please enter phone number.")
    }
    else if (!phoneNum.test(phone)) {
      Alert.alert("Phone number must contain 11 digits.")
    }

    else {
      return navigation.navigate('Forgot password')
    }

    console.log(username, "===", password, "===", email, "====", phone)

  };

  //Main Body.......
  return (
    <SafeAreaView style={styles.container}>

      <View style={{ width: "100%", marginTop: 20 }} >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.backopacity}
            onPress={() => navigation.goBack()}
            activeOpacity={0.85}
          >
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={styles.tinylogo}
                source={require("./assets/icons8-back-30.png")}
              />
              <Text style={{
                fontSize: 20,
                color: 'black'
              }}
              >
                Back
              </Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.text2}>
            Sign up
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={15}
          onChangeText={(text) => {
            setusername(text)
          }}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder='********'
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          maxLength={16}
          onChangeText={(text) => {
            setpassword(text)
          }}
          value={password}
        />
        <TextInput
          style={styles.input}
          placeholder='Jerry123@gmail.com'
          keyboardType="email-address"
          onChangeText={(text) => {
            setemail(text)
          }}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone ###'
          keyboardType="numeric"
          onChangeText={(text) => {
            setphone(text)
          }}
          value={phone}
        //  maxLength={11}
        />
      </View>
      <View>
        <TouchableOpacity
          title="Already member"
          onPress={() => navigation.navigate("Sign in")}
          activeOpacity={0.85}
        >
          <Text style={{
            marginTop: 240,
            fontSize: 18,
            textAlign: 'center',
          }}>
            Already a member ?
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.opacity}
          onPress={() => { checkEmailValidity() }}
          activeOpacity={0.85}
        >
          <Text
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 18,
              marginTop: 15,
              color: 'white'
            }}>
            Sign up
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



export default SignupScreen;