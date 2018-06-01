import React, { Component } from 'react';
import { View, Text, TouchableOpacity,  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MenuIcon from './MenuIcon';

export default class TopAlbums extends Component {
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
        <Text>Top Albums</Text>
      </View>
    );
  }
}