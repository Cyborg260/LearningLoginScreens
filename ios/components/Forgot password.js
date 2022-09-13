import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, { useState } from "react";



//Third Screen UI.....(Forgot password)
function ForgotpassScreen({ navigation }) {

  const [username, setusername] = useState("")
  console.log("")

  //Validation with RegEx.........
  const sendcode = () => {
    if (username == "") {
      Alert.alert("Please enter username.")
    }
    else if (username.length < 4) {
      Alert.alert("Username must contain more than four characters.")

    } else {
      Alert.alert(
        "Sending...",
        "Tap yes to Sign in",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "Yes",
            onPress: () => navigation.navigate("Sign in"),

          }
        ]
      );

    }
  }

  //Main Body.............
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginVertical: 20 }}>
        <View>
          <TouchableOpacity
            style={styles.backopacity}
            onPress={() => navigation.goBack()}
            activeOpacity={0.85}
          >
            <Image
              style={styles.tinylogo}
              source={require("./assets/icons8-back-30.png")}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text3}>
            Forgot password
          </Text>
        </View>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder='Username'
          maxLength={16}

          onChangeText={(text) => {
            setusername(text)
          }}
          value={username}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            borderRadius: 30,
            width: 350,
            height: 50,
            backgroundColor: "#1e90ff",
            marginTop: 470
          }}
          onPress={sendcode}
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
            Send code
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



export default ForgotpassScreen;