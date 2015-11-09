'use strict';

var React = require('react-native');
var TDListItem = require('./TDListItem');
var { ListView, View, TextInput } = React;

var styles = {
  container: {
    flex:1
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
  }
}

class TDFilterableList extends React.Component {
  constructor() {
    super();
    this.state = {filter: ''};
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  }

  render() {
    var items = 
      this.props.items.filter(item => { 
        return item.txt.toUpperCase().includes(this.state.filter.toUpperCase());
      });

    return (
      <View style={styles.container}>
        <TextInput style={styles.textbox} 
          value={this.state.filter}
          onChangeText={filter => this.setState({filter})}>
        </TextInput>

        <ListView
          dataSource={this.dataSource.cloneWithRows(items)}
          renderRow={this.renderRow}
        />
      </View>
    );
  }

  renderRow(rowData, sectionID, rowID) {
    return(
      <TDListItem
        item={rowData}
        onPress={() => this.props.onPressItem(rowData, rowID)}
      />
    );
  }

}


module.exports = TDFilterableList;
