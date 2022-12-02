import { createStore } from "vuex";
// import profile from '@/store/modules/profile'
// import channels from '@/store/modules/channels'
// import messages from '@/store/modules/messages'
// import contacts from '@/store/modules/contacts'
// import { COMMIT_SET_STATUS } from '@/common/mutation-types.js'

const store = createStore({
  state: {
    username: "John.Doe",
    status: "active",
    avatar: "/avatars/avatar.jpg",
  },
  getters: {
    username: (state) => state.username.split(".")[0],
    status: (state) => state.status,
    avatar: (state) => state.avatar,
    },
    mutations: { },

});

export default store;
