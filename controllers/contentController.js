var app = angular.module('notepad');

app.controller('contentController',['$scope', function($scope) {
    //display note only when clicked
    $scope.displayContent = false;
    $scope.noteNumber = 0;
    $scope.notes = [];
    $scope.note = {
        noteName: "",
        noteContent: ""
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
        //check for the local storage support
        if (typeof(Storage) !== "undefined") {
            // Store
            localStorage.setItem("Note1", "Test Content");
            // Retrieve
            console.log(localStorage.getItem("Note1"));
        } else {
            // Sorry! No Web Storage support..
        }
    }
}]);