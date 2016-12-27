import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UserList from '../components/UserList'
import * as Actions from '../actions/Users'
import Listenner from '../components/Listenner'
require('../css/style.css');

class App extends Component {
	constructor(props) {
		super(props)
		this.userListenner = this.userListenner.bind(this)
	}
	
	userListenner() {
		console.log('Users is refreshed!')
	}
	
	render() {
		const { users, actions } = this.props
		return (
			<div>
				<h2>My Friend List</h2>
				<UserList
					selectUser={actions.selectUser}
					users={users} />
				<Listenner userListenner={this.userListenner} />
			</div>
		)
	}
}

App.PropTypes = {
	users: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	users: state.users
})

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(Actions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)