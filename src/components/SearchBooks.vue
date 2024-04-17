<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <span class="navbar-brand">User Dashboard</span>
        <form class="d-flex" @submit.prevent="searchBooks">
          <input class="form-control me-2" type="search" placeholder="Search" v-model="searchText">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div class="container mt-4">
      <h2>Search Results</h2>
      <div v-if="searchedBooks.length === 0" class="alert alert-info" role="alert">
        No results found.
      </div>
      <div v-else>
        <div v-for="(book, index) in searchedBooks" :key="index" class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{{ book.name }}</h5>
            <p class="card-text">Authors: {{ book.authors }}</p>
            <p class="card-text">{{ book.content }}</p>
            <p class="card-text">Price: {{ book.price }}</p>
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
      searchText: '',
      searchedBooks: []
    };
  },
  methods: {
    searchBooks() {
      if (this.searchText.trim() === '') {
        return; // Don't search if search text is empty
      }
      fetch('https://library-backend-p75d.onrender.com/search/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          search: this.searchText
        })
      })
      .then(response => response.json())
      .then(data => {
        this.searchedBooks = data.books;
      })
      .catch(error => {
        console.error('Error searching books:', error);
        this.searchedBooks = [];
      });
    },
  }
};
</script>
