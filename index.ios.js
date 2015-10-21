'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} = React;

class YOW2015 extends React.Component {
  constructor() {
    super();
    this.state = {txt: 'Hello'};
  }

  render() {
    return (
      <TextInput style={styles.textInput}
        value={this.state.txt}
        onChangeText={txt => this.setState({txt})}
      />
    );
  }
}

var styles = StyleSheet.create({
  textInput: {
    flex: 1
  }
});

AppRegistry.registerComponent('YOW2015', () => YOW2015);
