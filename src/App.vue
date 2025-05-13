<template>
  <div id="app"></div>
</template>

<script setup lang="ts">
  import maplibregl from 'maplibre-gl';

  const map = new maplibregl.Map({
          container: 'app',
          style: 'https://demotiles.maplibre.org/style.json', // style URL
          center: [0.11, 51.49], // starting position [lng, lat]
          zoom: 6, // starting zoom
      });

</script>

<style>

#app {
  width: 100%;
  height: 100vh;
}
</style>