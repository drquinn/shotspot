'use strict';

import request from 'superagent';
import AnimalActions from '../actions/AnimalActions';

const TIMEOUT = 10000;

function get(url) {
  return request
    .get(url)
    .timeout(TIMEOUT);
}

module.exports = {

  getAll: function() {
    get('/animals')
      .end(function(err, res) {
        if(err) {
          console.log(err);
        }
        AnimalActions.receiveAll(JSON.parse(res.text));
      });
  },

  createAnimal: function(text) {
    AnimalActions.createAnimal(text);
  }

};
