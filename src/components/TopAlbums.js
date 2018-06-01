import React, { Component } from 'react';
import { View, Text, TouchableOpacity,  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class TopAlbums extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <View style={{ 
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: 100,
          height: 100}}
          >
          <TouchableOpacity onPress={navigation.openDrawer}>
            <Icon name={'menu'} size={30}/>
          </TouchableOpacity>
        </View>
      )
    };
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Top Albums</Text>
      </View>
    );
  }
}