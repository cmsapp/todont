'use strict';
var React = require('react-native');

var TDFilterableList = require('./TDFilterableList');
var TDButton = require('./TDButton');

var { View, TextInput } = React;

var styles = {
  container: {
    marginTop: 63,
    flex:1
  }
};

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
        {description: 'Have children less than 18 months apart'},
        {description: 'Treat Guinness as a meal substitute'},
        {description: "'git push --force' to a shared branch"},
        {description: 'Assume people know what they are doing'},
        {description: 'Alternate tequila shots and white wine'},
        {description: 'Block SSH access in iptables'},
        {description: 'Date a commercial lawyer'},
        {description: 'Skate a 10 foot vert ramp'},
        {description: 'Design a user interface myself'},
        {description: 'Take a knife to a gunfight'},
        {description: 'Do solid state physics'},
        {description: 'Wake a sleeping baby'},
        {description: "Use a friend's video rental card"},
        {description: "Get caught in an avalanche"}
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

  previous(index) {
    if (index > 0) {
      var newIndex = index - 1;
      var rowData = this.state.items[newIndex];
      this.props.navigator.replace({
        name: 'item',
        title: rowData.description,
        item: rowData,
        itemId: newIndex.toString(),
        update: this.updateItem,
        back: this.back.bind(this),
        previous: this.previous.bind(this, newIndex),
        next: this.next.bind(this, newIndex),
        delete: this.deleteItem,
      });
    }
  }

  next(index) {
    if (index < (this.state.items.length -1)) {
      var newIndex = index + 1;
      var rowData = this.state.items[newIndex];
      this.props.navigator.replace({
        name: 'item',
        title: rowData.description,
        item: rowData,
        itemId: newIndex.toString(),
        update: this.updateItem,
        back: this.back.bind(this),
        previous: this.previous.bind(this, newIndex),
        next: this.next.bind(this, newIndex),
        delete: this.deleteItem,
        fromPrevious: true
      });
    }
  }

  openItem(rowData, rowID) {
    var index = parseInt(rowID);
    this.props.navigator.push({
      name: 'item',
      title: rowData && rowData.description || 'New',
      item: rowData,
      itemId: rowID,
      update: this.updateItem,
      back: this.back.bind(this),
      previous: this.previous.bind(this, index),
      next: this.next.bind(this, index),
      delete: this.deleteItem
    });
    //   title: rowData && rowData.description || 'New',
    //   component: TDEdit,
    //   passProps: {
    //     item: rowData,
    //     id: rowID,
    //     update: this.updateItem,
    //     back: this.back.bind(this),
    //     delete: this.deleteItem
    //   }
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <TDFilterableList
          items={this.state.items}
          onPressItem={this.openItem}
        />
        <TDButton text="New" onPress={this.newItem}/>
      </View>
    );
  }
}

module.exports = TDListContainer;
