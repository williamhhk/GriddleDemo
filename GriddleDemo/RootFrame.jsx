var React = require('react');
var TextInput = require('./TextInput.jsx');
var ComponentWithGriddle = require('./ComponentWithGriddle.jsx');

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

module.exports = RootFrame;