/* !!!!!!! WARNING! This file is autogenerated. DO NOT MODIFY !!!!!!! */
require('angular');

require('angular-route');

export default {
  'tracker': angular.module('tracker', ['ngRoute'])
    .directive('main',                        require('./directives/main'))
      .directive('searchBox',                require('./directives/main/search-box'))
        .directive('searchInput',            require('./directives/main/search-box/search-input'))
          .directive('searchResults',        require('./directives/main/search-box/search-input/search-results'))
        .directive('frequentResults',        require('./directives/main/search-box/frequent-results'))
        .directive('categoryView',           require('./directives/main/search-box/category-view'))
      .directive('trackerBox',               require('./directives/main/tracker-box'))
        .directive('recentFood',             require('./directives/main/tracker-box/recent-food'))
        .directive('nutrientDisplay',        require('./directives/main/tracker-box/nutrient-display'))
          .directive('nutrientItem',         require('./directives/main/tracker-box/nutrient-display/nutrient-item'))

    .filter('timeAgo',                     require('./filters/timeAgo'))
    .config(require('./routes').default)
    .config(require('./config').default)
};
/* !!!!!!! WARNING! This file is autogenerated. DO NOT MODIFY !!!!!!! */