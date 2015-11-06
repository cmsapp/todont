'use strict';
var React = require('react-native');

var TDList = require('./TDList');
var TDButton = require('./TDButton');

var { View, TextInput } = React;

var styles = {
  container: {
    marginTop: 65,
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

class TDListContainer extends React.Component {
  constructor() {
    super();
    this.state = {items: [], filter: ''};
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

  previous(index) {
    if (index > 0) {
      var newIndex = index - 1;
      var rowData = this.state.items[newIndex];
      this.props.navigator.replace({
        name: 'item',
        title: rowData.txt,
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
        title: rowData.txt,
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
      title: rowData && rowData.txt || 'New',
      item: rowData,
      itemId: rowID,
      update: this.updateItem,
      back: this.back.bind(this),
      previous: this.previous.bind(this, index),
      next: this.next.bind(this, index),
      delete: this.deleteItem
    });
    //   title: rowData && rowData.txt || 'New',
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
    var items = 
      this.state.items.filter(item => { 
        return item.txt.toUpperCase().includes(this.state.filter.toUpperCase());
      });

    return (
      <View style={styles.container}>
        <TextInput style={styles.textbox} 
          value={this.state.filter}
          onChangeText={filter => this.setState({filter})}>
        </TextInput>
        <TDList
          items={items}
          onPressItem={this.openItem}
        />
        <TDButton text="New" onPress={this.newItem}/>
      </View>
    );
  }
}

module.exports = TDListContainer;
