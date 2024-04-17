
<template>
  <div>
    <div class="jumbotron text-center cyan">
      <h2>Create Section</h2>
      <router-link to="/admin/dashboard">See all already created sections here</router-link>
    </div>
    <div class="container box" style="text-align:center;">
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" name="name" v-model="venue.name">
          <label for="address">Description:</label>
          <input type="text" class="form-control" name="description" v-model="venue.desc">
        </div>
        <button type="submit" class="btn btn-primary" @click="submitData">Create</button>
      </form>
    </div>
  </div>
</template>

<style>
.box {
  padding: 24px;
  background-color: aliceblue;
  border-radius: 24px;
  border: 1px solid black;
}
.cyan {
  background-color: aliceblue;
}
.body {
  background-color: #f6f7ff;
}
</style>

<script>
const axios = require("axios");
export default {
  name: 'CreateSection',
  data() {
    return {
      venue: {
        desc: null,
        name: null,
      }
    };
  },
  methods: {
    submitData(e) {
      axios({
        method: "post",
        url: `https://library-backend-p75d.onrender.com/create/section`,
        data: this.venue,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((result) => {
          console.log(result.data);
          let dashurl = '/admin/dashboard/';
          this.$router.push({ path: dashurl });
        })
        .catch((err) => {
          window.alert(err);
        });
      e.preventDefault();
    },
  },
};
</script>
