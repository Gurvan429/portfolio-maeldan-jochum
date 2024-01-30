<template>
  <div class="section">
    <div class="pictureSection">
      <img class="picture" alt="picture of the section"  :src="picture">
    </div>
    <div class="descriptionSection">
      <h1>{{ title }}</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SectionComponent',
  props: {
    title: String,
    picture: String
  }
}
</script>

<style>
.section{
  height: 500px;
  display: flex;
}

.pictureSection{
  margin: 3rem;
}

.descriptionSection{
  margin: 3rem;
}

.picture{
  height: 563px;
  width: 1000px;
  box-shadow: 3px 3px 10px black;
  border-radius: 15px;
}
</style>
