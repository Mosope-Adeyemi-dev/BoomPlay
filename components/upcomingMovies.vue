<template>
  <div class="whole-carousel">
    <h2 class="section-title">
      Trending movies
      <img src="~/assets/icon/right-arrow.svg" alt="">
    </h2>
    <div v-if="!isLoading" class="carousel-cards">
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="carousel-card"
        :style="`background: linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 0.8) 80.79%), url('https://image.tmdb.org/t/p/w300/${movie.poster_path}');`"
        @mouseover="showThis=movie.id"
        @mouseleave="showThis=''"
      >
        <div class="quiclk-info">
          <p class="pill">
            Rating {{ movie.vote_average }}
          </p>
          <h3 class="movie-title">
            {{ movie.title }}
          </h3>
          <p v-if="showThis === movie.id" class="short-description" data-aos="fade-up">
            {{ movie.overview.slice(0, 100) }}...
            <button class="more-info" @click="$router.push(`/movies/${movie.id}`)">
              More info
            </button>
          </p>
        </div>
      </div>
    </div>
    <div v-if="isLoading" class="carousel-cards">
      <LoaderButton />
    </div>
    <div v-if="!isLoading && error.state === true" class="no-data-state">
      {{ error.message }}
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      isLoading: true,
      movies: [],
      page: '',
      showMoreInfo: false,
      showThis: '',
      error: {}
    }
  },
  mounted () {
    this.getNowPlayingMovies()
  },
  methods: {
    getNowPlayingMovies () {
      this.isLoading = true
      this.$axios({
        url: `/movies/upcoming?page=${this.page || 1}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((onfufilled) => {
        this.isLoading = false
        if (!onfufilled.data.error) {
          this.movies = onfufilled.data.movies
          this.page = onfufilled.data.currentPage
          this.genres = onfufilled.data.genreList
        } else {
          this.error = {
            state: true,
            message: onfufilled.data.message
          }
        }
      }).catch((onrejected) => {
        this.isLoading = false
        this.$toasted.error('An Error Occurred')
      })
    }
  }
}
</script>

<style scoped>
.carousel-card{
    background-repeat: no-repeat;
    background-position: center;
    min-width: 290px;
    width: 300px;
    height: 400px;
    display: flex;
    position: relative;
    margin-right: 20px;
    transition: all 1s;
}
.carousel-card:hover, .carousel-card:focus{
    transform: scale(1.08);
}
.whole-carousel{
    padding-top: 25px;
    padding-left: 80px;
    padding-bottom: 10px;
}
.quiclk-info{
    width: 100%;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
    padding: 15px;
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
    align-items: center;
}
.carousel-cards{
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    min-height: 400px;
}
::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
@media screen and (max-width: 800px) {
  .whole-carousel{
    padding-top: 25px;
    padding-left: 15px;
    padding-bottom: 10px;
}
.carousel-card{
    background-repeat: no-repeat;
    background-position: center;
    min-width: 290px;
    width: 300px;
    height: 400px;
    display: flex;
    position: relative;
    margin-right: 20px;
    transition: all 1s;
}
}
</style>
