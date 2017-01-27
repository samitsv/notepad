var app = angular.module('notepad');

app.controller('contentController',['$scope', function($scope) {
    //display note only when clicked
    let ALL_NOTES = "ALL_NOTES";
    $scope.displayContent = false;
    //all notes 
    $scope.notes = [];

    //check for the local storage support
    if (typeof(Storage) !== "undefined") {
        // Retrieve
        console.log(localStorage.getItem(ALL_NOTES));
        $scope.notes = localStorage.getItem(ALL_NOTES);
        if($scope.notes !== null) {
            $scope.noteNumber = $scope.notes.length;
        } else {
            $scope.notes = [];
            $scope.noteNumber = 0;
        }
    } else {
        // Sorry! No Web Storage support..
    }

    //note object
    $scope.currentNote = {
        noteName: "",
        noteContent: ""
    }

    $scope.resetCurrentNote = function() {
            $scope.currentNote = {
            noteName: "",
            noteContent: ""
        }
    }

    $scope.addNewNote = function() {
        $scope.resetCurrentNote();
        $scope.notes.push($scope.currentNote);
    }

    $scope.displayNote = function(noteIndex) {
        console.log(noteIndex);
        $scope.displayContent = true;
        $scope.currentNote = $scope.notes[noteIndex];
    }

    $scope.saveNote = function() {
        //check for the local storage support
        if (typeof(Storage) !== "undefined") {

            if($scope.currentNote.noteContent.length > 0) {
                $scope.currentNote.noteName = $scope.currentNote.noteContent.substring(0,20);
                
                console.log($scope.notes);
                console.log($scope.currentNote);
                console.log($scope.notes);

                // Store
                localStorage.setItem($scope.ALL_NOTES, $scope.notes);
                // Retrieve
                console.log(localStorage.getItem($scope.ALL_NOTES));
                $scope.resetCurrentNote();
            } else {
                console.log("Empty Note");
            }
        } else {
            // Sorry! No Web Storage support..
        }
    }
}]);