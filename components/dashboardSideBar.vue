<template>
  <div>
    <div class="side-bar">
      <div class="all-icons">
        <div class="sidebar-item logo-div">
          <NuxtLink to="/dashboard" class="item-icon">
            <img src="~/assets/image/boomplay-logo.png" class="boomplay-logo" alt="boom play logo">
          </NuxtLink>
        </div>
        <div class="button-icons">
          <div class="sidebar-item">
            <NuxtLink to="/dashboard" class="item-icon">
              <img src="~/assets/icon/home-icon.svg" alt="">
            </NuxtLink>
          </div>
          <div class="sidebar-item">
            <NuxtLink to="/dashboard/#movie-grid" class="item-icon">
              <img src="~/assets/icon/movie-grid.svg" alt="">
            </NuxtLink>
          </div>
          <div class="sidebar-item">
            <NuxtLink to="">
              <img src="~/assets/icon/favorite-icon.svg" alt="">
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.side-bar{
    width: 70px;
    height: 100vh;
    z-index: 4;
    background: black;
    top: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    padding-top: 40px;
    background: rgba(29, 29, 29, 0.5);
    box-shadow: 0px 40px 40px 8px rgba(0, 0, 0, 0.16);
    backdrop-filter: blur(24px);
}
.button-icons{
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 64px;
}
.boomplay-logo{
    width: 45px;
}
.sidebar-item{
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
}
.sidebar-item:hover{
    background: rgba(255, 255, 255, 0.185);
}
</style>
