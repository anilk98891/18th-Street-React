import React from 'react';
import { StyleSheet, ImageBackground, View, Text, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native';

export default class SignUp extends React.Component {
  
    _onSIGNINPressed(){
      this.props.navigation.pop();
    }
  
    render() {
  
      return (
        <ImageBackground source={require('../../resources/bg.png')} style={{ width: '100%', height: '100%' }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <Text style={styles.textBold}>SIGN UP</Text>
              <Text style={styles.textTitle}>Name</Text>
              <TextInput style={styles.textInputPlaceholder} placeholderTextColor="#333333" placeholder="Name" underlineColorAndroid="transparent" />
              <View style={styles.horizontalLine}></View>
  
              <Text style={styles.textTitlePassword}>Email</Text>
              <TextInput style={styles.textInputPlaceholder} placeholderTextColor="#333333" placeholder="email@example.com" underlineColorAndroid="transparent" />
              <View style={styles.horizontalLine}></View>

              <Text style={styles.textTitlePassword}>Phone</Text>
              <TextInput style={styles.textInputPlaceholder} placeholderTextColor="#333333" placeholder="+91" underlineColorAndroid="transparent" />
              <View style={styles.horizontalLine}></View>

              <Text style={styles.textTitlePassword}>Password</Text>
              <TextInput style={styles.textInputPlaceholder} placeholderTextColor="#333333" placeholder="Password" underlineColorAndroid="transparent" />
              <View style={styles.horizontalLine}></View>

              <TouchableOpacity style={styles.buttonStyles} onPress={this._onSignInPressed}>
                <Text style={styles.titleButton}>Create an Account</Text>
              </TouchableOpacity>
  
              <View style={styles.titleBelow}>
                <Text style={styles.titleBelow}>Do not have an account? </Text>
                <Button style={styles.buttonCenter} color='#F46C08' title="Sign In" onPress={() => this._onSIGNINPressed()}/>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      );
    }
  };
  
  var styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageContainer: {
      flex: 1,
      resizeMode: 'stretch',
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
      marginTop: 10,
      margin: 20,
      textAlign: 'left',
      fontSize: 18,
      color: "#737373",
    },
    textInputPlaceholder: {
      marginTop: -10,
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