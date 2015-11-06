



'use strict';

var React = require('react-native');
var TDListContainer = require('./TDListContainer');
var TDEdit = require('./TDEdit');
var colors = require('./colors');

var { AppRegistry, StatusBarIOS, Navigator, TouchableOpacity, Text, Image, PixelRatio, StyleSheet } = React;

class TDApp extends React.Component {
  render() {
    StatusBarIOS.setStyle('light-content')
    return (
      <Navigator
        initialRoute={{
          name: 'list',
          title: 'Things Not To Do'
        }}
        style={{flex: 1}}
        renderScene = {(route, navigator) => {
          if (route.name === 'list') {
            return <TDListContainer navigator={navigator}/>;
          }
          if (route.name === 'item') {
            return (
              <TDEdit
                item={route.item}
                id={route.itemId}
                navigator={navigator}
                update={route.update}
                back={route.back}
                delete={route.delete}
                previous={route.previous}
                next={route.next}
              />
            );
          }
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
      />
    );
  }
}

var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Image source={require('image!backlink')} style={{height: 20, width: 20, marginTop: 10}}/>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    );
  },

};

var styles = StyleSheet.create({
  messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  navBar: {
    backgroundColor: colors.primary,
  },
  navBarText: {
    fontSize: 17,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: 'white',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: 'white'
  },
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EAEAEA',
  },
});

AppRegistry.registerComponent('YOW2015', () => TDApp);




