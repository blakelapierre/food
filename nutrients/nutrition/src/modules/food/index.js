/* !!!!!!! This file is autogenerated. DO NOT MODIFY !!!!!!! */
require('angular');



export default {
  'food': angular.module('food', [])
    .directive('welcome',                     require('./directives/welcome'))
    .directive('foodItem',                   require('./directives/food-item'))
      .directive('details',                   require('./directives/food-item/details'))
      .directive('nutrients',                 require('./directives/food-item/nutrients'))
    .directive('search',                      require('./directives/search'))
      .directive('results',                   require('./directives/search/results'))


};
/* !!!!!!! This file is autogenerated. DO NOT MODIFY !!!!!!! */