<template>
  <div>
    <MobileSideBar v-if="sideBarVisible" class="mobile-side-bar" @close-sidebar="sideBarVisible = false" />
    <DashboardSideBar class="side-bar" />
    <UserAccount @show-sidebar="sideBarVisible = true" />
    <Nuxt />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      sideBarVisible: false
    }
  },
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
.mobile-side-bar{
  display: none;
}
@media screen and (max-width: 800px) {
  .side-bar{
    visibility: hidden;
  }
  .mobile-side-bar{
    display: block;
  }
}
</style>
