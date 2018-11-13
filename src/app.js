const planetsData = require('./data/planets.js');
const SelectView = require('./views/select_view.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetInfoView = require('./views/planet_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
  const selectElement = document.querySelectorAll('a');
  const planets = new SelectView(selectElement);
  planets.bindEvents();

  const infoDiv = document.querySelector('.planet-details')
  const planetDisplay = new PlanetInfoView(infoDiv);
  planetDisplay.bindEvents();
});
