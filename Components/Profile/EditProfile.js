import React from 'react';
import { StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import PaypalScreen from '../Profile/EditProfile'
import ContactInfoScreen from '../Profile/EditProfile'

export default class EditProfile extends React.Component {

    _onPaypalPressed() {
        this.props.navigation.navigate('PaypalScreen')
    }
    _onContactInfoPressed() {
        this.props.navigation.pop()
    }

    _onSIGNINPressed() {
        this.props.navigation.pop()
    }

    render() {
        const { navigation } = this.props;
        const userdata = navigation.getParam('userdata', 'NO-ID');

        return (
            <SafeAreaView>
            <ImageBackground source={require('../../resources/Tabbar/circlebg.png')} style={{ width: '100%', height: '100%' }}>
                <TouchableOpacity onPress={() => this._onSIGNINPressed()}>
                    <Image style={styles.backButton} source={require('../../resources/Tabbar/crossback.png')} />
                </TouchableOpacity>
                <Text style={styles.textBold}>Edit Profile</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.subcontainer}>
                        <View style={styles.container}>
                            <Image style={styles.imageLogo} source={require('../../resources/profilepic.png')} />
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Edit')}>
                                <Image style={styles.editImage} source={require('../../resources/Tabbar/camera.png')} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.textTitle2}>Name</Text>
                        <TextInput style={styles.textInputPlaceholder} placeholderTextColor="#333333" value={userdata.first_name + " " + userdata.last_name} underlineColorAndroid="transparent" />
                        <View style={styles.horizontalLine}></View>

                        <Text style={styles.textTitle}>Email</Text>
                        <TextInput style={styles.textInputPlaceholder} placeholderTextColor="#333333" value={userdata.email} underlineColorAndroid="transparent" />
                        <View style={styles.horizontalLine}></View>

                        <Text style={styles.textTitle}>Phone</Text>
                        <TextInput style={styles.textInputPlaceholder} placeholderTextColor="#333333" value={userdata.mobile} underlineColorAndroid="transparent" />
                        <View style={styles.horizontalLine}></View>

                        <Text style={styles.textTitle}>Location</Text>
                        <TextInput style={styles.textInputPlaceholder} placeholderTextColor="#333333" value={userData.country} underlineColorAndroid="transparent" />
                        <View style={styles.horizontalLine}></View>

                        <Text style={styles.textTitle}>Bio</Text>
                        <TextInput style={styles.textBio} placeholderTextColor="#333333" underlineColorAndroid="transparent" />

                    </View>
                </ScrollView>
            </ImageBackground>
            </SafeAreaView>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBold: {
        marginTop: 0,
        margin: 20,
        textAlign: 'left',
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
    },
    subcontainer: {
        marginTop: 80,
        margin: 10,
        borderWidth: 1,
        borderColor: 'gray',
        height: '84%',
        backgroundColor: 'white',
    },
    textSubTitle: {
        marginTop: 25,
        margin: 20,
        textAlign: 'left',
        fontSize: 18,
        color: "#737373",
    }, textTitle2: {
        marginTop: -100,
        margin: 20,
        textAlign: 'left',
        fontSize: 18,
        color: "#737373",
    }, textTitle: {
        marginTop: 10,
        margin: 20,
        textAlign: 'left',
        fontSize: 18,
        color: "#737373",
    },
    textBio: {
        marginTop: 20,
        margin: 20,
        textAlign: 'left',
        fontSize: 18,
        color: "#737373",
        height: 40,
    },
    editImage: {
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -200,
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
    imageLogo: {
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -75,
        margin: "25%",
    },
    backButton: {
        marginTop: 20,
        margin: 20,
        height: 25,
        width: 25,
        textAlign: 'left',
        resizeMode: 'stretch',
    },
})