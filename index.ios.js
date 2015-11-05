



'use strict';

var React = require('react-native');
var TDListContainer = require('./TDListContainer');
var colors = require('./colors');

var { AppRegistry, StatusBarIOS, NavigatorIOS } = React;

class TDApp extends React.Component {
  render() {
    StatusBarIOS.setStyle('light-content')
    return (
      <NavigatorIOS
        initialRoute={{
          component: TDListContainer,
          title: 'Things not to do',
          backButtonTitle: ' '
        }}
        barTintColor='rgb(18, 42, 86)'
        tintColor='white'
        titleTextColor='white'
        style={{flex: 1}}
      />
    );
  }
}

AppRegistry.registerComponent('YOW2015', () => TDApp);




