<template>
  <div class="blocModale" v-if="show">
    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale">
      <div class="header">
        <h2>{{this.$t("heroesLair.title")}}</h2>
        <div class="close-container" v-on:click="toggleModale">
          <div class="leftright"></div>
          <div class="rightleft"></div>
        </div>
      </div>
      <div class="main">
        <div id="intro">
          <p>{{this.$t("heroesLair.intro")}}</p>
          <div id="content">
            <iframe src="https://www.youtube.com/embed/mKOeI9c8l2s?si=eJ2IRY4uv1u-suFE" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <img src="../assets/projects/antre_hero/zoom_01.png" alt="">
            <img src="../assets/projects/antre_hero/zoom_02.png" alt="">
          </div>
          <p>{{this.$t("heroesLair.references")}}</p>
          <p>{{this.$t("heroesLair.production")}}</p>
          <p>{{this.$t("heroesLair.lightAndCompo")}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AntreHeroModal',
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
  overflow-y: auto;
  overflow-x: hidden;
}

#content{
  width: 90%;
  margin: auto;
  iframe{
    width: 97%;
    margin: 1vw;
    aspect-ratio: 16/9;
  }
  img{
    width: 47%;
    margin: 1vw;
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