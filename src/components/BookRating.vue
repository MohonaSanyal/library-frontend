<template>
    <div>
	<div class="jumbotron text-center cyan">
		<h2>Give feedback form</h2>
	<div class="container box" style="text-align:center;">
		<form>
			<div class="form-group">
                <label for="rating">Feedback</label>
				<input type="text" class="form-control" name="rating" min="1" max="5" v-model="rate.feedback">
			</div>
			<button type="submit" class="btn btn-primary" @click="submitData">Submit</button>
		</form>
	</div>
    </div>
    </div>
</template>

<script>
const axios = require("axios");

export default {
  name: 'BookRating',
  data(){
    return {
        rate: {
            user_id:this.$route.params.userid,
            feedback:null,
        },
    }
  },
  methods: 
  {
    submitData(e){
        axios({
        method: "post",
        url: `https://library-backend-p75d.onrender.com/feedback/${this.$route.params.bookid}`,
        data: this.rate,
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((result) => {
          console.log(result.data)
          window.alert("feedback sent!")
          let dashurl = '/dashboard/' + this.rate.userid
          this.$router.push({path: dashurl})
        }).catch((err) => {
          console.log(this.rate)
          window.alert(err.response.data)
        });
        e.preventDefault();
    }
  }
};
</script>