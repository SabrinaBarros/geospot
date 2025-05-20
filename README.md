# GeoSpot 🌍

Este projeto é uma aplicação web interativa que combina **MapLibre GL JS** com **Deck.gl** para visualização geoespacial avançada. Os dados são renderizados a partir de arquivos **GeoJSON**, incluindo pontos de interesse e municípios, além de conexões visuais entre eles.

## 🛠 Tecnologias utilizadas

- [Vue.js 3](https://vuejs.org/)
- [MapLibre GL JS](https://maplibre.org/maplibre-gl-js-docs/)
- [Deck.gl](https://deck.gl/)
- [Vite](https://vitejs.dev/)
- [GeoJSON](https://geojson.org/)

---

## 📦 Development

- Clone this repository:

```shell
$ git clone git@github.com:SabrinaBarros/geospot.git
```
```shell
$ cd geospot
```

- And install all dependencies:

```shell
$ npm install
```

- Start the project:

```shell
$ npm run dev
```

## 🗺️ Funcionalidades

| Funcionalidade                   | Descrição                                                         |
| -------------------------------- | ----------------------------------------------------------------- |
| 🌐 Mapa Base                     | Carregamento de mapas base via MapLibre (Positron e Dark Matter). |
| 📍 Pontos de Interesse           | Camada GeoJSON com pontos customizados (ex: ícones via URL).      |
| 🏙️ Polígonos Municipais         | Camada de polígonos carregada a partir de GeoJSON.                |
| 🔗 Conexões com Arcos            | Arcos ligando um ponto base aos demais pontos do mapa.            |
| 🌓 Alternância de estilo de mapa | Botão para alternar entre temas claro e escuro.                   |
| 🎯 Zoom, navegação e rotação     | Navegação 3D com pitch e bearing via Deck.gl + MapLibre.          |


## Contributing 💌

If you would like to contribute to the project, feel free to check the [CONTRIBUTING](CONTRIBUTING.md) file for more information. 

## License 📃

[MIT License](./LICENSE) © [Sabrina Barros](https://sabrinabarros.github.io/)

<hr>

 If you have suggestions or encounter issues, please feel free to contribute or report issues. ✨