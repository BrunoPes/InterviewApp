/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
console.disableYellowBox = true;
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Navigation from './src/components/Navigation';

export default class App extends Component {
  render() {
    return (
      <Navigation/>
    );
  }
}