import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MenuIcon from './MenuIcon';

export default class Playlists extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <MenuIcon openDrawer={navigation.openDrawer}/>
    };
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Playlists</Text>
      </View>
    );
  }
}