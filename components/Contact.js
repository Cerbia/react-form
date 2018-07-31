var Contact = React.createClass({
	propTypes: {
		url: React.PropTypes.string.isRequired,
		name: React.PropTypes.string.isRequired,
		surname: React.PropTypes.string.isRequired,
		email: React.PropTypes.string.isRequired
	},
	render: function() {
		return (<div className={'contactItem'}>
			<img className={'contactImage'} src={this.props.url}/>
			<div className={'contactData'}>
				<p className={'contactName'}>Name: {this.props.name}</p>
				<p className={'contactSurname'}>Surname: {this.props.surname}</p>
				<a className={'contactEmail'} href= {'mailto:' + this.props.email}>{this.props.email}</a>
			</div>
		</div>);
	}
});