var app = angular.module('notepad');

app.controller('contentController',['$scope', function($scope) {
    $scope.noteNumber = 1;
    $scope.notes = [{noteNumber:  $scope.noteNumber}];

    $scope.addNewNote = function() {
        $scope.noteNumber++;
         $scope.notes.push({noteNumber: $scope.noteNumber});
    }
}]);