<template>
  <nav :class="['nav-bar', { 'change-nav-background': !topOfPage}]">
    <div class="nav-logo">
      <img src="~/assets/icon/nav-logo.svg" alt="boom play logo" @click="$router.push('/')">
    </div>
    <div v-if="$route.name.includes('sign-up')" class="nav-actions">
      <button class="select-language">
        <img src="~/assets/icon/earth-icon.png" alt="earth icon">
        <select name="language">
          <option value="English">
            English
          </option>
        </select>
      </button>
      <button class="sign-in-button" @click="$router.push('/login')">
        Sign In
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      topOfPage: true
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll () {
      // this.scrollPosition = window.scrollY
      if (window.pageYOffset > 0) {
        if (this.topOfPage) {
          this.topOfPage = false
        }
      } else if (!this.topOfPage) {
        this.topOfPage = true
      }
    }
  }
}
</script>

<style scoped>
  .nav-bar {
    /* background: rgba(0, 0, 0, 0.4); */
    /* background: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.945) 90%);
    background-image: -moz-linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.945) 90%);
    background-image: -o-linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.945) 90%); */
    /* background: -webkit-linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.945) 90%); */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    z-index: 2;
    position: fixed;
    width: 100%;
  }
  .change-nav-background{
    background: black;
  }
  .nav-logo {
    display: flex;
    align-items: center;
  }
  .nav-logo img {
    width: 50px;
    cursor: pointer;
  }
  .nav-actions {
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 20px;
    justify-content: space-between;
  }
  .nav-actions.flex-end{
    justify-content: flex-end;
  }
  .select-language {
    background: transparent;
    height: 35px;
    width: 130px;
    border: 1px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-radius: 2px;
    /* color: white; */
  }
  .select-language select {
    color: white;
    background: transparent;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("~/assets/icon/down-arrow.png");
    background-repeat: no-repeat;
    background-position: center right;
    width: 80%;
    cursor: pointer;
  }
  .select-language select:focus {
    outline: none;
    border: 0;
  }
  .sign-in-button {
    background: #E50914;
    width: 85px;
    height: 36px;
    border: 0;
    cursor: pointer;
    color: white;
    font-size: 16;
    font-weight: 400;
    border-radius: 3px;
  }
  @media screen and (max-width: 600px) {
  .select-language{
    visibility: hidden;
  }
  .nav-bar {
    padding: 10px 20px;
  }
}
</style>
