import React from 'react';
import { Component,StyleSheet } from 'react-native';
import Home from "../Home/Home";

export default class ArrayList extends React.Component {
getData() {
    return [
      {
        key: 1, title: 'labore',
        image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
      },
      {
        key: 2,
        title: 'Isaac newton',
        description: 'Lorem ',
        image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
      },
      {
        key: 3, title: 'Albert Einstein',
        description: 'ipsum ',
        image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
      },
      {
        key: 4,
        title: 'Isaac newton',
        description: 'dolor',
        image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
      },
      {
        key: 5, title: 'Albert Einstein',
        description: 'labore',
        image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
      },
    ]
  }
  render() {
    return (
      <View style={styles.container}>
        <Home
          itemList={this.getData()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCFCFC',
    }
  });