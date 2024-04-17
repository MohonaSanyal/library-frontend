
<template>
    <div>
	<div class="jumbotron text-center cyan">
		<h2>Create Book</h2>
        <router-link to="/admin/dashboard">See all already created sections and books here</router-link>
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
          </div>
			<button class="btn btn-primary" @click="submitData">Create</button>
		</form>
	</div>
    </div>
</template>

	<style>
		.box{
			padding: 24px;
			background-color: aliceblue;
			border-radius: 24px;
			border: 1px solid black;
		}
		.cyan{
			background-color: aliceblue;
		}
		.body{
			background-color: #f6f7ff;		
		}
	</style>

<script>
const axios = require("axios");
export default {
    name: 'CreateShow',
  data() {
    return {
        book: {
          name: null,
          content: null,
          authors: null,
          ebook_price: 0,
          section_id: this.$route.params.sectionid
        },
    };
  },
  methods: {
    submitData(e) {
      axios({
        method: "post",
        url: `https://library-backend-p75d.onrender.com/create/book`,
        data: this.book,
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
          console.log(this.show);
          window.alert(err);
        });
      e.preventDefault();
    },
  },
}
</script>
