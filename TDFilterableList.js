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

var dataSource = new ListView.DataSource({
	rowHasChanged: (row1, row2) => row1 !== row2
});

class TDFilterableList extends React.Component {
  constructor() {
    super();
    this.state = {filter: ''};
  }

  render() {
    var filteredItems =
      this.props.items.filter(item => {
        return item.txt.toUpperCase().includes(this.state.filter.toUpperCase());
      });

    return (
      <View style={styles.container}>
        <TextInput style={styles.textbox}
          onChangeText={text => this.setState({filter: text})}/>

        <ListView
          dataSource={dataSource.cloneWithRows(filteredItems)}
          renderRow={(rowData, sectionID, rowID) => {
						return(
							<TDListItem
								item={rowData}
								onPress={() => this.props.onPressItem(rowData, rowID)}
							/>
						);
					}}
        />
      </View>
    );
  }
}


module.exports = TDFilterableList;
