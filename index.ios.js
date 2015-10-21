'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView
} = React;

class YOW2015 extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'Hello',
      results: ['Result']
    };
  }

  componentWillMount() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  }

  render() {
    var dataSource = this.dataSource.cloneWithRows(this.state.results);

    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}
          value={this.state.txt}
          onChangeText={txt => this.setState({txt})}
        />
        <ListView style={{flex: 1}}
          dataSource={dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }

  renderRow(rowData, sectionID, rowID) {
    return(
      <Text>{rowData}</Text>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    flex: 1
  }
});

AppRegistry.registerComponent('YOW2015', () => YOW2015);
