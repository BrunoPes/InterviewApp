import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import TopAlbums from './TopAlbums';
import Playlists from './Playlists';
import Bands from './Bands';
import Albums from './Albums';

let topAlbumsNavigator = StackNavigator({
  Main: {
    screen: TopAlbums,
    navigationOptions: {
      title: 'Top Albums',
    },
    
  }
});

let playlistsNavigator = StackNavigator({
  Main: {
    screen: Playlists,
    navigationOptions: {
      title: 'Playlists'
    }
  }
});

let bandsNavigator = StackNavigator({
  Main: {
    screen: Bands,
    navigationOptions: {
      title: 'Bands'
    }
  }
});

let albumsNavigator = StackNavigator({
  Main: {
    screen: Albums,
    navigationOptions: {
      title: 'Albums'
    }
  }
});

let drawer = DrawerNavigator({
  TopAlbums: { 
    screen: topAlbumsNavigator,
    navigationOptions: {
      drawerLabel: 'Top Albums'
    }
  },
  Bands: { 
    screen: bandsNavigator,
    navigationOptions: {
      drawerLabel: 'Bands'
    }
  },
  Albums: { 
    screen: albumsNavigator,
    navigationOptions: {
      drawerLabel: 'Albums'
    }
  },
  Playlists: { 
    screen: playlistsNavigator,
    navigationOptions: {
      drawerLabel: 'Playlists'
    }
  },
});

export default drawer;