<template>
  <div>
    <DashboardSideBar />
    <CarouselSlider />
    <div class="movie-sections">
      <NewReleases />
      <TvShows />
      <UpcomingMovies />
    </div>
    <LoaderModal v-if="isLoading" />
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data () {
    return {
      isLoading: false
    }
  }
}
</script>

<style scoped>
.movie-sections{
    z-index: 2;
    margin-top: 60vh;
    height: fit-content;
    padding: 10px 0 10px;
    position: relative;
    background: #1D1D1D;
}
</style>
