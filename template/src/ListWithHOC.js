import React from 'react';

import {withStores} from './stores';

const ListWithHOC = withStores(function ({tasksStore}) {
	return (
		<pre>
            <code>
                {tasksStore.active.map((task) => `${task.title} - ${task.done ? 'done' : 'todo'}${"\n"}`)}
            </code>
        </pre>
	);
});

export default ListWithHOC;
