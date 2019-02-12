import React from 'react';
import { StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';

export default class Profile extends React.Component {

    _onSIGNINPressed() {
        this.props.navigation.openDrawer();
    }
    
    render() {

        return (
            <SafeAreaView>
                <ImageBackground source={require('../../resources/Tabbar/circlebg.png')} style={{ width: '100%', height: '100%' }}>
                    <TouchableOpacity onPress={() => this._onSIGNINPressed()}>
                        <Image style={styles.backButton} source={require('../../resources/Tabbar/menu.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textBold}>Profile</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.subcontainer}>
                            <View style={styles.container}>
                                <Image style={styles.imageLogo} source={require('../../resources/profilepic.png')} />
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Edit')}>
                                    <Image style={styles.editImage} source={require('../../resources/editProfile.png')} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.textTitle2}>Name</Text>
                            <TextInput style={styles.textInputPlaceholder} placeholderTextColor="#333333" editable={false} value="Anil Kumar" underlineColorAndroid="transparent" />
                            <View style={styles.horizontalLine}></View>

                            <Text style={styles.textTitle}>Email</Text>
                            <TextInput style={styles.textInputPlaceholder} placeholderTextColor="#333333" editable={false} value="email@example.com" underlineColorAndroid="transparent" />
                            <View style={styles.horizontalLine}></View>

                            <Text style={styles.textTitle}>Phone</Text>
                            <TextInput style={styles.textInputPlaceholder} placeholderTextColor="#333333" editable={false} value="+91 7018252694" underlineColorAndroid="transparent" />
                            <View style={styles.horizontalLine}></View>

                            <Text style={styles.textTitle}>Location</Text>
                            <TextInput style={styles.textInputPlaceholder} placeholderTextColor="#333333" editable={false} value="Gurgaon" underlineColorAndroid="transparent" />
                            <View style={styles.horizontalLine}></View>

                            <Text style={styles.textTitle}>Bio</Text>
                            <TextInput style={styles.textBio} placeholderTextColor="#333333" underlineColorAndroid="transparent" />

                        </View>

                        <View style={styles.subSubcontainer}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Contact')}>
                                <Text style={styles.textSubTitle}>Contact Info</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.subSubcontainer}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Paypal')}>
                                <Text style={styles.textSubTitle}>PayPal Info</Text>
                            </TouchableOpacity>
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
        flexDirection: 'row',
    },
    textBold: {
        marginTop: 0,
        margin: 20,
        textAlign: 'left',
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
    },
    subSubcontainer: {
        marginTop: 0,
        margin: 10,
        borderWidth: 1,
        borderColor: 'gray',
        height: 70,
        backgroundColor: 'white',
    },
    subcontainer: {
        marginTop: 80,
        margin: 10,
        borderWidth: 1,
        borderColor: 'gray',
        height: '72%',
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
        height: 30,
        width: 30,
        margin: -30,
        textAlign: 'right',
        marginTop: -60,
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
        width: 35,
        textAlign: 'left',
        resizeMode: 'stretch',
    },
})