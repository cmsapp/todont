var React = require('react-native');

var colors = require('./colors');
var TDLabel = require('./TDLabel');

var {
  View,
  Label,
  StyleSheet,
  SliderIOS,
  Text
} = React;

class TDSeverity extends React.Component {
  render() {
    return(
      <View>
        <TDLabel value="How bad was it?"/>
        <View>
          <View style={styles.labels}>
            <Text>Meh</Text>
            <Text>I nearly died</Text>
          </View>
          <SliderIOS
            style={styles.slider}
            value={this.props.value}
            onSlidingComplete={this.props.onValueChange}
            minimumTrackTintColor={colors.primary}
          />
        </View>
      </View>
    );
  }
}

var styles = {
  slider: {
    height: 50
  },
  labels: {
    flex: 0,
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};

module.exports = TDSeverity;