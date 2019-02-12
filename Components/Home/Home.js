import React from 'react';
import { StyleSheet, ImageBackground, View, Text, TextInput, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import CustomRow from '../CustomView/Eventrow';
import dataArray from '../Model/ArrayList'

const itemArray = [{
    key: 1, title: 'Mar \n 30',
    description: 'Local Photography \n Gurgaon',
    image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
  },
  {
    key: 2,
    title: 'Mar \n 31',
    description: 'Local Photography again \n Gurgaon ',
    image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
  },
  {
    key: 3, title: 'Mar \n 31',
    description: 'Local Photography again \n Yol cantt HP ',
    image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
  }];

export default class Home extends React.Component {

    _onSIGNINPressed() {
        this.props.navigation.openDrawer();
    }

    renderItem = ({ item }) => { return (<CustomRow
            title={item.title}
            description={item.description}
            image_url={item.image_url}
        />
    );
    };

    render() {

        return (
            <SafeAreaView>
                <ImageBackground source={require('../../resources/Tabbar/circlebg.png')} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => this._onSIGNINPressed()}>
                            <Image style={styles.backButton} source={require('../../resources/Tabbar/menu.png')} />
                        </TouchableOpacity>
                        <FlatList
                            data={itemArray}
                            renderItem={this.renderItem}
                        />
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
    backButton: {
        marginTop: 20,
        margin: 20,
        height: 25,
        width: 35,
        textAlign: 'left',
        resizeMode: 'stretch',
    },
})