const STORAGE_KEY = 'todo-vue';

export default {
    name: "persistence",
    fetch() {
        var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        todos.forEach((todo, index) => {
            todo.id = index
        });

        return todos;
    }
}
