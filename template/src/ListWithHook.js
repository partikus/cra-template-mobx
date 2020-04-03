import React from 'react';
import {observer} from "mobx-react-lite";

import {useStores} from './stores';

const ListWithHOC = function () {
	const {tasksStore} = useStores();

	return (
		<pre>
            <code>
                {tasksStore.done.map((task) => `${task.title} - ${task.done ? 'done' : 'todo'}${"\n"}`)}
            </code>
        </pre>
	);
};

export default observer(ListWithHOC);
