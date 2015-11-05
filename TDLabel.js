var React = require('react-native');

var { Text } = React;

class TDLabel extends React.Component {
  render() {
    return <Text style={{
      fontSize: 17,
      fontWeight: '500',
      color: '#000000',
      marginTop: 5,
      marginBottom: 7
    }}>
      {this.props.value}
    </Text>;
  }
}

module.exports = TDLabel;