import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default (props) => (
  <View style={{
    alignItems: 'center',
    width: 70,
    // backgroundColor: 'blue',
    }}
    >
    <TouchableOpacity onPress={props.openDrawer}>
      <Icon name={'menu'} size={35}/>
    </TouchableOpacity>
  </View>
);