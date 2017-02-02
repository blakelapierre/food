module.exports = () => ({
  restrict: 'E',
  template: require('./template.html'),
  controller: ['$scope', $scope => {
    $scope.searchQuery = '';
    $scope.results = [];

    $scope.$watch('searchQuery', value => {
      $scope.results.splice(0);

      FOOD.forEach(food => {
        if (food.longDescription.match(new RegExp(`.*${value}.*`, 'gi'))) {
          $scope.results.push(food);
        }
      });

      console.log($scope.results);
    });
  }]
});

const FOOD = [
  {
    ndbNo: '11124',
    longDescription: 'Carrots, raw',
    shortDescription: 'CARROTS,RAW'
  },{
    ndbNo: '11125',
    longDescription: 'Carrots, cooked, boiled, drained, without salt',
    shortDescription: 'CARROTS,CKD,BLD,DRND,WO/SALT'
  }
];