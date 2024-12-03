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
      <div class="carousel">
        <div class="carousel-container">
          <img src="./assets/projects/reven/Screenshot_1.png" alt="Image 1">
          <img src="./assets/projects/antre_hero/Jochum_Maeldan_Antre_Brut_Jour_02.png" alt="Image 1">
          <img src="./assets/projects/breakfast/liiight12.png" alt="Image 1">
          <img src="./assets/projects/desk/JOCHUM_Maeldan_3D1B_Bureau_Lighting_Jour.png" alt="Image 1">
          <img src="./assets/projects/insecte/FG_Comp.png" alt="Image 1">
        </div>
      </div>
    </div>
    <div id="demoreel">
      <h1>{{this.$t("demoreel.title")}}</h1>
      <div class="videoContainer">
        <iframe src="https://player.vimeo.com/video/919982331" width="800" height="450" frameborder="0" allow="fullscreen;" allowfullscreen></iframe>
      </div>
    </div>
    <div id="parallax"></div>
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
  },
  mounted(){
    const parallax = document.querySelector('.parallax');
    if (parallax) {
      document.addEventListener('scroll', () => {const scrollTop = window.scrollY;
        parallax.style.backgroundPosition = `center ${scrollTop * 0.01}px`;
      });
    } else {
      console.error('Parallax element not found');
    }

    // script.js
    const carousel = document.querySelector('.carousel');
    // const carouselContainer = document.querySelector('.carousel-container');

    // Gestion de l'événement "wheel"
    carousel.addEventListener('wheel', (event) => {
      event.preventDefault(); // Empêche le défilement vertical par défaut
      const scrollAmount = event.deltaY; // Récupère la direction et la force du défilement

      // Ajuste la position de défilement horizontal du conteneur
      carousel.scrollLeft += scrollAmount;
    });


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
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); /* Soft shadow below the image */
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
    border-bottom: 1px solid white;
  }

  .carousel {
    width: 80%;
    max-width: 800px;
    height: 300px;
    overflow: hidden; /* Cache les parties débordantes */
    margin: 20px auto;
    border: 2px solid #ddd;
    position: relative;
    background-color: #fff;
  }

  .carousel-container {
    display: flex; /* Les images sont alignées horizontalement */
    height: 100%;
    transition: transform 0.2s ease; /* Optionnel : lissage du mouvement */
  }

  .carousel img {
    width: auto;
    height: 100%; /* Les images occupent toute la hauteur */
    flex-shrink: 0; /* Les images ne se réduisent pas */
    display: block;
    border-right: 1px solid #eee; /* Séparation visuelle */
  }
}

#demoreel{
  height: calc(600px + 0.2vw);
  background-color: #a8a8a8;
  background-image: linear-gradient(rgba(106, 75, 60, 0.5), rgba(82, 98, 82, 0.5)), url("./assets/simple-cardboard-texture-background.jpg");
  background-size: cover;
  border-top: 1px solid rgb(74, 51, 39);
  h1{
    text-align: center;
    color: #000000;
    margin: 0;
    margin-bottom: 1vw;
    padding: 1vw;
    text-transform: uppercase;
    font-weight: normal;
    height: 2vw;
    font-size: calc(20px + 1vw);
  }
  .videoContainer{
    width: 800px;
    margin: auto;
  }
}

#parallax {
  height: 30vw;
  background-image: url('./assets/projects/insecte/FG_Comp.png');
  background-attachment: fixed;
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: cover;
}

#aboutMe{
  height: 50vw;
  background-color: #526252;
  background-image: linear-gradient(rgba(82, 98, 82, 0.5), rgba(82, 98, 82, 0.8)), url("./assets/simple-cardboard-texture-background.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
}
</style>
