<template>
  <header>
    <ul>
      <li>
        <a class="zoom" href="#"><div>{{this.$t('header.portfolio')}}</div></a>
      </li>
      <li>
        <a class="zoom" href="#"><div>{{this.$t('header.about')}}</div></a>
      </li>
      <li>
        <a class="zoom" href="#">
          <div>
            <img src="../assets/home.png" alt="Logo" />
          </div>
        </a>
      </li>
      <li>
        <a class="zoom" href="#"><div>{{this.$t('header.contact')}}</div></a>
      </li>
      <li>
        <a class="zoom" href="#"><div>{{this.$t('header.demoreel')}}</div></a>
      </li>
    </ul>
    <div>
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
  height: 50px;
  background-color: #242424;
  display: flex;
  border-bottom: 1px solid black;
  box-shadow: 0px 0px 5px black;
  position: sticky;
  top: 0;
  justify-content: space-between;
}

.name{
  margin: 1rem;
  font-size: 1.5rem;
}

ul{
  list-style: none;
  display: flex;
  margin: auto;
  justify-content: space-evenly;
  align-items: center;
  width: 750px;
  li{
    a{
      text-decoration: none;
      color: #dddddd;
      font-weight: bold;
      text-transform: uppercase;
      font-family: "Cambria",sans-serif;
      font-size: 18px;
    }
    .zoom div {
      transition: transform 0.2s ease, filter 0.4s ease;
    }
    .zoom:hover div{
      transform: scale(1.007);
      filter: opacity(0.9);
    }
    .zoom:hover div img{
      transform: scale(1.05);
      filter: opacity(0.9);
    }


    img{
      width: 32px;
      height: 32px
    ;
    }
  }
}
</style>
