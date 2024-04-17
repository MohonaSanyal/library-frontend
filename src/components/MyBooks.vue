<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" :to="'/mybooks/' + $route.params.userid">MY Books</router-link>
      </div>
    </nav>
    <div class="container mt-4">
      <h2>My Books</h2>
      <div v-if="books.length === 0" class="alert alert-info" role="alert">
        No books issued.
      </div>
      <div v-else>
        <div v-for="(book, index) in books" :key="index" class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{{ book.name }}</h5>
            <p class="card-text">Issued Date: {{ book.issue }}</p>
            <p class="card-text">Return Date: {{ book.return }}</p>
            <button class="btn btn-primary" @click="giveFeedback(book.book_id)">Feedback</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
      userId: this.$route.params.userid
    };
  },
  methods: {
    giveFeedback(bookId) {
      this.$router.push(`/rating/book/${bookId}/${this.userId}`);
    },
    fetchMyBooks() {
      fetch(`https://library-backend-p75d.onrender.com/mybooks/${this.userId}`)
        .then(response => response.json())
        .then(data => {
          this.books = data.books;
        })
        .catch(error => {
          console.error('Error fetching my books:', error);
          this.books = [];
        });
    }
  },
  mounted() {
    this.userId = this.$route.params.userid;
    this.fetchMyBooks();
  }
};
</script>

