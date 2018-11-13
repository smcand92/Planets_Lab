const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function(){
  this.element.forEach(function(element){
    element.addEventListener('click', (event) => {
      const planet = event.target.text;
      
      PubSub.publish('SelectView:click', planet);
    });

  });
};

module.exports = SelectView;
