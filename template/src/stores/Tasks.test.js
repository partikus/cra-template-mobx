import tasks from './Tasks';

test('Tasks - empty list', () => {
	expect(tasks.list.length).toBeGreaterThan(0);
});
