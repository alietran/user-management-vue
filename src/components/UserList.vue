<template>
  <tbody>
    <user-item
      v-for="(user, index) in search"
      :key="index"
      :user="user"
    ></user-item>
  </tbody>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import UserItem from "./UserItem.vue";

const { mapGetters, mapState, mapActions } = createNamespacedHelpers("user");
export default {
  components: {
    UserItem,
  },
  computed: {
    loading() {
      return false;
    },
    ...mapState({
      userList: (state) => state.userList,
    }),

    ...mapGetters({
      getBoyList: "getBoyList",
      search: "search",
    }),
  },
  methods: {
    ...mapActions({
      getAllUser: "getUserListAction",
    }),
  },
  created() {
    this.getAllUser();
  },
};
</script>

<style></style>
