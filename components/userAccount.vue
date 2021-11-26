<template>
  <div data-aos="fade-left" class="whole-account-section">
    <div v-if="$route.name.includes('dashboard')" class="section-1">
      <h5 class="firstname">
        <i>Hi</i>, {{ firstname }}
      </h5>
      <div class="user-account">
        <img class="user-icon" src="~/assets/icon/user-account.svg" alt="">
      </div>
      <button class="log-out" @click="signOut">
        <img src="~/assets/icon/logout.svg" alt="log out">
        Sign Out
      </button>
    </div>
    <div v-if="$route.name.includes('dashboard')" class="menu-icon user-account" @click="$emit('show-sidebar')">
      <img src="~/assets/icon/menu-icon-white.svg" alt="">
    </div>
    <div v-if="$route.name.includes('tv-shows')" class="menu-icon user-account" @click="$emit('show-sidebar')">
      <img src="~/assets/icon/menu-icon.svg" alt="">
    </div>
    <div v-if="$route.name.includes('movies')" class="menu-icon user-account" @click="$emit('show-sidebar')">
      <img src="~/assets/icon/menu-icon.svg" alt="">
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      firstname: `${Cookies.get('firstname')}`,
      sideBarVisibility: false
    }
  },
  methods: {
    signOut () {
      this.$router.push('/')
      Cookies.remove('token')
    }
  }
}
</script>

<style scoped>
  .whole-account-section {
    position: fixed;
    z-index: 1;
    top: 10px;
    right: 30px;
    width: fit-content;
  }
  .back {
    left: 0;
  }
  .section-1 {
    display: grid;
    column-gap: 20px;
    align-items: center;
    grid-template-columns: repeat(3, auto);
  }
  .menu-icon.user-account {
    display: none;
  }
  .user-account {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.13);
    cursor: pointer;
  }
  .user-icon {
    width: 20px;
  }
  .user-account:hover,
  .user-icon:hover {
    transform: scale(1.05);
  }
  .firstname {
    color: white;
    font-size: 18px;
    font-weight: 500;
  }
  .log-out {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    background: #E50914;
    width: 120px;
    height: 36px;
    border: 0;
    cursor: pointer;
    color: white;
    font-size: 16;
    font-weight: 400;
    border-radius: 3px;
  }
  @media screen and (max-width: 800px) {
    .section-1 {
      display: none;
    }
    .menu-icon.user-account {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 25px;
      background: rgba(255, 255, 255, 0.13);
      cursor: pointer;
    }
    .whole-account-section {
      right: 15px;
    }
  }
</style>
