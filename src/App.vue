<template>
  <div class="app">
    <HeaderComponent/>
    <SectionComponent title="Welcome" picture="../assets/Jochum_Maeldan_Antre_Compo_Nuit.png"/>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SectionComponent from "@/components/SectionComponent.vue";

export default {
  name: 'App',
  components: {
    SectionComponent,
    HeaderComponent,
  }
}
</script>

<style>


body{
  margin: 0;
  list-style: none;
  text-decoration: none;
  background-color: #000000;
}
</style>
