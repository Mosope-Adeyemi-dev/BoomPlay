import Vue from 'vue'

import Toasted from 'vue-toasted'

const options = {
  duration: 4000,

  keepOnHover: true,
  action: {
    text: 'Close',
    onClick: (e, toastObject) => {
      toastObject.goAway(0)
    }
  }
}

if (process.browser) {
  Vue.use(Toasted, options)
}
