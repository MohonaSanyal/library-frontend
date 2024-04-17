<template>
  <div class="container mt-4">
    <h2>Requests Pending</h2>
    <div v-for="(book, index) in books" :key="index" class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ book.book_id }} : {{ book.name }}</h5>
        <ul class="list-group list-group-flush">
          <li v-for="(user, idx) in book.users_list" :key="idx" class="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <span>User ID: {{ user.user }}</span>
              <button class="btn btn-primary btn-sm ms-2" @click="accept(user.issue_id)">Accept</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: []
    };
  },
  mounted() {
    // Fetch books data from API
    this.fetchBooksData();
  },
  methods: {
    fetchBooksData() {
      // Fetch books data from API
      // Replace the URL with your actual API endpoint
      const apiUrl = 'https://library-backend-p75d.onrender.com/books/all/req';
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          this.books = data.books;
        })
        .catch(error => {
          console.error('Error fetching books data:', error);
        });
    },
    accept(issueId) {
      const revokeUrl = `https://library-backend-p75d.onrender.com/books/req/accept/${issueId}`;
      fetch(revokeUrl, {
        method: 'POST'
      })
      .then(response => {
        if (response.ok) {
          // Re-fetch books data after successful revocation
          this.fetchBooksData();
          console.log('Allocation processed successfully.');
        } else {
          console.error('Failed to allocate.');
        }
      })
      .catch(error => {
        console.error('Error allocating:', error);
      });
    }
  }
};
</script>