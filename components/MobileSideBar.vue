<template>
  <div class="responsive-side-bar">
    <div class="close-sidebar" data-aos="fade-left" @click="$emit('close-sidebar')">
      <img src="~/assets/icon/close-menu.svg" alt="close icon" @click="$emit('close-sidebar')">
    </div>
    <div class="menu-content" @click="$emit('close-sidebar')">
      <div class="logo-div">
        <NuxtLink to="/dashboard" class="item-icon">
          <img src="~/assets/image/boomplay-logo.png" class="boomplay-logo" alt="boom play logo">
        </NuxtLink>
      </div>
      <div class="all-icons">
        <div class="button-icons">
          <div class="sidebar-item" @click="$router.push('/dashboard')">
            <p to="/dashboard" class="item-icon">
              <img src="~/assets/icon/home-icon.svg" alt="home icon">
            </p>
            <span>
              Dashboard
            </span>
          </div>
          <div class="sidebar-item" @click="$router.push('/dashboard/#movie-grid')">
            <p to="" class="item-icon">
              <img src="~/assets/icon/movie-grid.svg" alt="movies icon">
            </p>
            <span>
              Movies
            </span>
          </div>
          <div class="sidebar-item">
            <p to="">
              <img src="~/assets/icon/favorite-icon.svg" alt="star icon">
            </p>
            <span>
              Favorites
            </span>
          </div>
          <div class="section-1 sidebar-item">
            <button class="log-out" @click="signOut">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'MobileSideBar',
  methods: {
    signOut () {
      this.$router.push('/')
      Cookies.remove('token')
    }
  }
}
</script>

<style scoped>
.responsive-side-bar{
    position: fixed;
    height: 100vh;
    width: 100%;
    background: rgba(255, 255, 255, 0.151);
    backdrop-filter: blur(2px);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 6;
}
.button-icons{
    margin-top: 10%;
    display: grid;
    grid-template-rows: repeat(3, auto);
    row-gap: 30px;
}
.logo-div{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu-content{
    width: 260px;
    height: 100vh;
    z-index: 4;
    background: black;
    top: 0;
    position: fixed;
    padding-top: 20px;
    background: rgba(29, 29, 29, 0.973);
    box-shadow: 0px 40px 40px 8px rgba(0, 0, 0, 0.16);
    backdrop-filter: blur(24px);
}
.sidebar-item{
    width: 100%;
    height: 50px;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    color: white;
    font-size: 20px;
}
.sidebar-item span{
    margin-left: 15px;
}
.sidebar-item:hover{
    background-color: gray;
}
.log-out {
    display: grid;
    grid-template-columns: auto;
    align-items: center;
    background: #E50914;
    width: 100%;
    height: 36px;
    border: 0;
    cursor: pointer;
    color: white;
    font-size: 18px;
    font-weight: 400;
    border-radius: 3px;
    margin: auto;
}
.close-sidebar{
    position: relative;
    right: 15px;
    z-index: 7;
    float: right;
    background-color: red;
    top: 10px;
    display: flex;
      justify-content: center;
      align-items: center;
      /* position: fixed; */
      /* right: 100px; */
      width: 40px;
      height: 40px;
      border-radius: 25px;
      background: rgba(255, 255, 255, 0.13);
      cursor: pointer;
}
</style>
