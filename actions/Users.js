export const USER_SELECTED = 'USER_SELECTED'

export function selectUser(user) {
	return { type: USER_SELECTED, user }
}