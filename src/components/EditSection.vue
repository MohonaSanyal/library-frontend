<template>
    <div v-if="section">
      <div class="jumbotron text-center cyan">
        <h2>Edit Section</h2>
        <router-link to="/admin/dashboard">See all already created books here</router-link>
      </div>
      <div class="container box" style="text-align:center;">
        <form>
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" name="name" v-model="section.name" />
            <label for="desc">Description:</label>
            <input type="text" class="form-control" name="desc" v-model="section.desc" />
          </div>
          <button type="submit" class="btn btn-primary" @click="submitData">Edit</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'EditVenue',
    data() {
      return {
        sectionid: this.$route.params.sectionid,
        section: {
          name: null,
          desc: null
        },
      };
    },
    methods: {
      submitData(e) {
        axios({
          method: 'patch',
          url: `https://library-backend-p75d.onrender.com/edit/section/${this.$route.params.sectionid}`,
          data: this.section,
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((result) => {
            console.log(result.data);
            let dashurl = '/admin/dashboard';
            this.$router.push({ path: dashurl });
          })
          .catch((err) => {
            console.log(this.section);
            window.alert(err.response.data);
          });
        e.preventDefault();
      },
    },
  };
  </script>
  
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