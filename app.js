const app = Vue.createApp({
    data() {
        return {
            todoValue: "",
            todos: [],
        };
    },
    methods: {
        addTodo() {
            this.todos.push(this.todoValue);
            this.todoValue = "";
        },
        removeTodo(id) {
            this.todos.splice(id, 1);
        },
    },
});

app.mount("#user-goals");
