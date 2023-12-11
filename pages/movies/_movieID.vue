<template>
  <div>
    <div v-if="!detailsLoading && movieDetails.title" class="movie-details-container">
      <div class="movie-details">
        <div class="image-section">
          <img class="movie-poster" :src="`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`" alt="">
          <button class="watchlist-button">
            Add to watchlist
          </button>
        </div>
        <div class="details-section">
          <h1 class="show-title">
            {{ movieDetails.title }}
          </h1>
          <div v-if="movieDetails.genres" class="movie-genre">
            <span v-for="genre in movieDetails.genres.slice(0, 2)" :key="genre.id" class="pill">
              {{ genre.name }}
            </span>
          </div>
          <p class="movie-rating">
            <img class="imdb-logo" src="~/assets/icon/imdb-logo.svg" alt="imdb logo">
            {{ movieDetails.vote_average }} / 10.0
          </p>
          <div v-if="movieDetails.overview" class="movie-description">
            <h3>Overview</h3>
            <p class="description-text">
              {{ movieDetails.overview }}
            </p>
          </div>
          <div v-if="movieDetails.tagline" class="info-section">
            <h3>Tagline</h3>
            <p>
              {{ movieDetails.tagline }}
            </p>
          </div>
          <div class="grid-system">
            <div class="info-section">
              <h3>Guidance</h3>
              <p v-if="movieDetails.adult === true">
                PG 18+
              </p>
              <p v-if="movieDetails.adult === false">
                PG 13+
              </p>
            </div>
            <div v-if="movieDetails.release_date" class="info-section">
              <h3>Release date</h3>
              <p class="movie-release-date">
                {{ movieDetails.release_date }}
              </p>
            </div>
            <div v-if="movieDetails.homepage" class="info-section">
              <h3>Homepage</h3>
              <a :href="movieDetails.homepage" target="blank" class="official-website">
                Click here.
              </a>
            </div>
            <div v-if="movieDetails.revenue" class="info-section">
              <h3>Revenue</h3>
              <p>
                {{ formatDollar(movieDetails.revenue) }}
              </p>
            </div>
            <div v-if="movieDetails.budget" class="info-section">
              <h3>Budget</h3>
              <p>
                {{ formatDollar(movieDetails.budget) }}
              </p>
            </div>
            <div v-if="movieDetails.production_companies" class="info-section">
              <h3>Production company</h3>
              <ul class="list">
                <li v-for="company in movieDetails.production_companies.slice(0, 3)" :key="company.id">
                  {{ company.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!detailsLoading && !movieDetails.title" class="no-data-state">
      Movie with requested ID does not exist.
      <NuxtLink to="/dashboard">
        Back to Dashboard
      </NuxtLink>
    </div>
    <div v-if="!isLoading && movies.length > 0" class="recommendations-section">
      <div class="top-section">
        <h2 class="section-title">
          Similar movies
          <img src="~/assets/icon/right-arrow.svg" alt="">
        </h2>
      </div>
      <div class="recommendations">
        <div
          v-for="movie in movies.slice(0, 15)"
          :key="movie.id"
          class="carousel-card"
          :style="`background-image: linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 0.8) 80.79%), url('https://image.tmdb.org/t/p/w400/${movie.poster_path}');`"
          @mouseover="showThis=movie.id"
          @mouseleave="showThis=''"
        >
          <div class="quiclk-info">
            <p class="pill">
              Rating {{ movie.vote_average.toFixed(1) }}
            </p>
            <h3 class="movie-title">
              {{ movie.title }}
            </h3>
            <p v-if="showThis === movie.id" class="short-description" data-aos="fade-up">
              {{ movie.overview.slice(0, 200) }}...
              <button class="more-info" @click="$router.push(`/movies/${movie.id}`)">
                More info
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isLoading" class="load-state">
      <LoaderButton />
    </div>
    <div v-if="!isLoading && error.state === true" class="no-data-state">
      <!-- {{ error.message }} -->
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  layout: 'dashboard',
  data () {
    return {
      detailsLoading: true,
      isLoading: true,
      movieID: `${this.$route.params.movieID}`,
      movieDetails: {},
      movies: [],
      showThis: '',
      error: {}
    }
  },
  mounted () {
    this.getMovieDetails()
    this.getMovieRecommendation()
  },
  methods: {
    getMovieDetails () {
      this.$axios({
        url: `/movies/details?movieID=${this.movieID}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((onfulfilled) => {
        this.detailsLoading = false
        this.movieDetails = onfulfilled.data.movieDetails
      }).catch((onrejected) => {
        this.detailsLoading = false
        this.$toasted.error(onrejected.response.data.message)
      })
    },
    formatDollar (num) {
      return '$' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
    getMovieRecommendation () {
      this.isLoading = true
      this.$axios({
        url: `/movies/recommendations?page=${this.page || 1}&movieID=${this.movieID}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((onfulfilled) => {
        this.isLoading = false
        if (!onfulfilled.data.error) {
          this.movies = onfulfilled.data.movies
        } else {
          this.error = {
            state: true,
            message: onfulfilled.data.message
          }
        }
      }).catch((onrejected) => {
        this.isLoading = false
        this.error = {
          state: true,
          message: 'Service Unavailable'
        }
      })
    }
  }
}
</script>

<style scoped>
.movie-details-container{
  min-height: 80vh;
  height: fit-content;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  border-bottom: 3px solid rgb(44, 42, 42);
  padding: 40px 0 20px;
}
.movie-details{
  width: 80%;
  margin: auto;
  column-gap: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.image-section{
  width: 350px;
}
.movie-poster{
  border-radius: 10px;
  height: 500px;
  width: 350px;
}
.watchlist-button{
  width: 100%;
  height: 64px;
  background: #E50914;
  border-radius: 10px;
  border: 0;
  color: white;
  font-weight: 600;
  margin-top: 15px;
  font-size: 18px;
  cursor: pointer;
}
.details-section{
  width: 60%;
  /* background: chocolate; */
}
.show-title{
  font-weight: bold;
  font-size: 50px;
  line-height: 90px;
  color: black;
}
.movie-genre{
  margin-top: 5px;
  display: flex;
}
.movie-genre .pill{
  margin-right: 15px;
}
.movie-rating{
  display: flex;
  width: 200px;
  align-items: center;
  font-size: 19px;
  font-weight: 600;
  margin-top: 20px;
}
.imdb-logo{
  width: 60px;
  margin-right: 10px;
}
.movie-description{
  margin-top: 35px;
}
.info-section{
  margin-top: 5px;
}
.grid-system{
  display: grid;
  grid-template-columns: auto auto auto;
  text-align: left;
  margin-top: 10px;
}
.official-website{
  color: blue;
}
.list{
  padding-left: 17px;
}
/* recommendations  */
.carousel-card{
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-width: 350px;
    width: 400px;
    height: 450px;
    display: flex;
    position: relative;
    margin-right: 20px;
    transition: all 1s;
}
.carousel-card:hover, .carousel-card:focus{
    transform-origin: top bottom;
    transform: scale(1.05);
}
.quiclk-info{
    width: 100%;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
    padding: 20px;
}
.section-title{
    width: 200px;
    color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 25px;
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
}
.recommendations{
    display: grid;
    grid-template-columns: repeat(3, auto);
    row-gap: 20px;
    overflow-x: auto;
    overflow-y: hidden;
}
.recommendations-section{
    width: fit-content;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;
}
.recommendations-section h2{
  color: white;
}
::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
@media screen and (max-width: 1430px) {
  .recommendations{
    display: grid;
    grid-template-columns: repeat(2, auto);
    row-gap: 20px;
    overflow-x: auto;
    overflow-y: hidden;
}
}
@media screen and (max-width: 1200px) {
.show-title{
  font-size: 40px;
  line-height: 50px;
}
.image-section{
  display: none;
}
.details-section{
  width: 100%;
  margin: auto;
}
}
@media screen and (max-width: 1000px) {
   .recommendations{
    display: grid;
    grid-template-columns: repeat(2, auto);
    row-gap: 20px;
    overflow-x: auto;
    overflow-y: hidden;
}  .carousel-card{
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-width: 300px;
    width: 300px;
    height: 350px;
    display: flex;
    position: relative;
    margin-right: 20px;
    transition: all 1s;
}
}
@media screen and (max-width: 800px) {
  .recommendations{
    display: grid;
    grid-template-columns: repeat(1, auto);
    row-gap: 20px;
    overflow-x: auto;
    overflow-y: hidden;
}

.movie-details{
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
}
.grid-system{
  grid-template-columns: auto auto;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 30px;
}
}
@media screen and (max-width: 400px) {
  .grid-system{
  grid-template-columns: auto;
}

.image-section{
  display: block;
}
.movie-poster{
  border-radius: 10px;
  height: 400px;
  width: 100%;
}
}
</style>
