<template>
  <div>
    <LoaderModal v-if="isLoading" />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  layout: 'dashboard',
  data () {
    return {
      isLoading: false
    }
  },
  head: {
    title: `Welcome ${Cookies.get('firstname') || 'dashboard'}`
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
