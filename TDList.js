'use strict';

var React = require('react-native');
var TDListItem = require('./TDListItem');
var { ListView } = React;


class TDList extends React.Component {
  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  }

  render() {
    var dataSource = this.dataSource.cloneWithRows(this.props.items);

    return (
      <ListView
        dataSource={dataSource}
        renderRow={this.renderRow}
      />
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


module.exports = TDList;
