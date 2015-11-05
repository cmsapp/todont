'use strict';
var commonStyles = require('./CommonStyles');
var React = require('react-native');
var { Text, View, TouchableHighlight } = React;


class TDListItem extends React.Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.props.onPress}>
          <View style={commonStyles.container}>
            <Text style={styles.txt}>
              {this.props.item.txt}
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.hr}/>
      </View>
    );
  }
}

var styles = {
  hr: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: 1,
    marginLeft: 0,
    marginRight: 0
  },
  txt: {
    fontSize: 17,
    marginLeft: 5,
    marginTop: 2,
    color: '#222222'
  }
}

module.exports = TDListItem;
