<template>
  <div class="container mt-4">
    <nav class="navbar navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">User Dashboard</span>
        <button class="btn btn-primary" @click="navigateToSearch">Search</button>
        <button class="btn btn-primary" @click="navigateToBooks">My Books</button>
      </div>
    </nav>
    <div v-for="section in sections" :key="section.id" class="card mb-3">
      <div class="card-header">
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="card-title">{{ section.name }}</h5>
          <p>{{ section.desc }}</p>
        </div>
      </div>
      <ul class="list-group list-group-flush">
        <li v-for="(book, idx) in section.items" :key="idx" class="list-group-item">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h6 class="card-title">{{ book.name }}</h6>
              <p class="card-text">{{ book.authors }}</p>
              <p class="card-text">Rs. {{ book.ebook_price }}</p>
            </div>
            <div>
              <button class="btn btn-primary btn-sm me-2" @click="reqBook(book.id)">Request</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      sections: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://library-backend-p75d.onrender.com/books');
        this.sections = response.data.sections;
        console.log(this.sections)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    reqBook(book_id) {
        axios({
          method: 'post',
          url: `https://library-backend-p75d.onrender.com/books/req/${book_id}`,
          data: {user_id: this.$route.params.userid},
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((result) => {
            window.alert("Request sent !");
            console.log(result.data)
            let dashurl = `/dashboard/${this.$route.params.userid}`;
            this.$router.push({ path: dashurl });
          })
          .catch((err) => {
            window.alert(err.response.data);
          });
    },
    navigateToSearch() {
      this.$router.push('/search');
    },
    navigateToBooks() {
      this.$router.push(`/mybooks/${this.$route.params.userid}`);
    }
  }
};
</script>
