module.exports = () => ({
  restrict: 'E',
  template: require('./template.html'),
  controller: ['$scope', $scope => {
    const maxFrequentResults = 5;

    $scope.recentFood = [];
    $scope.foodCounts = {};
    const frequentResults = $scope.frequentResults = [];

    $scope.addFood = food => {
      $scope.recentFood.push({food, quantity: getDefaultQuantity(food), time: new Date()});
      const count = $scope.foodCounts[food.ndbNo] = ($scope.foodCounts[food.ndbNo] || 0) + 1;

      let inserted;
      for (let i = 0; i < maxFrequentResults.length; i++) {
        const result = frequentResults[i];
        if (count > result[0]) {
          frequentResults.splice(i, 0, [count, food]);
          inserted = true;

          if (frequentResults.length > maxFrequentResults) frequentResults.splice(frequentResults.length - 1, 1);
          break;
        }
      }

      if (!inserted && frequentResults.length < maxFrequentResults) {
        frequentResults.push([count, food]);
      }
    };
  }]
});

function getDefaultQuantity(food) {
  return {quantity: 100, unit: 'g'};
}