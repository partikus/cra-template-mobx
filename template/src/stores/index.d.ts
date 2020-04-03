// stores/index.d.ts

import {Context, FunctionComponent} from 'react';

declare interface Task {
    id: String;
    title: String;
    done: Boolean;
}

declare class Tasks {
    active: Task[];
    done: Task[];

    finish({id: String});

    add(task: Task);

    remove({id: string});
}

declare interface Stores {
    tasksStore: Tasks;
}

declare function useStores(): Stores;

declare interface StoreContext extends Context<Stores> {
}

declare function withStores<P>(baseComponent: FunctionComponent<P>): FunctionComponent<P & Stores>;