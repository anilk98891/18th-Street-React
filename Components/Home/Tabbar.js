import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import LikeScreen from './Liked';
import ProfileScreen from './Profile';
import HomeScreen from './Home';
import EventScreen from './Events'
import EditScreen from '../Profile/EditProfile'
import PaypalScreen from '../Profile/Paypal'
import ContactInfoScreen from '../Profile/ContactInfo'
import DrawerContainer from '../SideMenu/DrawerContainer'
import MyEventsScreen from '../SideMenu/MyEvents'

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null,
    }
  },
  Edit: {
    screen: EditScreen,
    navigationOptions: {
      headerStyle: { display: "none" },
      title: 'Home Profile',
      navigationBarHidden: true,
    },
  },
  Paypal: {
    screen: PaypalScreen,
    navigationOptions: {
      title: 'PayPal',
      navigationBarHidden: false,
    },
  },
  Contact: {
    screen: ContactInfoScreen,
  },
  MyEvents: {
    screen: MyEventsScreen,
    navigationBarHidden: true,
  }
});

//hide tabbar more than one screen
ProfileStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
}

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
      headerStyle: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        borderBottomWidth: 0
      },
      headerTitle: 'Hello World',
      headerTintColor: 'transparent'
    },
  }
});

const EventStack = createStackNavigator({
  Event: {
    screen: EventScreen,
    navigationOptions: {
      header: null,
    }
  }
});

const LikeStack = createStackNavigator({
  Like: {
    screen: LikeScreen, navigationOptions: {
      header: null,
    }
  },
});

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeStack },
  Event: { screen: EventStack },
  Like: { screen: LikeStack },
  Profile: { screen: ProfileStack },
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state;
      if (routeName === 'Home') {
        return {
          tabBarLabel: <View />,
          tabBarIcon: ({ focused, tintColor }) => (
            focused ? <Image
              source={require('../../resources/Tabbar/homeselected.png')}
              style={[styles.icon, { tintColor: tintColor }]}
            />
              :
              <Image
                source={require('../../resources/Tabbar/home.png')}
                style={[styles.icon, { tintColor: tintColor }]}
              />
          ),
        }
      }
      else if (routeName === 'Event') {
        return {
          tabBarLabel: <View />,
          tabBarIcon: ({ focused, tintColor }) => (
            focused ? <Image
              source={require('../../resources/Tabbar/events.png')}
              style={[styles.icon, { tintColor: tintColor }]}
            />
              :
              <Image
                source={require('../../resources/Tabbar/event.png')}
                style={[styles.icon, { tintColor: tintColor }]}
              />
          ),
        }
      }
      else if (routeName === 'Like') {
        return {
          tabBarLabel: <View />,
          tabBarIcon: ({ focused, tintColor }) => (
            focused ? <Image
              source={require('../../resources/Tabbar/liked.png')}
              style={[styles.icon, { tintColor: tintColor }]}
            />
              :
              <Image
                source={require('../../resources/Tabbar/like.png')}
                style={[styles.icon, { tintColor: tintColor }]}
              />
          ),
        }
      }
      else if (routeName === 'Profile') {
        return {
          tabBarLabel: <View />,
          tabBarIcon: ({ focused, tintColor }) => (
            focused ? <Image
              source={require('../../resources/Tabbar/profile.png')}
              style={[styles.icon, { tintColor: tintColor }]}
            />
              :
              <Image
                source={require('../../resources/Tabbar/profileselected.png')}
                style={[styles.icon, { tintColor: tintColor }]}
              />
          ),
        }
      }
    },
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const MyDrawerNavigator = createDrawerNavigator({
  Drawer: { screen: TabNavigator },
}, {
  headerMode: 'screen',
  gesturesEnabled: false,
  contentComponent: DrawerContainer, /// DrawerContainer is custom component container for all tabs
  drawerWidth: 260,
  drawerType:'slide',
});

var styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',

  },container: {
    flex: 1,
  },
})
export default createAppContainer(MyDrawerNavigator);
