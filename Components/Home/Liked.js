import React from 'react';
import { StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import EditProfile from '../Profile/EditProfile'

export default class Like extends React.Component {

    _onSIGNINPressed() {
        this.props.navigation.openDrawer();
    }

    render() {

        return (
            <SafeAreaView>
            <ImageBackground source={require('../../resources/Tabbar/circlebg.png')} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>
                <TouchableOpacity onPress={() => this._onSIGNINPressed()}>
                    <Image style={styles.backButton} source={require('../../resources/Tabbar/menu.png')} />
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
    },backButton: {
        marginTop: 20,
        margin: 20,
        height: 25,
        width: 35,
        textAlign: 'left',
        resizeMode: 'stretch',
    },
})