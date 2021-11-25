<template>
  <div data-aos="fade-left" class="whole-account-section">
    <h5 class="firstname">
      <i>welcome</i>, {{ firstname }}
    </h5>
    <div class="user-account">
      <img class="user-icon" src="~/assets/icon/user-account.svg" alt="">
    </div>
    <button class="log-out" @click="signOut">
      <img src="~/assets/icon/logout.svg" alt="log out">
      Sign Out
    </button>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      firstname: `${Cookies.get('firstname')}`
    }
  },
  methods: {
    signOut () {
      this.$router.push('/')
      Cookies.set('token', undefined)
    }
  }
}
</script>

<style scoped>
.whole-account-section{
  position: fixed;
  z-index: 2;
  top: 10px;
  right: 30px;
  display: grid;
  column-gap: 20px;
  /* justify-content: space-between; */
  align-items: center;
  grid-template-columns: repeat(3, auto);
  /* background: red; */
  /* width: 300px;
  height: 300px; */
}
.user-account{
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
.user-icon{
  width: 20px;
}
.user-account:hover, .user-icon:hover{
  transform: scale(1.05);
}
.firstname{
  /* color: silver; */
  color: white;
  font-size: 18px;
  font-weight: 500;
}
.log-out{
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
</style>
