<template>
  <div class="whole-bg-container">
    <div v-if="activeTab.includes('emailTab')" data-aos="zoom-in" data-aos-duration="500" class="hero-content">
      <h1 class="hero-title">
        Unlimited movies, TV shows and more.
      </h1>
      <p class="hero-subtitle">
        Watch anywhere. Cancel anytime.
      </p>
      <div class="signup-call-action">
        <p class="call-to-action-subtitle">
          Ready to explore? Enter your email to create or restart your membership.
        </p>
        <form @submit.prevent="verifyRegisteredEmail">
          <div class="input-form">
            <input v-model="email" type="email" placeholder="Email Address">
            <button v-if="!isLoading" type="submit" :disabled="email === ''">
              <span>Get Started</span>
            </button>
            <button v-if="isLoading">
              <loader-button />
            </button>
          </div>
          <div class="responsive-input-form">
            <button
              v-if="!isLoading"
              :disabled="email === ''"
              class="sign-in-button responsive"
              type="submit"
            >
              Get Started
            </button>
            <button v-if="isLoading" class="sign-in-button">
              <loader-button />
            </button>
          </div>
        </form>
      </div>
    </div>
    <div v-if="activeTab.includes('passwordTab')">
      <PasswordCard @createAccount="createAccount($event)" />
    </div>
    <div v-if="activeTab.includes('showLoader')">
      <LoaderModal />
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import loaderButton from './loaderButton.vue'
export default {
  components: { loaderButton },
  data () {
    return {
      email: '',
      activeTab: 'emailTab',
      linkToLogin: false,
      isLoading: false
    }
  },
  methods: {
    verifyRegisteredEmail () {
      this.isLoading = true
      this.$axios({
        method: 'GET',
        url: `/verify-existing-email?email=${this.email}`
      }).then((onfulfilled) => {
        this.isLoading = false
        if (!onfulfilled.data.isAlreadyRegistered) {
          this.activeTab = 'passwordTab'
        } else {
          this.$toasted.error(onfulfilled.data.message)
          this.$router.push(`/login?email=${this.email}`)
        }
      }).catch((onrejected) => {
        this.isLoading = false
        this.$toasted.error(onrejected.response.data.message || 'An Error Occurred')
      })
    },
    createAccount (userDetails) {
      this.activeTab = 'showLoader'
      this.$axios({
        method: 'POST',
        url: '/signup',
        headers: { 'Content-Type': 'application/json' },
        data: {
          firstname: userDetails.firstname,
          lastname: userDetails.lastname,
          password: userDetails.password,
          email: this.email
        }
      }).then((onfulfilled) => {
        this.activeTab = 'none'
        Cookies.set('firstname', onfulfilled.data.userData.firstname)
        Cookies.set('lastname', onfulfilled.data.userData.lastname)
        Cookies.set('email', onfulfilled.data.userData.email)
        Cookies.set('token', onfulfilled.data.userData.token)
        this.$router.push('/dashboard')
      }).catch((onrejected) => {
        this.activeTab = 'none'
        this.$toasted.error(onrejected.response.data.message || 'An Error Occurred')
      })
    }
  }
}
</script>

<style scoped>
.hero-content{
    padding: 30px;
    /* background: rebeccapurple; */
    width: 50%;
    color: white;
    text-align: center;
}
.hero-title{
    font-weight: bold;
    font-size: 64px;
    line-height: 70px;
}
.hero-subtitle{
    font-weight: normal;
    font-size: 26px;
    line-height: 33px;
    margin-top: 15px;
}
.signup-call-action{
    margin-top: 25px;
}
.call-to-action-subtitle{
    font-weight: 500;
    font-size: 16px;
}
.input-form{
    width: 90%;
    height: 70px;
    margin: 15px auto;
    display: flex;
}
.responsive-input-form{
  display: none;
}
.input-form input{
    padding-left: 20px;
    height: 70px;
    width: 65%;
    border: 0;
    font-size: 19px;
}
.input-form input:focus{
    outline: none;
}
.input-form input::placeholder{
    color: #8C8C8C;
    font-size: 16px;
}
.input-form button{
    height: 70px;
    width: 30%;
    border: 0;
    background: #E50914;
    color: white;
    font-size: 30px;
    line-height: 38px;
    cursor: pointer;
    white-space: nowrap;
}
.input-form button img{
    margin-left: 15px;
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
    margin-top: 0;
    cursor: pointer;
}
.sign-in-button:disabled{
    cursor: not-allowed;
    background: #e50914b9;
}
@media screen and (max-width: 1300px) {
  .hero-content{
    width: 70%;
  }
  .input-form{
    width: 100%;
}
}
@media screen and (max-width: 980px) {
  .hero-content{
    width: 70%;
  }
  .hero-title{
    font-weight: bold;
    font-size: 45px;
    line-height: 70px;
  }
  .input-form button{
    display: none
  }
  .input-form input{
    padding-left: 20px;
    height: 50px;
    width: 100%;
    border: 0;
    font-size: 19px;
  }
  .responsive-input-form{
    display: block;
  }
  @media screen and (max-width: 600px) {
    .input-form input{
    width: 100%;
    }
    .hero-content{
    width: 100%;
    }
  .hero-title{
    font-weight: bold;
    font-size: 32px;
    line-height: 50px;
    text-align: center;
    }
    .hero-subtitle{
    font-weight: normal;
    font-size: 20px;
    line-height: 33px;
    margin-top: 15px;
}
  }
}
</style>
