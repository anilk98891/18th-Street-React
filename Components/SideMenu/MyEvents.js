import React from 'react';
import { StyleSheet, ImageBackground, View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import CustomRow from '../CustomView/Eventrow';

const itemArray = []
export default class MyEvents extends React.Component {

    _onSIGNINPressed() {
        this.props.navigation.openDrawer();
    }
    
    showEmptyListView = () => {
        <View>
            // any activity indicator or error component
        </View>
    }

    renderItem = ({ item }) => { return (<CustomRow
        title={item.title}
        description={item.description}
        image_url={item.image_url}
    />
);};

    render() {

        return (
            <SafeAreaView>
                <ImageBackground source={require('../../resources/Tabbar/circlebg.png')} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => this._onSIGNINPressed()}>
                            <Image style={styles.backButton} source={require('../../resources/Tabbar/menu.png')} />
                        </TouchableOpacity>
                        <Text>{itemArray.length}</Text>
                        <FlatList
                            data={itemArray}
                            renderItem={this.renderItem}
                            ListEmptyComponent={this.showEmptyListView()}
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
    },backButton: {
        marginTop: 20,
        margin: 20,
        height: 25,
        width: 35,
        textAlign: 'left',
        resizeMode: 'stretch',
    },
})