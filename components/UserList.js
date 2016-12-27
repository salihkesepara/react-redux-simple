import React, { Component, PropTypes } from 'react'

class UserList extends Component {
	save() {
		const data = {
			first: 'Bucky',
			last: 'Roberts',
			age: 71,
			description: 'Bucky is a React developer'
		}

		this.props.selectUser(data)
	}

	createListItem() {
		return this.props.users.map((user) => {
			return (
				<li key={user.id}
					onClick={this.save.bind(this)}
				>{user.first} {user.last}</li>
			)
		});
	}

	render() {
		console.log(JSON.stringify(this.props.users));
		return (
			<ul>
				{this.createListItem()}
			</ul>
		)
	}
}

UserList.PropTypes = {
	selectUser: PropTypes.func.isRequired,
	users: PropTypes.object.isRequired
}

export default UserList