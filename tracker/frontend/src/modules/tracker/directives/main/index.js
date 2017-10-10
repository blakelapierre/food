module.exports = () => ({
  restrict: 'E',
  template: require('./template.html'),
  controller: ['$scope', $scope => {
    const maxFrequentResults = 5,
          maxRecentTime = 24 * 60 * 60 * 1000;

    $scope.recentFood = [];
    $scope.foodCounts = {};
    $scope.frequentResults = [];

    const {recentFood, foodCounts, frequentResults} = $scope;

    $scope.addFood = food => {
      recentFood.push({food, quantity: getDefaultQuantity(food), time: new Date().getTime()});

      for (let i = recentFood.length - 1; i >= 0; i--) {
        if (new Date().getTime() - recentFood[i].time > maxRecentTime) recentFood.splice(i, 1);
      }

      const count = foodCounts[food[0]] = (foodCounts[food[0]] || 0) + 1;

      let inserted;
      for (let i = 0; i < frequentResults.length; i++) {
        const result = frequentResults[i];
        if (result.food === food) {
          result.count = count;
          return;
        }
      }

      for (let i = 0; i < frequentResults.length; i++) {
        const result = frequentResults[i];
        if (count > result.count && result.food !== food) {
          frequentResults.splice(i, 0, {count, food});
          inserted = true;

          if (frequentResults.length > maxFrequentResults) frequentResults.splice(frequentResults.length - 1, 1);
          break;
        }
      }

      if (!inserted && frequentResults.length < maxFrequentResults) {
        frequentResults.push({count, food});
      }
    };
  }]
});

function getDefaultQuantity(food) {
  return {quantity: 100, unit: 'g'};
}