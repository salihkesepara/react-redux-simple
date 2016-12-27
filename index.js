import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { showDevTools } from './utils/dev-tools'
import App from './containers/App'

const store = configureStore()

render(
  <div>
		<Provider store={store}>
			<App />
		</Provider>
		{showDevTools(store)}
	</div>,
  document.getElementById('root')
)