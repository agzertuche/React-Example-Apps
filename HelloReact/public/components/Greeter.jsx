var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
    getDefaultProps: function(){
        return {
            name: 'React',
            message: 'This is from the component...'
        };
    },
    getInitialState: function(){
        return{
            name: this.props.name,
            message: this.props.message
        };
    },
    handleForm: function(updates){
        this.setState(updates);
    },
    render: function(){
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm updateInfo={this.handleForm}/>            
            </div>
        );
    }
});

module.exports = Greeter;