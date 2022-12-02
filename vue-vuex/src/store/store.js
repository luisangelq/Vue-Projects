import { reactive } from "vue";

const store = reactive({
    username: "John.Doe",
    updateUsername: function (newUsername) {
        this.username = newUsername;
    } 
});

export default store;