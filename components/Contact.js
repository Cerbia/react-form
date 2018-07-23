var Contact = React.createClass({
	propTypes: {
		url: React.PropTypes.string.isRequired,
		name: React.PropTypes.string.isRequired,
		surname: React.PropTypes.string.isRequired,
		email: React.PropTypes.string.isRequired
	},
	render: function() {
		return React.createElement('div', {className: 'contactItem'},
			React.createElement('img', {className: 'contactImage', src:this.props.url}),
			React.createElement('div', {className: 'contactData'}, 
				React.createElement('p', {className: 'contactName'}, 'Name: ' + this.props.name),
				React.createElement('p', {className: 'contactSurname'}, 'Surname: ' + this.props.surname),
				React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.email}, this.props.email)
			)
		);
	}
});