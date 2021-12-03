const app = Vue.createApp({
    data() {
        return {
            goalValue: "",
            goals: [],
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.goalValue);
        },
    },
});

app.mount("#user-goals");
