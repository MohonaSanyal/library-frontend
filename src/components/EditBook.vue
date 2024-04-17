<template>
    <div v-if="book">
      <div class="jumbotron text-center cyan">
        <h2>Edit Book</h2>
        <router-link to="/admin/dashboard">See all already created books here</router-link>
      </div>
      <div class="container box" style="text-align:center;">
        <form>
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" name="name" v-model="book.name" />
            <label for="authors">Authors:</label>
            <input type="text" class="form-control" name="authors" v-model="book.authors" />
            <label for="content">Content:</label>
            <input type="text" class="form-control" name="content" v-model="book.content" />
            <label for="price">Price:</label>
            <input type="number" class="form-control" name="price" v-model="book.ebook_price" />
            <label for="section_id">Section id:</label>
            <input type="number" class="form-control" name="section_id" v-model="book.section_id" />
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
        bookid: this.$route.params.bookid,
        book: {
          name: null,
          content: null,
          authors: null,
          ebook_price: 0,
          section_id: 0
        },
      };
    },
    methods: {
      submitData(e) {
        axios({
          method: 'patch',
          url: `https://library-backend-p75d.onrender.com/edit/book/${this.$route.params.bookid}`,
          data: this.book,
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
            console.log(this.book);
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