<template>
    <div>
      <div class="jumbotron text-center cyan">
        <h2>Admin SignIn</h2>
        <router-link to="/">Go to home</router-link>
      </div>
      <div class="container box" style="text-align: center;">
        <form>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" class="form-control" id="password" name="password" v-model="post.password">
          </div>
          <button type="submit" class="btn btn-primary" @click="submitData">Submit</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  const axios = require("axios");
  export default {
    name: 'AdminLogin',
    data(){
      return {
          post: {
              email:"admin@gmail.com",
              password:null,
              role:1,
          }
      }
    },
    methods: 
    {
      submitData(e){
          axios({
          method: "post",
          url: 'https://library-backend-p75d.onrender.com/login',
          data: this.post,
          headers: {
            "Content-Type": "application/json",
          },
          })
          .then((result) => {
            console.log(result.data)
            let dashurl = '/admin/dashboard'
            this.$router.push({path: dashurl})
          }).catch((err) => {
            window.alert(err)
          });
          e.preventDefault();
      }
    }
  };
  </script>