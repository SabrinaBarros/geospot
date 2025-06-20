# GeoSpot 🌍

Este projeto é uma aplicação web interativa que combina **MapLibre GL JS** com **Deck.gl** para visualização geoespacial avançada. Os dados são renderizados a partir de arquivos **GeoJSON**, incluindo pontos de interesse e municípios, além de conexões visuais entre eles.

## 🛠 Tecnologias utilizadas

- [Vue.js 3](https://vuejs.org/)
- [MapLibre GL JS](https://maplibre.org/)
- [Deck.gl](https://deck.gl/)
- [Vite](https://vitejs.dev/)
- [GeoJSON](https://geojson.org/)

---

🚀 Iniciando o Projeto

1. Clone o repositório:

```shell
$ git clone git@github.com:SabrinaBarros/geospot.git
```
```shell
$ cd geospot
```

2. Instale as dependências:

```shell
$ npm install
```

3. Inicie o servidor de desenvolvimento:

```shell
$ npm run dev
```

## 📦 Comandos

Após clonar o projeto e instalar as dependências, você pode usar os seguintes comandos no seu terminal:

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Inicia o projeto em modo de desenvolvimento (localhost). |
| `npm run lint` | Executa o linter para verificar problemas de formatação e código. |

> 📌 Observação: Antes de executar qualquer comando, certifique-se de ter o Node.js instalado na sua máquina.

## 🗺️ Funcionalidades

| Funcionalidade | Descrição |
| -------------- | --------- |
| 🌐 Mapa Base | Carregamento de mapas base via MapLibre (Positron e Dark Matter). |
| 📍 Pontos de Interesse | Camada GeoJSON com pontos customizados (ex: ícones via URL). |
| 🏙️ Polígonos Municipais | Camada de polígonos carregada a partir de GeoJSON. |
| 🔗 Conexões com Arcos | Arcos ligando um ponto base aos demais pontos do mapa. |
| 🌓 Alternância de estilo de mapa | Botão para alternar entre temas claro e escuro. |
| 🎯 Zoom, navegação e rotação | Navegação 3D com pitch e bearing via Deck.gl + MapLibre. |

## Contribuindo 💌

Contribuições são super bem-vindas! Se quiser ajudar, por favor confira o guia de [contribuição](./CONTRIBUTING.md).

## License 📃

[MIT License](./LICENSE) © [Sabrina Barros](https://sabrinabarros.github.io/)

<hr>

Se tiver sugestões ou encontrar algum problema, sinta-se à vontade para abrir uma issue ou enviar um pull request! 🚀 ✨