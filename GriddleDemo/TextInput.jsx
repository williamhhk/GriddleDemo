var React = require('react');

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);
        this.props.onUserInput(
            this.txtInputValue.value
        );
    }

    handleSubmit(event) {
        console.log(this.txtInputValue.value);
        //axios.post(this.props.UrlPost, { firstName: this.txtInputField.value })
        //  .then(function (response) {
        //  });
        //event.preventDefault();
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text"
                       placeholder="Enter/Select..."
                       value={this.props.txtInputField}
                       ref={(input) => this.txtInputValue = input}
    onChange={this.handleChange} />
</label>
<input type="submit" value="Submit" />
</form>
);
    }
}

module.exports = TextInput;