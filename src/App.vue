<template>
  <div id="app"></div>
</template>

<script setup lang="ts">
  import maplibregl from 'maplibre-gl';
  import { Deck } from '@deck.gl/core';
  import { MapboxOverlay } from '@deck.gl/mapbox';
  import { GeoJsonLayer } from '@deck.gl/layers';

  const map = new maplibregl.Map({
      container: 'app',
      style: 'https://demotiles.maplibre.org/style.json',
      center: [0.11, 51.49],
      zoom: 6,
  });

  map.on('load', () => {

    const deck = new Deck({
      canvas: map.getCanvas(),
      width: '100%',
      height: '100%',
      controller: false,
    });

    const testLayer = new GeoJsonLayer({ id: 'test', data: [] });

    const overlay = new MapboxOverlay({
      interleaved: false,
      layers: [testLayer]
    });

    map.addControl(overlay);

    console.log('✅ Deck.gl integrado via MapboxOverlay!');

  });



  // await map.once('load');

  // const deckOverlay = new MapboxOverlay({
  //   interleaved: true,
  //   layers: [
  //     new ScatterplotLayer({
  //       id: 'deckgl-circle',
  //       data: [
  //         {position: [0.45, 51.47]}
  //       ],
  //       getPosition: d => d.position,
  //       getFillColor: [255, 0, 0, 100],
  //       getRadius: 1000,
  //       beforeId: 'watername_ocean' // In interleaved mode render the layer under map labels
  //     })
  //   ]
  // });

  // map.addControl(deckOverlay);


</script>

<style>

#app {
  width: 100%;
  height: 100vh;
}
</style>