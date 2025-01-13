<template>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
  <div id="home" class="app">
    <HeaderComponent/>
    <section id="mainBanner">
      <img src="./assets/main_banner.png" alt="Main banner of the homepage">
      <span>
        <h1 id="name">{{this.$t("banner.name")}}</h1>
        <p id="job">{{this.$t("banner.job")}}</p>
      </span>
    </section>

    <section id="portfolio">
      <h1>{{this.$t("portfolio.title")}}</h1>

      <main class="carousel-container">
        <div class="carousel">
          <div class="item active">
            <reven-modal v-bind:show="show" v-bind:toggleModale="toggleModale"></reven-modal>
            <img v-on:click="toggleModale" src="./assets/projects/reven/Screenshot_1.png" alt="Image 1" />
          </div>
          <div class="item">
            <timelapse-modal v-bind:show="show" v-bind:toggleModale="toggleModale"></timelapse-modal>
            <img v-on:click="toggleModale" src="./assets/projects/timelapse/banniere.png" alt="Image 6" />
          </div>
          <div class="item">
            <insect-modal v-bind:show="show" v-bind:toggleModale="toggleModale"></insect-modal>
            <img v-on:click="toggleModale" src="./assets/projects/insecte/FG_Comp.png" alt="Image 2" />
            <p class="caption">Click to see more of the project</p>
          </div>
          <div class="item">
            <teapot-modal v-bind:show="show" v-bind:toggleModale="toggleModale"></teapot-modal>
            <img v-on:click="toggleModale" src="./assets/projects/teapot/Teapot_Comp.png" alt="Image 3" />
          </div>
          <div class="item">
            <anatomical-study-modal v-bind:show="show" v-bind:toggleModale="toggleModale"></anatomical-study-modal>
            <img v-on:click="toggleModale" src="./assets/projects/anatomical_study/Banniere.png" alt="Image 3" />
          </div>
          <div class="item">
            <camera-mapping-modal v-bind:show="show" v-bind:toggleModale="toggleModale"></camera-mapping-modal>
            <img v-on:click="toggleModale" src="./assets/projects/camera_mapping/Baniere.png" alt="Image 6" />
          </div>
          <div class="item">
            <antre-hero-modal v-bind:show="show" v-bind:toggleModale="toggleModale"></antre-hero-modal>
            <img v-on:click="toggleModale" src="./assets/projects/antre_hero/Jochum_Maeldan_Antre_Compo_Jour_02.png" alt="Image 4" />
          </div>
          <div class="item">
            <desk-modal v-bind:show="show" v-bind:toggleModale="toggleModale"></desk-modal>
            <img v-on:click="toggleModale" src="./assets/projects/desk/JOCHUM_Maeldan_3D1B_Bureau_Lighting_Jour.png" alt="Image 5" />
          </div>
          <div class="item">
            <breakfast-modal v-bind:show="show" v-bind:toggleModale="toggleModale"></breakfast-modal>
            <img v-on:click="toggleModale" src="./assets/projects/breakfast/liiight12.png" alt="Image 6" />
          </div>
        </div>

        <button class="btn prev"><i class="fa fa-arrow-left"></i></button>
        <button class="btn next"><i class="fa fa-arrow-right"></i></button>
        <div class="dots"></div>

      </main>
      <div id="tooltip">{{this.$t("portfolio.tooltip")}}</div>

    </section>
    <section id="parallax"></section>
    <section id="demoreel">
      <h1>{{this.$t("demoreel.title")}}</h1>
      <div class="videoContainer">
        <iframe src="https://player.vimeo.com/video/1040853509?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="fullscreen;" allowfullscreen></iframe>
      </div>
    </section>
    <section id="aboutMe">
      <div id="resume">
        <h1 id="name">{{this.$t("resume.title")}}</h1>
        <div id="resumeContent">
          <p>{{this.$t("resume.content1")}}</p>
          <p>{{this.$t("resume.content2")}}</p>
          <p>{{this.$t("resume.content3")}}</p>
          <p style="font-weight: bold">m.jochum@nts.ecolescreatives.com</p>
        </div>
        <div id="line"></div>
        <div id="socialLinks">
          <a href="http://www.linkedin.com/in/ma%C3%ABldan-jochum-b7a9a8266" target="_blank"><img src="./assets/linkedin_icon.png" alt="linkedin link"></a>
          <a href="http://artstation.com/maeldan_j" target="_blank"><img src="./assets/artstation__icon.png" alt="arstation link"></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import RevenModal from "@/components/revenModal.vue";
import AntreHeroModal from "@/components/antreHeroModal.vue";
import InsectModal from "@/components/insectModal.vue";
import TeapotModal from "@/components/teapotModal.vue";
import DeskModal from "@/components/deskModal.vue";
import BreakfastModal from "@/components/breakfastModal.vue";
import TimelapseModal from "@/components/timelapseModal.vue";
import CameraMappingModal from "@/components/cameraMappingModal.vue";
import AnatomicalStudyModal from "@/components/anatomicalStudyModal.vue";

export default {
  name: 'App',
  data() {
    return{
      show: false,
    }
  },
  components: {
    TimelapseModal,
    HeaderComponent,
    RevenModal,
    AntreHeroModal,
    InsectModal,
    TeapotModal,
    DeskModal,
    BreakfastModal,
    CameraMappingModal,
    AnatomicalStudyModal
  },
  methods: {
    toggleModale: function (){
      this.show = !this.show;
      if (!document.body.classList.contains("modal-open")){
        document.body.classList.add("modal-open")
      } else{
        document.body.classList.remove("modal-open")
      }
      console.log(document.body.classList)
    }
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

    document.addEventListener("DOMContentLoaded", function () {
      let carousel = document.querySelector(".carousel");
      let items = carousel.querySelectorAll(".item");
      let dotsContainer = document.querySelector(".dots");
      let tooltip = document.getElementById("tooltip");

      let tooltipTimeout; // Pour gérer le délai

      carousel.addEventListener("mouseover", () => {
        if (document.body.classList.contains("modal-open")) {
          return;
        }
        // Définir un délai avant d'afficher le tooltip
        tooltipTimeout = setTimeout(() => {
          tooltip.style.display = "block";
          tooltip.style.opacity = "1"; // Rendre visible avec transition
        }, 500); // Délai en millisecondes (ici, 500 ms)
      });

      carousel.addEventListener("mousemove", (e) => {
        if (document.body.classList.contains("modal-open")) {
          return;
        }
        // Calcule la position du tooltip à partir de la position de la souris
        const offsetX = 15; // Décalage horizontal pour éviter de chevaucher la souris
        const offsetY = 15; // Décalage vertical pour éviter de chevaucher la souris

        tooltip.style.left = `${e.pageX + offsetX}px`;
        tooltip.style.top = `${e.pageY + offsetY}px`;
      });

      carousel.addEventListener("mouseout", () => {
        tooltip.style.display = "none";
        clearTimeout(tooltipTimeout); // Empêche l'affichage si la souris sort avant le délai
      });

      items.forEach((_, index) => {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
      });

      let dots = document.querySelectorAll(".dot");

      function showItem(index) {
        items.forEach((item, idx) => {
          item.classList.remove("active");
          dots[idx].classList.remove("active");
          if (idx === index) {
            item.classList.add("active");
            dots[idx].classList.add("active");
          }
        });
      }

      // Event listeners for buttons
      document.querySelector(".prev").addEventListener("click", () => {
        let index = [...items].findIndex((item) =>
            item.classList.contains("active")
        );
        showItem((index - 1 + items.length) % items.length);
      });

      document.querySelector(".next").addEventListener("click", () => {
        let index = [...items].findIndex((item) =>
            item.classList.contains("active")
        );
        showItem((index + 1) % items.length);
      });

      // Event listeners for dots
      dots.forEach((dot) => {
        dot.addEventListener("click", () => {
          let index = parseInt(dot.dataset.index);
          showItem(index);
        });
      });
    });


  }
}

</script>

<style lang="scss">

html{
  scroll-behavior: smooth;
  scroll-padding-top: 2vw;
}

body{
  margin: 0;
  list-style: none;
  text-decoration: none;
  background-color: #000000;
  font-family: "Cambria",sans-serif;
}

body.modal-open {
  overflow: hidden; /* Désactive le défilement vertical */
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
  height: 48vw;
  background-color: #6a4b3c;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    text-align: center;
    color: #EEEEEE;
    margin: 0;
    font-size: 1.5vw;
    padding: 0.5vw;
    text-transform: uppercase;
    font-weight: normal;
    height: 1.5vw;
    width: 9vw;
    border-bottom: 1px solid white;
  }
}

#demoreel{
  height: 35vw;
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
    width: 50vw;
    margin: auto;
    iframe{
      width: 48vw;
      height: 27vw;
    }
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
  height: 33vw;
  background-color: #526252;
  border-top: black solid 1px;
  background-image: linear-gradient(rgba(82, 98, 82, 0.5), rgba(82, 98, 82, 0.8)), url("./assets/simple-cardboard-texture-background.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  #resume{
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;    margin: auto;
    width: 30%;
    height: 80%;
    background-color: white;
    h1{
      text-align: center;
      font-size: 1.5vw;
    }
    #resumeContent{
      margin: auto;
      width: 80%;
      font-size: 1vw;
      p{
        text-align: center;
      }
    }
    #line{
      margin: 1vw auto 1vw auto;
      background-color: black;
      width: 90%;
      height: 1px;
    }
    #socialLinks{
      margin-top: 0.5vw;
      display: flex;
      justify-content: center;
      a{
        img{
          width: 2vw;
          height: 2vw;
        }
        width: 2vw;
        height: 2vw;
        margin-right: 1vw;
        border: black 1px solid;
        border-radius: 15vw;
        padding: 0.5vw;
      }
    }
  }
}

/*----------------------------------------------------------------------------- carrousel */

.carousel-container {
  width: 75%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--lx-gap);



  .carousel {
    aspect-ratio: 16/9;
    width: 100%;
    position: relative;
    overflow: hidden;
    padding-bottom: 1vw;
    padding-top: 1vw;

    .item {
      opacity: 0;
      width: 100%;
      height: 100%;
      display: none;
      transition: opacity 0.5s ease-in-out;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      &.active {
        opacity: 1;
        display: block;
      }
    }
  }

  .btn {
    padding: 1em 2em;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    outline: none;
    border: none;
    cursor: pointer;
    color: #10100e;
    background-color: #ffffe6;
    transition: transform 0.2s ease-in-out;
    i{
      font-size: 1vw;
    }
    &:active,
    &:focus {
      transform: translateY(-50%) scale(0.9);
    }

    &:hover {
      transform: translateY(-50%) scale(0.96);
    }
  }

  .prev {
    left: -7%;
  }

  .next {
    right: -7%;
  }

  .dots {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .dot {
      cursor: pointer;
      height: 0.8vw;
      width: 0.8vw;
      background-color: #242421;
      transition: background-color 0.2s ease;
      border-radius: 50%;

      &.active,
      &:hover {
        background-color: #ffffe6;
      }
    }
  }
}

#tooltip {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 4px 8px; /* Taille réduite */
  border-radius: 3px; /* Bord plus petit */
  font-size: 1em;
  white-space: nowrap;
  display: none; /* Caché par défaut */
  pointer-events: none; /* Pour éviter de bloquer les événements souris */
  z-index: 1000;
  transform: translate(0, 0); /* Supprime les éventuels décalages */
  transition: opacity 0.2s ease; /* Animation d'apparition si besoin */
}


</style>
