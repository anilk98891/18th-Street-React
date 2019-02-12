import React from 'react';
import { StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default class Forgot extends React.Component {

    _onSIGNINPressed() {
        this.props.navigation.pop()
    }

    render() {

        return (
            <ImageBackground source={require('../../resources/bg.png')} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this._onSIGNINPressed()}>
                        <Image style={styles.backButton} source={require('../../resources/backarrow.png')} />
                    </TouchableOpacity>
                    <View style={styles.titleBelow}>
                        <Image style={styles.imageLogo}
                            source={require('../../resources/forgot.png')}
                        />
                    </View>

                    <View style={styles.viewBelow}>
                        <Text style={styles.textItem}>Forgot Password</Text>
                        <Text style={styles.textTitlePassword}>Enter your email address and {"\n"} we'll send you a link to reset</Text>
                    </View>

                    <TextInput style={styles.textTitle} placeholderTextColor="#333333" placeholder="email@example.com" underlineColorAndroid="transparent" />
                    <View style={styles.horizontalLine}></View>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this._onSignInPressed}>
                        <Text style={styles.titleButton}>Send</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backButton: {
        marginTop: 40,
        margin: 20,
        height: 25,
        width: 35,
        textAlign: 'left',
        resizeMode: 'stretch',
    },
    textTitle: {
        marginTop: 20,
        margin: 20,
        textAlign: 'left',
        fontSize: 18,
        color: "#737373",
    },
    textTitlePassword: {
        marginTop: 10,
        fontSize: 14,
        color: "#737373",
        textAlign: 'center',
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
        marginTop: 0,
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
    textItem: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
        fontWeight: '500',

    },
    titleBelow: {
        height: '21%',
        marginTop: 50,
        textAlign: 'center',
        color: '#737373',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    viewBelow: {
        marginTop: 20,
        textAlign: 'center',
        color: '#737373',
        justifyContent: 'center',
    },
    imageLogo: {
        height: '100%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});