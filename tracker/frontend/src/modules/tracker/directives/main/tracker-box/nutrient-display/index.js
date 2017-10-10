module.exports = ['data', data => ({
  restrict: 'E',
  template: require('./template.html'),
  controller: ['$scope', $scope => {
    $scope.nutrients = data.NUTRIENTS;
    // $scope.nutrients = data.NUTRIENTS
    //                         .split('\n')
    //                         .map(line => line.split('~'))
    //                         .map(([_, nutr_no, _1, units, _2, tagName, _3, description, _4, num, _5, sortOrder]) =>
    //                           ({nutr_no, units, tagName, description, num, sortOrder: parseInt(sortOrder)}));

    // $scope.nutrients.sort((a, b) => a.sortOrder < b.sortOrder ? -1 : 1);

    console.log($scope.nutrients);
  }]
})];