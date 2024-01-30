<template>
  <header>
    <h1 class="name">{{ titre }}</h1>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      titre: "Maeldan JOCHUM",
    };
  }
};
</script>

<style>
header{
  height: 50px;
  background-color: #BCA14D;
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
</style>
