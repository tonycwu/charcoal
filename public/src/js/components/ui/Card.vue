<template>
  <div class="card">
    <img :src="cardImgUrl" alt="Image">
    <div class="card-body">
      <div class="card-title">
        {{cardTitle}}
      </div>
      {{cardContent}}
    </div>
  </div>  
</template>

<script>
  module.exports = {
    props: ['cardImgUrl','cardTitle','cardContent']
  };
</script>