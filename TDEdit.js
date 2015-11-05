'use strict';

var React = require('react-native');

var commonStyles = require('./CommonStyles');
var colors = require('./colors');
var TDSeverity = require('./TDSeverity');
var TDLabel = require('./TDLabel');
var TDButton = require('./TDButton');
var TDSwipable = require('./TDSwipable');

var {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  TextInput,
  SwitchIOS,
  SliderIOS,
  PanResponder,
  LayoutAnimation
} = React;

class TDEdit extends React.Component {
  constructor(props) {
    super();
    this.onUpdate = this.onUpdate.bind(this);
    this.onDelete = this.onDelete.bind(this);
    var item = props.item;
    this.state = item ? {
      txt: item.txt,
      doneItBefore: item.doneItBefore,
      severity: item.severity
    } : {};
  }

  onUpdate() {
    this.props.update(this.state, this.props.id);
  }

  onDelete() {
    this.props.delete(this.props.id);
  }

  containerTouched(event) {
    this.refs.textInput.blur();
    return false;
  }

  render() {
    return (
      <View style={styles.container}
        onStartShouldSetResponder={this.containerTouched.bind(this)}>
        <TDLabel value="Thing not to do"/>
        <TextInput
          ref='textInput'
          value={this.state.txt}
          onChangeText={txt => this.setState({txt})}
          style={styles.textbox}
        />
        <TDLabel value="Done it before?"/>
        <SwitchIOS
          value={this.state.doneItBefore}
          onValueChange={doneItBefore => {
            LayoutAnimation.easeInEaseOut();
            this.setState({doneItBefore});
          }}
          style={styles.switch}
          onTintColor={colors.primary}
        />

        {this.state.doneItBefore ?
          <TDSeverity
            value={this.state.severity}
            onValueChange={severity => this.setState({severity})}
          /> : <View/>
        }

        {!this.props.item ?
          <TDButton containerStyle={{marginLeft: 0, marginRight: 0}} text="Save" onPress={this.onUpdate}/>
          :
          <View style={{flex: 0, paddingTop: 5, flexDirection: 'row'}}>
            <TDButton containerStyle={{flex: 1, marginLeft: 0}} text="Save" onPress={this.onUpdate}/>
            <TDButton containerStyle={{
              flex: 1,
              marginRight: 0,
              backgroundColor: '#ED1C23',
              borderColor: '#ED1C23'
            }} text="Delete" underlayColor={'rgba(237, 28, 35, 0.75)'} onPress={this.onDelete}
            />
            </View>
        }

        <TDSwipable
          onBackSwipe={this.props.back}
          onUpSwipe={this.props.previous}
          onDownSwipe={this.props.next}
          style={styles.backSwipe}
        />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  textbox: {
    color: '#000000',
    fontSize: 17,
    height: 36,
    padding: 7,
    borderRadius: 4,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginBottom: 5
  },
  switch: {
    marginBottom: 10
  },
  saveButton: {
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
  },
  backSwipe: {
    flex:1
  }
});

module.exports = TDEdit;
