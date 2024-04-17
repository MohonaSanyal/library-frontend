<template>
    <div class="container">
      <div class="row mt-5">
        <div class="col text-center">
          <h5>Are you sure you want to delete?</h5>
          <div class="my-3">
            <router-link to="/admin/dashboard" class="btn btn-secondary mx-2">Cancel</router-link>
            <button class="btn btn-danger mx-2" @click="deleteShow">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
      name: 'DeleteShow',
      methods: {
          deleteShow(){
        axios({
          method: 'delete',
          url: `https://library-backend-p75d.onrender.com/delete/book/${this.$route.params.bookid}`,
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
            window.alert(err.response.data);
          });
          }
      }
  }
  </script>