import View from "./view.js";
class MapView extends View {
  renderMap(weatherData) {
    const { lon, lat } = weatherData.coord;
    const map = L.map("weather-map-div", { zoomControl: false }).setView(
      [lat, lon],
      13
    );
    L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png").addTo(map);
  }
}

export default new MapView();
