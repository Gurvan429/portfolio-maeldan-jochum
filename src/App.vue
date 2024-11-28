<template>
  <div id="home" class="app">
    <HeaderComponent/>
    <section id="mainBanner">
      <img src="./assets/main_banner.png" alt="Main banner of the homepage">
      <span>
        <h1 id="name">{{this.$t("banner.name")}}</h1>
        <p id="job">{{this.$t("banner.job")}}</p>
      </span>
    </section>
    <div id="portfolio">
      <h1>{{this.$t("portfolio.title")}}</h1>
    </div>
    <div id="demoreel">
      <h1>{{this.$t("demoreel.title")}}</h1>
      <div class="videoContainer">
        <iframe src="https://player.vimeo.com/video/919982331" width="800" height="450" frameborder="0" allow="fullscreen;" allowfullscreen></iframe>
      </div>
    </div>
    <div id="aboutMe"></div>
    <div id="contact"></div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
// import SectionComponent from "@/components/SectionComponent.vue";

export default {
  name: 'App',
  components: {
    // SectionComponent,
    HeaderComponent,
  }
}

</script>

<style>

html{
  scroll-behavior: smooth;
  scroll-padding-top: 2vw;
}

body{
  margin: 0;
  list-style: none;
  text-decoration: none;
  background-color: #000000;
}



#mainBanner{
  height: 100%;
  img{
    width: 100vw;
    max-width: 100%;
    display: block;
  }
  span{
    position: absolute;
    right: 10vw;
    top: 5vw;
    font-family: "Cambria",sans-serif;
    color: #242424;
    z-index: 0;
    #name{
      text-shadow: 1px 1px 2px rgba(24, 24, 24, 0.7);
      font-weight: bold;
      font-size: 3vw;
      margin: 0;
    }
    #job{
      text-shadow: 1px 1px 2px rgba(24, 24, 24, 0.7);
      font-size: 2vw;
      margin: 0;
    }
  }
}

#portfolio{
  height: 50vw;
  background-color: #6a4b3c;
  display: flex;
  justify-content: center;
  h1{
    text-align: center;
    color: #EEEEEE;
    margin: 0;
    font-size: 2vw;
    padding: 1vw;
    text-transform: uppercase;
    font-weight: normal;
    height: 2vw;
    box-shadow: 0px 1px 0px 0px #a9a9a9;
  }
}

#demoreel{
  height: 30vw;
  background-color: #a8a8a8;
  background-image: linear-gradient(rgba(106, 75, 60, 0.5), rgba(82, 98, 82, 0.5)), url("./assets/simple-cardboard-texture-background.jpg");
  background-size: cover;
  h1{
    text-align: center;
    color: #000000;
    margin: 0;
    font-size: 2vw;
    padding: 1vw;
    text-transform: uppercase;
    font-weight: normal;
    height: 2vw;
  }
  .videoContainer{
    width: 800px;
    margin: auto;
  }
}

#aboutMe{
  height: 50vw;
  background-color: #526252;
  display: flex;
  justify-content: center;
}

#contact{
  height: 500px;
}

</style>
