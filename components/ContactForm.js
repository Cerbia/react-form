var ContactForm = React.createClass({
	propTypes: {
		contactForm: React.PropTypes.object.isRequired
	},
	render: function(argument) {
		return ( <form className={'contactForm'}>
			<input type={'text'} placeholder={'first name'} value={this.props.contactForm.firstName}/>
			<input type={'text'} placeholder={'last name'} value={this.props.contactForm.firstName}/>
			<input type={'text'} placeholder={'email'} value={this.props.contactForm.email}/>
			<button type={'submit'}>Add Contact</button>
		</form>);

	}
	
});