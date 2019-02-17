import React from 'react';
import { StyleSheet, ImageBackground, View, Text, ActivityIndicator, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import CustomRow from '../CustomView/Eventrow';
import dataArray from '../Model/ArrayList'
import YourRestApi from '../../ApiClass/RestClass'

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            airports: [{
                id: '',
                name: '',
                code: '',
                country: '',
                city: '',
                timezone: ''
            }]
        }
    }

    componentWillMount() {
        this.retrieveItem()
    }

    responseHandle(response) {
        this.setState({ isLoading: false, })
        if (response.responsecode == false) {
            Alert.alert(response.MessageWhatHappen)
        } else {
            this.setState({
                airports: response.airports
            });
            console.log(this.state.airports)
        }
    }

    retrieveItem() {
        this.setState({isLoading: true,})
        const api = new YourRestApi();
        api.getAirportData()
          .then(response =>  this.responseHandle(response))   // Successfully logged in
          .catch(err => alert(err.message));  // Catch any error
      };

    _onSIGNINPressed() {
        this.props.navigation.openDrawer();
    }

    renderItem = ({ item }) => { return (<CustomRow
            title={item.name}
            description={item.description}
            image_url={item.image_url}
        />
    );
    };

    render() {
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)',alignItems: 'center', justifyContent: 'center',}}>
                <ActivityIndicator/>
              </View>
            )
          }
        return (
            <SafeAreaView>
                <ImageBackground source={require('../../resources/Tabbar/circlebg.png')} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => this._onSIGNINPressed()}>
                            <Image style={styles.backButton} source={require('../../resources/Tabbar/menu.png')} />
                        </TouchableOpacity>
                        <FlatList
                            data={this.state.airports}
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