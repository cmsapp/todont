'use strict';

var React = require('react-native');

var {
  View,
  PanResponder
} = React;

class TDBackSwipable extends React.Component {
  render() {
    var panHandlers = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (gestureState.dx > 100) {
          this.props.onBackSwipe();
        }
      }
    }).panHandlers;

    return(
      <View {...panHandlers} style={this.props.style}/>
    );
  }
}

module.exports = TDBackSwipable;
