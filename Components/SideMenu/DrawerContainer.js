import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet, AsyncStorage, ImageBackground,Image, TouchableOpacity, ScrollView } from 'react-native'

export default class drawerContentComponents extends Component {

  navigateToScreen = (route) => (
    () => {
      const navigateAction = NavigationActions.navigate({
        routeName: route
      });
      this.props.navigation.dispatch(navigateAction);
    })

  navigationSignOut = () => {
    AsyncStorage.removeItem('userToken')
    this.props.navigation.navigate('Auth');
  }

  closeDrawer = () =>{
    this.props.navigation.closeDrawer()
  }

  render() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <ImageBackground source={require('../../resources/Tabbar/circlebg.png')} style={{ flex: 1, width: 280, justifyContent: 'center' } } >
            <Text style={styles.headerText} onPress={this.closeDrawer}>X</Text>
          </ImageBackground>
        </View>
        <View style={styles.screenContainer}>
          <View>
            <TouchableOpacity onPress={this.navigateToScreen('MyEvents')}>
              <View style={styles.screenStyle}>
                <Image source={require('../../resources/Sidemenu/myevent.png')} style={{ width: 30, margin: 5, height: 28,resizeMode: 'stretch', }} />
                <Text style={{margin: 5,fontSize: 18}}>My Events</Text>
              </View>
              <View style={styles.horizontalLine}></View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.navigateToScreen('Profile')}>
              <View style={styles.screenStyle}>
                <Image source={require('../../resources/Sidemenu/language.png')} style={{ width: 28, margin: 5, height: 25,resizeMode: 'stretch', }} />
                <Text style={{ margin: 5,fontSize: 18 }}>Select Language</Text>
              </View>
              <View style={styles.horizontalLine}></View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.navigateToScreen('Event')}>
              <View style={styles.screenStyle}>
                <Image source={require('../../resources/Sidemenu/order.png')} style={{ width: 30, margin: 5, height: 25, }} />
                <Text style={{margin: 5,fontSize: 18}}>Orders</Text>
              </View>
              <View style={styles.horizontalLine}></View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.navigateToScreen('Event')}>
              <View style={styles.screenStyle}>
                <Image source={require('../../resources/Sidemenu/checkin.png')} style={{ width: 30, margin: 5, height: 25, }} />
                <Text style={{margin: 5,fontSize: 18}}>Check-in</Text>
              </View>
              <View style={styles.horizontalLine}></View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.navigateToScreen('Event')}>
              <View style={styles.screenStyle}>
                <Image source={require('../../resources/Sidemenu/payment.png')} style={{ width: 30, margin: 5, height: 25, }} />
                <Text style={{margin: 5,fontSize: 18}}>Payment History</Text>
              </View>
              <View style={styles.horizontalLine}></View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.navigateToScreen('Event')}>
              <View style={styles.screenStyle}>
                <Image source={require('../../resources/Sidemenu/notification.png')} style={{ width: 28, margin: 5, height: 28,resizeMode: 'stretch', }} />
                <Text style={{margin: 5,fontSize: 18}}>Notifications</Text>
              </View>
              <View style={styles.horizontalLine}></View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.navigateToScreen('Event')}>
              <View style={styles.screenStyle}>
                <Image source={require('../../resources/Sidemenu/setting.png')} style={{ width: 30, margin: 5, height: 25, }} />
                <Text style={{margin: 5,fontSize: 18}}>Settings</Text>
              </View>
              <View style={styles.horizontalLine}></View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.navigationSignOut}>
              <View style={styles.screenStyle2}>
                <Text style={{margin: 15,fontSize: 18,marginLeft: 40 ,alignItems:'center'}}>Sign out</Text>
              </View>
              <View style={styles.horizontalLine}></View>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  headerContainer: {
    height: 150,
  },
  horizontalLine: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    margin: 2,
    height: 2,
    marginTop: -4,
  },
  headerText: {
    color: 'gray',
    fontSize:18,
    margin: 25,
    height: 30,
    width: 80,
    position: 'absolute',
    bottom:-40,
    alignItems:'flex-end',
  },
  screenContainer: {
    paddingTop: 20,
  },
  screenStyle: {
    margin: 4,
    height: 50,
    width: 278,
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  screenStyle2: {
    margin: 4,
    height: 50,
    width: 240,
    marginTop: 2,
    alignItems: 'flex-start',
  },
  screenTextStyle: {
    fontSize: 20,
    marginLeft: 20
  },

});