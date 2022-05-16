import React from 'react'
import facebook from './assets/img/facebook.svg'

const sayHello = () => console.log('hello')

const obj = { name: 'Oscar', lastname: 'Cantillo' }

const App = () => {
	const { name } = obj
	return <div>
		<h1>Rule of Thumbs!</h1>
		<img src={facebook} alt="facebook" />
		<button onClick={sayHello}>
			<span>{ `Hello ${name}` }</span>
		</button>
	</div>
}

export default App
