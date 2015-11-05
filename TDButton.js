var React = require('react-native');
var colors = require('./colors');

var { Text, TouchableHighlight, StyleSheet } = React;

var styles = {
  container: {
    height: 35,
    backgroundColor: colors.primary,
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 10,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 8
  },
  text: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center'
  }
}

class TDButton extends React.Component {
  render() {
    var underlayColor = this.props.underlayColor || 'rgb(63, 113, 195)';
    var touchableHighlightStyle = Object.assign({}, styles.container, this.props.containerStyle);

    return(
      <TouchableHighlight
        style={touchableHighlightStyle}
        underlayColor={underlayColor}
        onPress={this.props.onPress}
      >
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

module.exports = TDButton;