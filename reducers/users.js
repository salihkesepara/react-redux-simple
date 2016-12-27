import { USER_SELECTED } from '../actions/Users'

const initialState = [
	{
		id: 1,
		first: 'Bucky',
		last: 'Roberts',
		age: 71,
		description: 'Bucky is a React developer'
	}
]

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case USER_SELECTED:
			return [
				{
					id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
					first: action.user.first,
					last: action.user.last,
					age: action.user.age,
					description: action.user.description
				},
				...state
			]
		default:
			return state
	}
}