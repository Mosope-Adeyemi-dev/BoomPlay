<template>
  <div>
    <div class="login-card" data-aos="fade-left" data-aos-duration="800">
      <h2 class="login-card-title">
        Account Setup
      </h2>
      <form @submit.prevent="sendValues">
        <div class="input-forms">
          <div class="name-section">
            <input v-model="firstname" type="text" placeholder="Firstname">
            <input v-model="lastname" type="text" placeholder="Lastname">
          </div>
          <div class="input-container">
            <input v-model="password" :type="passwordVisibilityState" placeholder="Password" autocomplete="off">
            <img v-if="passwordVisibilityState.includes('password')" src="~/assets/icon/show-password.svg" alt="password visibility" @click="togglePasswordVisibility">
            <img v-if="passwordVisibilityState.includes('text')" src="~/assets/icon/hide-password.svg" alt="password visibility" @click="togglePasswordVisibility">
          </div>
          <div :class="['input-container', password === confirmPassword ? '': 'error-for-input']">
            <input v-model="confirmPassword" :type="confirmPasswordVisibilityState" placeholder="Confirm Password" autocomplete="off">
            <img v-if="confirmPasswordVisibilityState.includes('password')" src="~/assets/icon/show-password.svg" alt="password visibility" @click="toggleConfirmPasswordVisibility">
            <img v-if="confirmPasswordVisibilityState.includes('text')" src="~/assets/icon/hide-password.svg" alt="password visibility" @click="toggleConfirmPasswordVisibility">
          </div>
          <button
            type="submit"
            class="sign-in-button"
            :disabled="lastname === '' ||
              firstname === '' ||
              password === '' ||
              confirmPassword === '' ||
              password != confirmPassword"
          >
            Set Password
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      passwordVisibilityState: 'password',
      confirmPasswordVisibilityState: 'password',
      password: '',
      confirmPassword: '',
      lastname: '',
      firstname: '',
      emptyInputsFilled: false
    }
  },
  methods: {
    togglePasswordVisibility () {
      this.passwordVisibilityState === 'password' ? this.passwordVisibilityState = 'text' : this.passwordVisibilityState = 'password'
    },
    toggleConfirmPasswordVisibility () {
      this.confirmPasswordVisibilityState === 'password' ? this.confirmPasswordVisibilityState = 'text' : this.confirmPasswordVisibilityState = 'password'
    },
    sendValues () {
      const userDetails = {
        lastname: this.lastname,
        firstname: this.firstname,
        password: this.password
      }
      this.$emit('createAccount', userDetails)
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
.input-forms .input-container{
    margin-top: 15px;
    padding-right: 15px;
}
.error-for-input{
    border: 2px solid red;
}
.name-section{
    display: flex;
    justify-content: space-between;
}
.name-section input{
    height: 50px;
    width: 48%;
    background: #333333;
    border: 0;
    border-radius: 4px;
    padding-left: 15px;
    color: white;
    font-size: 16px;
}
.name-section input::placeholder{
    color: #8C8C8C;
    font-size: 15px;
}
.name-section input:focus{
    outline: none;
    background: #333333;
}
@media screen and (max-width: 600px) {
  .login-card{
    padding: 60px 15px;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    height: fit-content;
    width: 100%;
    margin: auto;
}
}
</style>
