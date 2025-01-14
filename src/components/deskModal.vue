<template>
  <div class="blocModale" v-if="show">
    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale">
      <div class="header">
        <h2>{{this.$t("desk.title")}}</h2>
        <div class="close-container" v-on:click="toggleModale">
          <div class="leftright"></div>
          <div class="rightleft"></div>
        </div>
      </div>
      <div class="main">
        <div id="content">
          <p id="intro">{{this.$t("desk.intro")}}</p>
          <img src="../assets/projects/desk/JOCHUM_Maeldan_3D1B_Bureau_Lighting_Jour.png" alt="">
          <img src="../assets/projects/desk/JOCHUM_Maeldan_3D1B_Bureau_Lighting_Nuit.png" alt="">
          <img src="../assets/projects/desk/Jochum_Maeldan_3D1B_Bureau_Modeling_Occlusion.png" alt="">
          <img src="../assets/projects/desk/Jochum_Maeldan_3D1B_Bureau_Modeling_Wireframe_On_Shaded.png" alt="">
          <img style="width: 97%" src="../assets/projects/desk/Planche_rendu.png" alt="">
          <div id="softwaresLogos">
            <img src="../assets/softwares_logos/logo_Maya.png" alt="">
            <img src="../assets/softwares_logos/logo_RenderMan.png" alt="">
            <img src="../assets/softwares_logos/logo_photoshop.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeskModal',
  props: ['show', 'toggleModale']
}
</script>

<style lang="scss" scoped>
.blocModale{
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 80%;
  margin: auto;
  font-family: "Cambria",sans-serif;

}

.overlay{
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.modale {
  height: 100%;
  width: 100%;
  background: #f1f1f1;
  color: #333;
  z-index: 10;
  top: 10%;
  border-radius: 1.2vw;
}

.header{
  background: #6a4b3c;
  width: 100%;
  height: 3vw;
  min-height: 50px;
  border-radius: 1vw 1vw 0 0;
  h2{
    padding: 0.5vw;
    font-size: 2vw;
  }
}

.main{
  background: #f1f1f1;
  width: 100%;
  height: 94%;
  border-radius: 0 0 1vw 1vw;
  overflow-y: auto; /* Permet le scroll vertical */
  overflow-x: hidden; /* Empêche le scroll horizontal */
}

#content{
  #intro{
    border-bottom: 1px solid black;
    padding: 1vw;
  }
  p{
    text-align:justify;
    padding: 0.5vw;
    margin: auto;
    font-size: 1.2vw;
  }
  width: 90%;
  margin: auto;
  img{
    width: 47%;
    margin: 1vw;
  }
  #softwaresLogos{
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    img{
      height: 64px;
      width: 64px;
    }
  }
}

// COLORS
$softorange: #F4A259;
$tomatored: #F25C66;
$mediumblu: #1E272D;

.close-container{
  position: absolute;
  top: 0;
  right: 10px;
  height: 48px;
  width: 48px;
  cursor: pointer;
}

.leftright{
  height: 4px;
  width: 50px;
  position: absolute;
  margin-top: 24px;
  background-color: $softorange;
  border-radius: 2px;
  transform: rotate(45deg);
  transition: all .3s ease-in;
}

.rightleft{
  height: 4px;
  width: 50px;
  position: absolute;
  margin-top: 24px;
  background-color: $softorange;
  border-radius: 2px;
  transform: rotate(-45deg);
  transition: all .3s ease-in;
}


.close-container:hover .leftright{
  transform: rotate(-45deg);
  background-color: $tomatored;
}
.close-container:hover .rightleft{
  transform: rotate(45deg);
  background-color: $tomatored;
}
.close-container:hover label{
  opacity: 1;
}

h2 {
  text-align: center;
  margin: 0;
  color: #f1f1f1;
  height: 100%;
  padding-top: 2px;
  font-size: 2.5vw;
}
</style>