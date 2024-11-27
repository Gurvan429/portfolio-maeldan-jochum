<template>
  <div class="section">
    <div class="pictureSection">
    </div>
    <div class="descriptionSection">
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
