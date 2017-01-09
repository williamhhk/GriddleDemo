var React = require('react');
var Griddle = require('griddle-react');
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
        var rowMetadata = {bodyCssClassName: rowData => (rowData.id === this.state.selectedRowId ? "selected-red" : '')};
        return (
        <Griddle results={fakeData} onRowClick={this.onRowClick.bind(this)} showFilter={true} showSettings={true} columnMetadata={columnMeta} useFixedHeader={true} rowMetadata={rowMetadata} resultsPerPage={5} enableInfiniteScroll={true} bodyHeight={400 } useGriddleStyles={true} />
        );
        }
}