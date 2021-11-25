<template>
  <div>
    <UserAccount v-if="$route.name.includes('dashboard')" />
    <Nuxt />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  mounted () {
    this.checkCookies()
  },
  methods: {
    checkCookies () {
      if (Cookies.get('token') === undefined) {
        this.$router.push('/login')
        this.$toasted.error('Session expired.')
      }
    }
  }
}
</script>

<style>
body{
  background-color: #1D1D1D;
}
</style>
