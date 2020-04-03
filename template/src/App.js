import React from 'react';
import {observer} from 'mobx-react-lite';

import {Task, useStores} from './stores';
import ListWithHOC from "./ListWithHOC";
import ListWithHook from "./ListWithHook";

import './App.css';

function App() {
	const {tasksStore} = useStores();

	const addTask = (done = false) => (() => {
		const title = prompt('What\'s your task\'s title', '');

		if (!title) {
			return false;
		}

		tasksStore.add(new Task({title, done}));
	});

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<p>
					Learn
					&nbsp;
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>React</a>
					&nbsp;
					<span>&amp;</span>
					&nbsp;
					<a
						className="App-link"
						href="https://mobx.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Mobx
					</a>
				</p>
				<div className="Grid">
					<div className="Grid-column">
						<button onClick={addTask()}>add @todo</button>
						<button onClick={addTask(true)}>add @done</button>
					</div>
				</div>
				<div className="Grid">
					<div className="Grid-column">
						<ListWithHOC/>
					</div>
					<div className="Grid-column">
						<ListWithHook/>
					</div>
				</div>
			</header>
		</div>
	);
}

export default observer(App);
