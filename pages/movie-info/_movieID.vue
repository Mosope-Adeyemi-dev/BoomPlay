<template>
  <div>
    <DashboardSideBar />
    <div class="movie-details-container">
      <div class="movie-details">
        <img src="https://image.tmdb.org/t/p/w300/70nxSw3mFBsGmtkvcs91PbjerwD.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: true
    }
  }
}
</script>

<style scoped>
.banner-section{
    width: 60%;
    /* background: rebeccapurple; */
    height: 40vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
