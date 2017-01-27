var app = angular.module('notepad');

app.controller('contentController',['$scope', function($scope) {
    //display note only when clicked
    $scope.displayContent = false;
    $scope.noteNumber = 1;
    $scope.notes = [{noteNumber:  $scope.noteNumber}];

    //check for the local storage support
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
    } else {
        // Sorry! No Web Storage support..
    }
    $scope.addNewNote = function() {
        $scope.noteNumber++;
        $scope.notes.push({noteNumber: $scope.noteNumber});
    }

    $scope.displayNote = function(noteIndex) {
        console.log(noteIndex);
        $scope.displayContent = true;
    }

    $scope.saveNote = function() {

    }
}]);