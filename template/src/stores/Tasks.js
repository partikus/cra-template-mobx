import {action, computed, decorate, observable} from "mobx";
import uuidv4 from "uuid/v4";

class Task {
	id;
	title;
	done;

	constructor({title, done = false}) {
		Object.assign(this, {
			id: uuidv4(),
			title,
			done,
		})
	}
}

class TasksStore {
	/**
	 * @param {Map<string, Task>} tasks
	 */
	tasks = observable.map();

	/**
	 *
	 * @param {Array<Task>} tasks
	 */
	constructor(tasks = []) {
		tasks.forEach(task => this.tasks.set(task.id, task));
	}

	finish({id}) {
		this.tasks.find(task => task.id === id).done = true;
	}

	/**
	 * @param {Task} task
	 */
	add(task) {
		this.tasks.set(task.id, task);
	}

	remove({id}) {
		this.tasks.remove(id);
	}

	/**
	 * @var Array<{{ title: string, id: string, done: Boolean }}>
	 */
	get active() {
		return [...this.tasks.values()].filter(task => !task.done);
	}

	/**
	 * @var Array<{{ title: string, id: string, done: Boolean }}>
	 */
	get done() {
		return [...this.tasks.values()].filter(task => task.done);
	}
}

decorate(Task, {
	title: observable,
	done: observable,
});

decorate(TasksStore, {
	tasks: observable,
	active: computed,
	done: computed,
	finish: action,
	add: action,
	remove: action,
});

const tasksStore = new TasksStore([
	new Task({title: '1st active'}),
	new Task({title: '1st done', done: true}),
]);

export {
	Task,
	TasksStore,
	tasksStore,
};

export default tasksStore;
