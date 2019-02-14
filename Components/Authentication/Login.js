import React from 'react';
import { StyleSheet, ImageBackground, Alert, View, Text, TextInput, AsyncStorage, Button, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';


// async function loginapi(query) {
// try {
// let response = await fetch(
// 'https://facebook.github.io/react-native/movies.json',{
// method: 'POST',
// headers: {
// Accept: 'application/json',
// 'Content-Type': 'application/json',
// },
// body: JSON.stringify({
// email: query["email"],
// password: query["password"],
// mobile: query["mobile"],
// country_code: +91,
// device_type: ios,
// push_token: 111111111,
// device_id: 000000
// }),
// }
// );
// let responseJson = await response.json();
// return responseJson;
// } catch (error) {
// console.error(error);
// return error
// }
// }

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      country_code: '+91',
      email: '',
      device_type: 'ios',
      push_token: '111111111',
      device_id: '000000'
    }
  }
  _onForgotPasswoordPressed(forgotRoute) {
    console.log('clicked')
    this.props.navigation.navigate('Forgot');
  }

  _onSignInPressed(nextRoute) {
    console.log(this.state)
    var data = {
      "email": this.state.email,
      "password": this.state.password,
      "country_code": this.state.country_code,
      "device_type": this.state.device_type,
      "push_token": this.state.push_token,
      "device_id": this.state.device_id
    }
    fetch("http://18.221.230.142/archer/api/v1_0/users/login", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if(data["responsecode"] == true) {
          AsyncStorage.setItem('userToken', responsecode["LoginResponse"]);
          this.props.navigation.navigate('Tabbar');
        } else {
          Alert.alert('Alert', data["MessageWhatHappen"], [{ text: 'Ok' }])
        }
      });

    // var resp = await this.loginapi(this.state)
    // if (resp.status == 200){
    // var respBody = await resp.json();
    // console.log('Fetch Todo response '+respBody);
    // }
    // AsyncStorage.setItem('userToken', 'abc');
    // this.props.navigation.navigate('Tabbar');
  }

  _onFaceBookPressed = () => {

  }

  _onGooglePressed = () => {

  }

  _onSIGNUPPressed(nextRoute) {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    const signupRoute = {
      component: 'SignUp',
      navigationBarHidden: true,
    };

    const forgotRoute = {
      component: 'Forgot',
      navigationBarHidden: true,
    };

    const homeRoute = {
      component: 'Tabbar',
      navigationBarHidden: true,
    };
    return (
      <SafeAreaView>
        <ImageBackground source={require('../../resources/bg.png')} style={{ width: '100%', height: '100%' }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <Text style={styles.textBold}>Sign In</Text>
              <Text style={styles.textTitle}>Email / Phone number</Text>
              <TextInput style={styles.textInputPlaceholder} placeholderTextColor="#333333" placeholder="email@example.com" underlineColorAndroid="transparent" onChangeText={(text) => this.state.email = text} />
              <View style={styles.horizontalLine}></View>

              <Text style={styles.textTitlePassword}>Password</Text>
              <TextInput style={styles.textInputPlaceholder} placeholderTextColor="#333333" placeholder="Password" underlineColorAndroid="transparent" onChangeText={(text) => this.state.password = text} />
              <View style={styles.horizontalLine}></View>

              <Button style={styles.buttonCenter} color='#F46C08' title="Forgot password" onPress={() => this._onForgotPasswoordPressed(forgotRoute)} />
              <TouchableOpacity style={styles.buttonStyles} onPress={() => this._onSignInPressed(homeRoute)}>
                <Text style={styles.titleButton}>Sign In</Text>
              </TouchableOpacity>
              <Text style={styles.titleBelow}>Or Sign in with</Text>

              <View style={styles.titleBelow}>
                <TouchableOpacity onPress={this._onFaceBookPressed}>
                  <Image style={styles.imageLogo}
                    source={require('../../resources/fb.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onGooglePressed}>
                  <Image style={styles.imageLogo}
                    source={require('../../resources/google.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.titleBelow}>
                <Text style={styles.titleBelow}>Do not have an account? </Text>
                <Button style={styles.buttonCenter} color='#F46C08' title="SIGN UP" onPress={() => this._onSIGNUPPressed(signupRoute)} />
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBold: {
    marginTop: 70,
    margin: 20,
    textAlign: 'left',
    fontSize: 26,
    color: "#333333",
    fontWeight: "normal",
  },
  textTitle: {
    marginTop: 10,
    margin: 20,
    textAlign: 'left',
    fontSize: 18,
    color: "#737373",
  },
  textTitlePassword: {
    marginTop: 20,
    margin: 20,
    textAlign: 'left',
    fontSize: 18,
    color: "#737373",
  },
  textInputPlaceholder: {
    marginTop: 0,
    margin: 20,
    textAlign: 'left',
    fontSize: 18,
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    margin: 20,
    marginTop: -4,
  },
  buttonCenter: {
    marginTop: 40,
    alignSelf: 'center',
    fontWeight: "bold",

  },
  buttonStyles: {
    alignItems: 'center',
    backgroundColor: '#F46C08',
    padding: 10,
    margin: 20,
    borderRadius: 5,

  },
  titleButton: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',

  },
  titleBelow: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 18,
    color: '#737373',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageLogo: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  }
});