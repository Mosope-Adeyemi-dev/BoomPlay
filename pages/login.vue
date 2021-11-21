<template>
  <div class="whole-bg-container">
    <div class="login-card" data-aos="zoom-in" data-aos-duration="500">
      <h2 class="login-card-title">
        Sign In
      </h2>
      <form @submit.prevent="login">
        <div class="input-forms">
          <div class="input-container">
            <input v-model="email" type="email" placeholder="Email address" autocomplete="off">
          </div>
          <div class="input-container">
            <input v-model="password" :type="visibilityState" placeholder="Password" autocomplete="off">
            <img v-if="visibilityState.includes('password')" src="~/assets/icon/show-password.svg" alt="password visibility" @click="togglePasswordVisibility">
            <img v-if="visibilityState.includes('text')" src="~/assets/icon/hide-password.svg" alt="password visibility" @click="togglePasswordVisibility">
          </div>
          <button
            v-if="!isLoading"
            :disabled="email === '' || password === ''"
            class="sign-in-button"
            type="submit"
          >
            Sign In
          </button>
          <button v-if="isLoading" class="sign-in-button">
            <LoaderButton />
          </button>
        </div>
      </form>

      <div class="call-to-actions">
        <small class="forgot-password">
          Forgot Password?
        </small>
        <p class="signup-call-action">
          New to BoomPlay Movies?&nbsp;
          <NuxtLink to="/sign-up">
            Sign up now.
          </NuxtLink>
        </p>
        <p class="bot-protection">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <NuxtLink to="" class="learn-more">
            Learn more.
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  layout: 'main',
  data () {
    return {
      visibilityState: 'password',
      email: `${this.$route.query.email || ''}`,
      password: '',
      isLoading: false
    }
  },
  methods: {
    togglePasswordVisibility () {
      this.visibilityState === 'password' ? this.visibilityState = 'text' : this.visibilityState = 'password'
    },
    login () {
      this.isLoading = true
      this.$axios({
        method: 'POST',
        url: '/login',
        data: {
          email: this.email,
          password: this.password
        }
      }).then((onfufilled) => {
        this.isLoading = false
        Cookies.set('email', onfufilled.data.userData.email)
        Cookies.set('firstname', onfufilled.data.userData.firstname)
        Cookies.set('lastname', onfufilled.data.userData.lastname)
        Cookies.set('uuid', onfufilled.data.userData.uuid)
        this.$router.push('/dashboard')
      }).catch((onrejected) => {
        this.isLoading = false
        this.$toasted.error(onrejected.response.data.message || 'An Error Occurred')
      })
    }
  }
}
</script>

<style scoped>
.login-card{
    padding: 60px 40px;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    height: fit-content;
    min-height: 500px;
    width: 450px;
}
.login-card-title{
    color: white;
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
}
.sign-in-button{
    width: 100%;
    height: 48px;
    border: 0;
    background: #E50914;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.55);
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    color: white;
    margin-top: 42px;
    cursor: pointer;
}
.sign-in-button:disabled{
    cursor: not-allowed;
    background: #e50914b9;
}
.input-forms{
    margin-top: 25px;
    width: 100%;
}
.input-forms .input-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #333333;
    border-radius: 4px;
    height: 50px;
    widows: 100%;
}
.input-forms .input-container img{
    cursor: pointer;
}
.input-forms .input-container input{
    height: 50px;
    width: 100%;
    background: #333333;
    border: 0;
    border-radius: 4px;
    padding-left: 15px;
    color: white;
    font-size: 16px;
}
.input-forms .input-container input::placeholder{
    color: #8C8C8C;
    font-size: 15px;
}
.input-forms .input-container input:focus{
    outline: none;
    background: #333333;
}
.input-forms .input-container:last-of-type{
    margin-top: 15px;
    padding-right: 15px;
}
.forgot-password{
    color: silver;
    margin-top: 15px;
    cursor: pointer;
}
.call-to-actions{
  margin-top: 20px;
  text-align: center;
}
.signup-call-action{
  margin-top: 50px;
  color: silver;
  font-size: 15px;
}
.signup-call-action a{
  color: white;
  font-weight: 600;
  font-size: 17px;
}
.bot-protection{
  margin-top: 30px;
  color: gray;
  font-size: 14px;
}
.bot-protection a{
  color: silver;
  text-decoration: underline;
}
</style>
