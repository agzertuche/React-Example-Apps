var React = require('react');

var GreeterForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();

        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if (name.length > 0) {
            updates.name = this.refs.name.value
            this.refs.name.value = '';
        }        

        if(message.length > 0){
            updates.message = this.refs.message.value
            this.refs.message.value = '';
        }

        this.props.updateInfo(updates);
    },
    render: function(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="name" placeholder="Type Name..."/>
                </div>                
                <div>
                    <textarea ref="message" placeholder="Type message..."/>
                </div>
                <button>Submit</button>
            </form>
        );
    }
});

module.exports = GreeterForm;