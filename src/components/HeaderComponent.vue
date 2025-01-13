<template>
  <header>
    <ul>
      <li>
        <a class="zoom" href="#home"><div>{{this.$t('header.home')}}</div></a>
      </li>
      <li>
        <a class="zoom" href="#portfolio"><div>{{this.$t('header.portfolio')}}</div></a>
      </li>
      <li>
        <a class="zoom" href="#demoreel"><div>{{this.$t('header.demoreel')}}</div></a>
      </li>
      <li>
        <a class="zoom" href="#aboutMe"><div>{{this.$t('header.about')}}</div></a>
      </li>

<!--      <li>-->
<!--        <a class="zoom" href="#contact"><div>{{this.$t('header.contact')}}</div></a>-->
<!--      </li>-->

    </ul>
    <div id="languageSelector">
      <select @change="changeLanguage" :value="currentLanguage">
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      currentLanguage: this.$i18n.locale,
    };
  },
  methods: {
    changeLanguage(event) {
      const selectedLanguage = event.target.value;
      this.$i18n.locale = selectedLanguage; // Change la langue dans Vue I18n
      localStorage.setItem('language', selectedLanguage); // Sauvegarde la langue dans le localStorage
      window.location.reload();
    }
  }
};
</script>


<style>

header{
  height: 2vw;
  background-color: #4f4d49;
  display: flex;
  border-bottom: 1px solid #242424;
  box-shadow: 1px 1px 5px #242424;
  position: sticky;
  top: 0;
  justify-content: center;
  z-index: 1;
}

ul{
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  li{
    a{
      text-decoration: none;
      text-shadow: 1px 1px 2px rgba(120, 120, 120, 0.7); /* Ombre pour rendre le texte lisible */
      color: #dddddd;
      font-family: "Cambria",sans-serif;
      font-size: 0.9vw;
      text-transform: uppercase;
    }
    .zoom div {
      transition: filter 0.4s ease;
    }

    .zoom:hover div{
      filter: opacity(0.7);
    }

  }
}


</style>
