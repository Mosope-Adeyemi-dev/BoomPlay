<template>
  <div class="hero-container">
    <div class="hero-content">
      <p class="pill">
        Science Fiction
      </p>
      <h3 class="title">
        Godzilla vs. Kong
      </h3>
      <p class="description">
        In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.
      </p>
      <button class="watch-now-btn">
        More Info
      </button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.hero-container{
    height: 60vh;
    width: 100%;
    top: 0;
    position: fixed;
    /* z-index: -2; */
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.37), rgba(0, 0, 0, 0.137)), url('assets/image/no1-movie.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
}
.hero-content{
    width: 700px;
    margin-left: 12%;
}
.title{
    font-weight: 600;
    font-size: 60px;
    line-height: 64px;
    color: white;
    margin-top: 10px;
}
.description{
    margin-top: 16px;
    width: 95%;
    color: rgba(255, 255, 255, 0.884);
    font-size: 16px;
    line-height: 32px;
}
.watch-now-btn{
    margin-top: 20px;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    height: 50px;
    width: 200px;
    border: 0;
    border-radius: 2em;
    cursor: pointer;
    color: #FFFFFF;
    text-shadow: 0px 40px 40px rgba(0, 0, 0, 0.12);
    background: rgba(0, 0, 0, 0.281);
}
.watch-now-btn:hover{
    background: linear-gradient(135.87deg, #0FEFFD 1.25%, #FF00F5 51.73%, rgba(15, 239, 253, 0.22) 77.22%);;
}
@media screen and (max-width: 800px) {
  .hero-container{
    min-height: 70vh;
    height: fit-content;
    padding-bottom: 30px;
}
  .hero-content{
    width: 90%;
    margin: auto;
}
  .title{
    font-size: 40px;
}
.description{
    width: 100%;
    color: white;
    line-height: 30px;
}
.watch-now-btn{
    width: 100%;
}
}
/* @media screen and (max-width: 800px) {
  .title{
    font-size: 40px;
}
.description{
    width: 100%;
    color: white;
    line-height: 30px;
}
} */
</style>
