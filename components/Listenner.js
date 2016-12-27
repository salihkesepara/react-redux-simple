import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Listenner extends Component {
	render() {
		return (<div></div>)
	}
	
	shouldComponentUpdate(nextProps) {
		return this.props.users !== nextProps.users
	}
	
	componentDidUpdate(prevProps) {		
		if (this.props.users !== prevProps.users) {
			this.props.userListenner()
		}
	}
}

Listenner.PropTypes = {
	userListenner: PropTypes.func
}

const mapStateToProps = (state) => ({
	users: state.users
})

export default connect(
	mapStateToProps
)(Listenner)