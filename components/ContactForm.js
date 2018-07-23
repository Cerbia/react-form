var ContactForm = React.createClass({
	propTypes: {
		contactForm: React.PropTypes.object.isRequired
	},
	render: function(argument) {
		return React.createElement('form', {className: 'contactForm'},
			React.createElement('input', {
				type: 'text',
				placeholder: 'first name',
				value: this.props.contactForm.firstName
			}),
			React.createElement('input', {
          		type: 'text',
          		placeholder: 'last name',
          		value: this.props.contactForm.lastName,
        	}),
        		React.createElement('input', {
          		type: 'email',
          		placeholder: 'email',
          		value: this.props.contactForm.email,
        	}),
			React.createElement('button', {type: 'submit'}, 'Add Contact')
		);

	}
	
});