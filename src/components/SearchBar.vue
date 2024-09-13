<template>
  <div class="form-group">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        v-model="keyword"
      />
      <div class="input-group-append">
        <button
          class="btn btn-sm btn-gradient-primary"
          type="button"
          @click="handleSearch(keyword)"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapActions } = createNamespacedHelpers("user");
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    // handleSearch() {
    //   this.$store.dispatch("setSearchNameAction", this.keyword);
    // },
    ...mapActions({
      handleSearch: "setSearchNameAction",
    }),
  },
};
</script>

<style></style>
