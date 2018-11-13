const PubSub = require('../helpers/pub_sub.js');
const planetsData = require('../data/planets.js');

const PlanetInfoView = function (container){
  this.container = container;
};


PlanetInfoView.prototype.bindEvents = function(){
PubSub.subscribe('SelectView:click', (event) =>{
    const planetToFind = planetsData.find(planet => planet.name === event.detail);
    console.log(planetToFind);
    this.render(planetToFind);

})

};



PlanetInfoView.prototype.render = function(event){
  const planetDetail = document.createElement('p');
  // planetDetail.textContent = `${}`
  this.container.appendChild(planetDetail);
};


module.exports = PlanetInfoView;
