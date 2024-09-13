<template>
  <tr>
    <td>
      <img :src="user.avatar" class="mr-2" alt="image" />
      {{ user.name }}
    </td>
    <td>{{ user.age }}</td>
    <td>
      <label
        class="badge badge-gradient-primary mr-2"
        v-for="(program, index) in user.programmingLanguage"
        :key="index"
        >{{ program }}</label
      >
    </td>
    <td>{{ user.gender }}</td>
    <td>
      <button
        type="button"
        class="mr-2 btn btn-gradient-danger btn-icon-text"
        @click="handleRemove(user.id)"
      >
        <i class="mdi mdi-delete btn-icon-prepend"></i> Remove
      </button>
      <button
        type="button"
        class="btn btn-gradient-info btn-icon-text"
        @click="handleOpenModalEditUser"
      >
        <i class="mdi mdi-border-color btn-icon-prepend"></i> Edit
      </button>
    </td>
  </tr>
  <teleport to="#app">
    <app-modal
      :isOpen="isOpenModalEditUserList"
      :handelCloseModal="handleCloseModalEditUser"
    >
      <form-user :userInfo="user"></form-user>
    </app-modal>
  </teleport>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import FormUser from "./FormUser.vue";

const { mapActions } = createNamespacedHelpers("user");
export default {
  components: {
    FormUser,
  },
  props: {
    user: {
      type: Object,
    },
  },
  data() {
    return {
      isOpenModalEditUserList: false, // đóng modal
    };
  },
  methods: {
    handleOpenModalEditUser() {
      this.isOpenModalEditUserList = true; // mở modal
    },
    handleCloseModalEditUser() {
      this.isOpenModalEditUserList = false; // đóng modal
    },
    ...mapActions({
      handleRemove: "removeUserAction",
    }),
  },
};
</script>

<style></style>
