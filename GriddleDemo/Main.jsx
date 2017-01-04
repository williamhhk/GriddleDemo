class ComponentWithGriddle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRowId: 0,
        };
    }
    onRowClick(row) {
        console.log(row);
        console.log(row.props.data.id);
        this.setState({ selectedRowId: row.props.data.id });
    }
    render() {
        //const rowMetadata = {
        //    bodyCssClassName: rowData => (rowData.id === this.state.selectedRowId ? 'selected-red' : ''),
        //};

        var rowMetadata = {
            bodyCssClassName: function (rowData) {
            if (this.state && (rowData.id === this.state.selectedRowId)) {
                return "selected-red";
            }
            return "";
            }
        };


        console.log(rowMetadata);
        return (
        <Griddle results={fakeData}  onRowClick={this.onRowClick.bind(this)}  showFilter={true} showSettings={true}  columnMetadata={columnMeta} useFixedHeader={true} rowMetadata={rowMetadata} resultsPerPage={5} enableInfiniteScroll={true} bodyHeight={400 }  useGriddleStyles ={true}
        />
        );
     }
}

ReactDOM.render(
    <ComponentWithGriddle />,
    document.getElementById("griddle-basic")
);