<template>
  <header>
    <ul>
      <li>
        <a class="zoom" href="#home"><div>{{ this.$t('header.home') }}</div></a>
      </li>
      <li>
        <a class="zoom" href="#portfolio"><div>{{ this.$t('header.portfolio') }}</div></a>
      </li>
      <li>
        <a class="zoom" href="#demoreel"><div>{{ this.$t('header.demoreel') }}</div></a>
      </li>
      <li>
        <a class="zoom" href="#aboutMe"><div>{{ this.$t('header.about') }}</div></a>
      </li>
    </ul>

    <div id="languageSelector">
      <div class="dropdown">
        <button class="dropdown-button" @click="toggleDropdown" ref="dropdownButton">
          <img :src="currentFlag" alt="Current Language" class="language-icon" />
        </button>
        <ul class="dropdown-menu" v-if="isDropdownOpen" ref="dropdownMenu">
          <li @click="changeLanguage('fr')" >
            <img :src="require('@/assets/fr.png')" alt="French" class="language-icon" />
          </li>
          <li @click="changeLanguage('en')">
            <img :src="require('@/assets/en.png')" alt="English" class="language-icon" />
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      currentLanguage: this.$i18n.locale || localStorage.getItem('language') || 'en',
      flags: {
        fr: require('@/assets/fr.png'),
        en: require('@/assets/en.png'),
      },
      isDropdownOpen: false,
    };
  },
  computed: {
    currentFlag() {
      return this.flags[this.currentLanguage];
    },
  },
  methods: {
    changeLanguage(language) {
      this.currentLanguage = language;
      this.$i18n.locale = language; // Change la langue dans Vue I18n
      localStorage.setItem('language', language); // Sauvegarde dans localStorage
      this.isDropdownOpen = false; // Ferme le menu après sélection
      window.location.reload(); // Recharge la page pour appliquer les modifications
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    handleClickOutside(event) {
      const dropdownMenu = this.$refs.dropdownMenu;
      const dropdownButton = this.$refs.dropdownButton;

      if (
          dropdownMenu && !dropdownMenu.contains(event.target) &&
          dropdownButton && !dropdownButton.contains(event.target)
      ) {
        this.isDropdownOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      this.currentLanguage = savedLanguage;
      this.$i18n.locale = savedLanguage;
    }
  },
};
</script>

<style lang="scss" scoped>
header {
  min-height: 40px;
  height: 2vw;
  background-color: #6c6c69;
  display: flex;
  border-bottom: 1px solid #242424;
  box-shadow: 1px 1px 5px #242424;
  position: sticky;
  top: 0;
  justify-content: center;
  z-index: 1;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60vw;
}

li {
  a {
    text-decoration: none;
    text-shadow: 1px 1px 2px rgba(120, 120, 120, 0.7);
    color: #dddddd;
    font-family: "Cambria", sans-serif;
    font-size: 20px;
    text-transform: uppercase;
  }

  .zoom div {
    transition: filter 0.4s ease;
  }

  .zoom:hover div {
    filter: opacity(0.7);
  }
}

#languageSelector {
  position: absolute;
  top: 5px;
  left: 20px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  img{
    width: 32px;
    height: 32px;
  }
}

.dropdown-menu {
  display: block;
  position: absolute;
  background-color: white;
  box-shadow: 1px 1px 5px #242424;
  list-style: none;
  width: 40px;
  border-radius: 0 0 5px 5px;
  padding: 0;
  margin: 0;
  top: 98%;
  left: -10%;
  z-index: 2;
  :hover{
    background-color: #aaaaaa;
    border-radius: 0 0 5px 5px;
  }
}

.dropdown-menu li {
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
}

.dropdown-menu img {
  width: 32px;
  height: 32px;
}


</style>
