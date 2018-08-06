import * as React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Animated } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './TabBarMenu';
import Conversas from './Conversas';
import Contatos from './Contatos';

export default class Principal extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'tab_1', title: 'Conversas' },
      { key: 'tab_2', title: 'Contatos' },
    ],
  };

  _renderScene = SceneMap({
    tab_1: Conversas,
    tab_2: Contatos,
  });

  _renderTabBar = props => <TabBarMenu {...props} />;


  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
      />
    );
  }
}
/*
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
*/