'use strict';
var React = require('react-native');

var TDList = require('./TDList');
var TDEdit = require('./TDEdit');
var TDButton = require('./TDButton');

var { View } = React;

var styles = {
  container: {
    flex:1
  }
}

class TDListContainer extends React.Component {
  constructor() {
    super();
    this.state = {items: []};
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.newItem = this.openItem = this.openItem.bind(this);
  }

  componentDidMount() {
    // fetch('http://localhost:3000/items').
    //   then(response => response.json()).
    //   then(json => {
    //     this.setState({items: JSON.parse(json).items})
    //   });

    this.setState({
      items: [
        {txt: 'Have children less than 18 months apart'},
        {txt: 'Treat Guinness as a meal substitute'},
        {txt: "'git push --force' to a shared branch"},
        {txt: 'Assume people know what they are doing'},
        {txt: 'Alternate tequila shots and white wine'},
        {txt: 'Block SSH access in iptables'},
        {txt: 'Date a commercial lawyer'},
        {txt: 'Skate a 10 foot vert ramp'},
        {txt: 'Design a user interface myself'},
        {txt: 'Take a knife to a gunfight'},
        {txt: 'Do solid state physics'},
        {txt: 'Wake a sleeping baby'},
        {txt: "Use a friend's video rental card"},
        {txt: "Get caught in an avalanche"}
      ]
    });
  }

  deleteItem(index) {
    var items = this.state.items;
    items.splice(index, 1);
    this.setState({items: items});
    this.back();
  }

  updateItem(item, index) {
    var items = this.state.items;
    if (index) {
      items[index] = item;
    }
    else {
      items.unshift(item);
    }
    this.setState({items: items});
    this.back();
  }

  back() {
    this.props.navigator.pop();
  }

  openItem(rowData, rowID) {
    this.props.navigator.push({
      title: rowData && rowData.txt || 'New',
      component: TDEdit,
      passProps: {
        item: rowData,
        id: rowID,
        update: this.updateItem,
        back: this.back.bind(this),
        delete: this.deleteItem
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TDList
          items={this.state.items}
          onPressItem={this.openItem}
        />
        <TDButton text="New" onPress={this.newItem}/>
      </View>
    );
  }
}

module.exports = TDListContainer;
