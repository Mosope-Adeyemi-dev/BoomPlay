<template>
  <div>
    <div class="main-container">
      <div class="props-container">
        <div data-aos="fade-right" data-aos-duration="1000" class="prop-text save extra-padding">
          <h2>Enjoy on your TV.</h2>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" class="prop-image">
          <img src="~/assets/image/tv-frame.png" alt="" class="tv-frame">
          <video autoplay playsinline muted loop class="tv-video">
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4">
          </video>
        </div>
      </div>
    </div>

    <div class="main-container">
      <div class="props-container">
        <div class="prop-image" data-aos="fade-right" data-aos-duration="1000">
          <img src="~/assets/image/phone-prop.png" alt="" class="phone-image">
          <div class="prop-card">
            <img src="~/assets/image/phone-prop-img.png" alt="">
            <div class="card-details">
              <p class="card-title">
                Stranger Things
              </p>
              <p class="card-status">
                Downloading...
              </p>
            </div>
            <img src="~/assets/Gif/download-icon.gif" alt="" class="download-gif">
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" class="prop-text">
          <h2>Download your shows to watch offline.</h2>
          <p>
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
    </div>
    <div class="main-container">
      <div class="props-container">
        <div class="prop-text save" data-aos="fade-right" data-aos-duration="1000">
          <h2>Create profiles for kids.</h2>
          <p>
            Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
          </p>
        </div>
        <div class="prop-image" data-aos="fade-left" data-aos-duration="1000">
          <img src="~/assets/image/props-kids.png" alt="" class="kids-prop">
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
.main-container{
  width: 100%;
  min-height: 466px;
  height: fit-content;
  border-top: 3px solid #222222;
  border-bottom: 3px solid #222222;
  padding: 20px;
}
.prop-text{
  flex-basis: 50%;
  width: 50%;
}
.extra-padding{
  padding-top: 60px;
}
.prop-text h2{
  font-weight: bold;
  font-size: 40px;
}
.prop-text p{
  margin-top: 18px;
  font-weight: normal;
  font-size: 22px;
  color: silver;
}
.tv-frame{
  position: absolute;
}
.tv-video{
  position: relative;
  width: 395px;
  margin-left: 61px;
  margin-top: 80px;
  z-index: -3;
}
.prop-card{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 331px;
  background: black;
  padding: 15px;
  position: absolute;
  margin-top: -130px;
  margin-left: 20px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  box-sizing: border-box;
  box-shadow: 0px 0px 32px #000000;
  border-radius: 12px;
}
.phone-image{
  position: relative;
  width: 500px;
  margin-left: -60px;
}
.download-gif{
  width: 46px;
  height: 46px;
}
.card-title{
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
}
.card-status{
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #0071EB;
  margin-top: 5px;
}
</style>
