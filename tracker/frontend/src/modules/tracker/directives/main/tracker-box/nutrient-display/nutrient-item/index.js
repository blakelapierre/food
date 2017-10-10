module.exports = () => ({
  restrict: 'E',
  template: require('./template.html'),
  controller: ['$scope', $scope => {
    $scope.totalNutrientQuantity = {'208': 3300};
    $scope.nutrientRda = {'208': 2000};

    $scope.getTotalNutrientQuantity = nutrNo => $scope.totalNutrientQuantity[nutrNo] || 0;

    $scope.getNutrientRda = nutrNo => $scope.nutrientRda[nutrNo] || 0;
  }]
});