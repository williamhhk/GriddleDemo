﻿var React = require('react');
var ReactDOM = require('react-dom');
var Griddle = require('griddle-react');
var TextInput = require('./TextInput.jsx');
var fakeData = require('./fakeData.jsx');

var columnMeta = [
  {
      "columnName": "id",
      "order": 1,
      "locked": false,
      "visible": true,
      "displayName": "ID"
  },
  {
      "columnName": "name",
      "order": 2,
      "locked": false,
      "visible": true,
      "displayName": "Name"
  },
  {
      "columnName": "city",
      "order": 3,
      "locked": false,
      "visible": true
  },
  {
      "columnName": "state",
      "order": 4,
      "locked": false,
      "visible": true
  },
  {
      "columnName": "country",
      "order": 5,
      "locked": false,
      "visible": true
  },
  {
      "columnName": "company",
      "order": 6,
      "locked": false,
      "visible": true
  },
  {
      "columnName": "favoriteNumber",
      "order": 7,
      "locked": false,
      "visible": true,
      "displayName": "Favorite Number"
  }
];

var rowMeta =
{
    "key": "id"
};


class ComponentWithGriddle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRowId: 0,
        };
    }
    onRowClick(row) {
        console.log(row.props.data);
        this.setState({ selectedRowId: row.props.data.id });
        this.props.onUserInput(row.props.data.company);
    }
    render() {
        var rowMetadata = {bodyCssClassName: rowData => (rowData.id === this.state.selectedRowId ? "selected" : '')};
        return (
        <Griddle results={fakeData} onRowClick={this.onRowClick.bind(this)} showFilter={true} showSettings={true} columnMetadata={columnMeta} useFixedHeader={true} rowMetadata={rowMetadata} resultsPerPage={5} enableInfiniteScroll={true} bodyHeight={400 } useGriddleStyles={true} />
        );
     }
}

class RootFrame extends React.Component {
    constructor(props) {
        super(props);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.state = { inputName: '' };
    }

    handleUserInput(name)
    {
        console.log("Name is  " + name);
        this.setState({ inputName: name });
    }

    render() {
        return (
        <div>
          <ComponentWithGriddle inputName={this.state.inputName} onUserInput={this.handleUserInput} />
          <TextInput UrlPost={this.props.UrlPost} txtInputField={this.state.inputName} onUserInput={this.handleUserInput} />
        </div>
       );
    };
}

//class TextInput extends React.Component {
//    constructor(props) {
//        super(props);
//        this.handleChange = this.handleChange.bind(this);
//        this.handleSubmit = this.handleSubmit.bind(this);
//    }

//    handleChange(e) {
//        console.log(e.target.value);
//        this.props.onUserInput(
//            this.txtInputValue.value
//        );
//    }

//    handleSubmit(event) {
//        console.log(this.txtInputValue.value);
//        //axios.post(this.props.UrlPost, { firstName: this.txtInputField.value })
//        //  .then(function (response) {
//        //  });
//        //event.preventDefault();
//    }

//    render() {
//        return (
//          <form onSubmit={this.handleSubmit}>
//            <label>
//                Name:
//                <input type="text"
//                       placeholder="Enter/Select..."
//                       value={this.props.txtInputField}
//                       ref={(input) => this.txtInputValue = input}
//                       onChange={this.handleChange} />
//            </label>
//                <input type="submit" value="Submit" />
//          </form>
//    );
//        }
//}

ReactDOM.render(
    <RootFrame UrlPost={'Home/SaveData'} />,
    document.getElementById("root")
);



