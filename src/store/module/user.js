/* eslint-disable prettier/prettier */
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from "../../apis/user";

const state = () => ({
  userList: [
    {
      id: 1,
      name: "Nguyễn Phong Hào",
      avatar:
        "https://i.pinimg.com/236x/76/18/38/761838420398ec0b0b412b46b71f2ab2.jpg",
      age: 23,
      description: "thân thiện , hoc hỏi nhanh",
      programmingLanguage: ["JS", "JAVA"],
      gender: "Nam",
      type: "ADMIN",
    },
    {
      id: 2,
      name: "Phan Thùy Duyên",
      avatar:
        "https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-100.jpg",
      age: 22,
      description: "thân thiện , hoc hỏi nhanh",
      programmingLanguage: ["PHP", "C#"],
      gender: "Nữ",
      type: "CLIENT",
    },
  ],
  searchKey: "",
});

const getters = {
  getBoyList(state) {
    return state.userList.filter((user) => user.gender === "Nam");
  },
  search(state) {
    const { searchKey, userList } = state;
    return userList.filter((user) =>
      user.name.toLowerCase().includes(searchKey.toLowerCase())
    );
  },
};

const mutations = {
  setSearchNameMutation(state, payload) {
    state.searchKey = payload;
  },
  addUserMutation(state, payload) {
    state.userList.push(payload);
  },
  removeUserMutation(state, payload) {
    state.userList = state.userList.filter((user) => user.id !== payload);
  },
  updateUserMutation(state, payload) {
    const index = state.userList.findIndex((user) => user.id === payload.id);
    if (index !== -1) {
      state.userList[index] = payload;
    }
  },
  getUserListMutation(state, payload) {
    state.userList = payload;
  },
};

const actions = {
  setSearchNameAction(context, payload) {
    context.commit("setSearchNameMutation", payload);
  },
  async addUserAction(context, payload) {
    await createUser(payload);
    context.dispatch("getUserListAction");
  },
  async removeUserAction(context, payload) {
    console.log(payload);
    await deleteUser(payload);
    context.dispatch("getUserListAction");
  },
  async updateUserAction(context, payload) {
    await updateUser(payload);
    context.dispatch("getUserListAction");
  },
  async getUserListAction(context) {
    const payload = await getAllUsers();
    context.commit("getUserListMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
