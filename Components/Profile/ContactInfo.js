import React from 'react';
import { StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

export default class ContactInfo extends React.Component {
    _onUpdatePressed() {
        this.props.navigation.pop()
    }
    
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Image source={require('../../resources/Tabbar/backwhite.png')} style={{ width: 25, height: 25, margin: 15, overlayColor: '#000' }} />
                </TouchableOpacity>
            ),
            headerBackground: (
                <LinearGradient
                    colors={['#EF764B', '#F9843D']}
                    style={{ flex: 1 }}
                    start={[0, 0]}
                    end={[1, 0]}
                />),
            headerTitle: "Contact Info",
            headerTintColor: 'white',
        };
    };

    render() {

        return (
            <SafeAreaView>
                <ImageBackground source={require('../../resources/bg.png')} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.container}>
                        <View style={styles.titleBelow}>
                            <Text style={styles.textTitle}>Facebook profile link</Text>
                            <TextInput style={styles.textInputPlaceholder} placeholderTextColor="#333333" placeholder="https://facebook.com/username" underlineColorAndroid="transparent" />
                            <View style={styles.horizontalLine}></View>
                            <Text style={styles.textTitle}>Twitter profile link</Text>
                            <TextInput style={styles.textInputPlaceholder} placeholderTextColor="#333333" placeholder="https://twitter.com/username" underlineColorAndroid="transparent" />
                            <View style={styles.horizontalLine}></View>
                        </View>
                        <TouchableOpacity style={styles.buttonStyles} onPress={() => this._onUpdatePressed()}>
                         <Text style={styles.titleButton}>Update</Text>   
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleBelow: {
        height: 180,
        marginTop: 25,
        color: '#737373',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        margin: 20,
    },
    subSubcontainer: {
        marginTop: 60,
        margin: 10,
        borderWidth: 1,
        borderColor: 'gray',
        height: 100,
        backgroundColor: 'white',
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
        margin: 10,
        textAlign: 'left',
        fontSize: 18,
        color: "#737373",
    },
    textInputPlaceholder: {
        marginTop: 0,
        margin: 10,
        textAlign: 'left',
        fontSize: 18,
    },
    horizontalLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        margin: 15,
        marginTop: 0,
    },
    buttonCenter: {
        marginTop: 40,
        alignSelf: 'center',
        fontWeight: "bold",
    },
    buttonStyles: {
        alignItems: 'center',
        backgroundColor: '#F9843D',
        padding: 10,
        margin: 20,
        borderRadius: 5,
        height: 40,
        marginTop:30,
    },
    titleButton: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
    },
    viewBelow: {
        marginTop: 10,
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