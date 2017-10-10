module.exports = ['data', '$timeout', (data, $timeout) => ({
  restrict: 'E',
  template: require('./template.html'),
  controller: ['$scope', $scope => {
    $scope.searchQuery = '';
    $scope.results = [];

    $scope.$watch('searchQuery', queryChanged);

    const debouncedSearch = debounce(search, 500);

    function queryChanged(query) {
      debouncedSearch(query);
    }

    function search(query) {
      $scope.results.splice(0);

      data.FOOD.forEach(food => {
        if (food[2].match(new RegExp(`.*${query}.*`, 'gi'))) {
          $scope.results.push(food);
        }
      });

      $scope.results.sort((a, b) => a[2].length > b[2].length ? 1 : -1);

      console.log('results', $scope.results);
    }

    function debounce(fn, time) {
      let timer;
      return (...args) => {
        if (timer) $timeout.cancel(timer);

        timer = $timeout(fn, time, true, ...args);
      };
    }
  }]
})];