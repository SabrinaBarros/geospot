<template>
  <div class="app">
    <button class="btn" @click="switchBaseMap">Trocar Base Map</button>
    <!-- <input class="upload" type="file" id="upload" @change="handleFileChange" ref="fileInput" accept="geojson/*"/> -->
  </div>
</template>

<script setup>
  import {MapboxOverlay} from '@deck.gl/mapbox';
  import {GeoJsonLayer, ArcLayer} from '@deck.gl/layers';
  import maplibregl from 'maplibre-gl';

  /* GeoJSON */
  const POINTS = './data/pontos_de_interesse.geojson';
  const MUNICIPIOS = './data/municipios.geojson';

  /* MapLibre Map */
  const map = new maplibregl.Map({
    container: 'app',
    style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
    center: [-46.64809660565238, -23.650080196548778],
    zoom: 8,
    bearing: 0,
    pitch: 30
  });

  /* Botão de tema claro/escuro */
  let current = 'positron';

  const switchBaseMap = () => {
    current = current === 'positron' ? 'dark' : 'positron';
    map.setStyle(
      `https://basemaps.cartocdn.com/gl/${current === 'dark'
        ? 'dark-matter'
        : 'positron'}-gl-style/style.json`
    );
  }

  /* Geração das camadas */
  const createLayers = () => {
    return [
      /* -- Pontos de interesse (ícone) -- */
      new GeoJsonLayer({
        id: 'points',
        data: POINTS,
        pointType: 'icon',
        getIcon: point => ({
          url: point.properties.icon,
          width: 128,
          height: 128,
          anchorY: 128,
        }),
        getIconSize: 32,
        sizeUnits: 'pixels',
      }),

      /* -- Limites municipais -- */
      new GeoJsonLayer({
        id: 'municipios',
        data: MUNICIPIOS,
        stroked: true,
        filled: true,
        lineWidthMinPixels: 2,
        opacity: 0.4,
        getLineColor: [60, 60, 60],
        getFillColor: [200, 200, 200],
      }),

      /* -- Arcos de conexão -- */
      new ArcLayer({
        id: 'arcs',
        data: POINTS,
        dataTransform: g => g.features.filter(feature => feature.properties.id !== 0),
        getSourcePosition: () => [
          -46.39179622837122,
          -23.9478225466285
        ],
        getTargetPosition: f => f.geometry.coordinates,
        getSourceColor: [0, 128, 200],
        getTargetColor: [200, 0, 80],
        getWidth: 1,
      })
    ];
  }

  /* Overlay deck.gl */
  const deckOverlay = new MapboxOverlay({
    interleaved: true,
    layers: createLayers()
  });

  map.addControl(deckOverlay);
  map.addControl(new maplibregl.NavigationControl());
</script>

<style scoped>
  .btn {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
    background: white;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
  }

  .upload {
    position: absolute;
    bottom: 40px;
    left: 10px;
    z-index: 1;
    cursor: pointer;
  }
</style>