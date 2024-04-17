<template>
  <div class="container mt-4">
    <nav class="navbar navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Librarian Dashboard</span>
        <button class="btn btn-primary" @click="navigateToAllocation">Allocation</button>
        <button class="btn btn-primary" @click="navigateToRequests">Requests</button>
      </div>
    </nav>
    
    <button class="btn btn-success mb-3" @click="createSection">Create Section</button>

    <div v-for="section in sections" :key="section.id" class="card mb-3">
      <div class="card-header">
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="card-title">{{ section.name }}</h5>
          <p>{{ section.desc }}</p>
          <div>
            <button class="btn btn-primary btn-sm me-2" @click="createBook(section.id)">Create Book</button>
            <button class="btn btn-primary btn-sm me-2" @click="editSection(section.id)">Edit Section</button>
            <button class="btn btn-danger btn-sm" @click="deleteSection(section.id)">Delete Section</button>
          </div>
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
              <button class="btn btn-primary btn-sm me-2" @click="editBook(book.id)">Edit</button>
              <button class="btn btn-danger btn-sm" @click="deleteBook(book.id)">Delete</button>
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
    createSection() {
      this.$router.push('/create/section');
    },
    createBook(section_id) {
      this.$router.push(`/create/book/${section_id}`);
    },
    editSection(section_id) {
      this.$router.push(`/edit/section/${section_id}`);
    },
    deleteSection(section_id) {
      this.$router.push(`/delete/section/${section_id}`);
    },
    editBook(book_id) {
      this.$router.push(`/edit/book/${book_id}`);
    },
    deleteBook(book_id) {
      this.$router.push(`/delete/book/${book_id}`);
    },
    navigateToAllocation() {
      this.$router.push('/allocation');
    },
    navigateToRequests() {
      this.$router.push('/requests');
    }
  }
};
</script>
