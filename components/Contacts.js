var Contacts = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },
    render: function() {
        var contacts = this.props.items.map(function(item) {
            return React.createElement('li', {key: item.id}, 
                React.createElement(Contact, {url: item.photo ,name: item.firstName, surname: item.lastName, email: item.email})
            );
        });
        return React.createElement('ul', {}, contacts);
    }
});

