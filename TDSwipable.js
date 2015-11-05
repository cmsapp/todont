'use strict';

var React = require('react-native');

var {
  View,
  PanResponder
} = React;

class TDSwipable extends React.Component {
  render() {
    var panHandlers = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (gestureState.dx > 100) {
          this.props.onBackSwipe();
        }

        if (gestureState.dy > 100) {
          this.props.onUpSwipe();
        }

        if (gestureState.dy < -100) {
         this.props.onDownSwipe();
        }
      }
    }).panHandlers;

    return(
      <View {...panHandlers} style={this.props.style}/>
    );
  }
}

module.exports = TDSwipable;
