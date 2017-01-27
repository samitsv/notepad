var app = angular.module('notepad');

app.controller('contentController',['$scope', function($scope) {
    //display note content
    $scope.displayContent = false;
    //boolean value to check whether the new note was saved or note
    //if not saved, do not create a new empty note
    $scope.savedNote = true;
    //all notes 
    $scope.notes = [];

    $scope.displayNoteFoMobile = false;

    
    //check for the local storage support
    if (typeof(Storage) !== "undefined") {
        // Get all the notes
        console.log(JSON.parse(localStorage.getItem("ALL_NOTES")));
        $scope.notes = JSON.parse(localStorage.getItem("ALL_NOTES"));
        if($scope.notes !== null) {
            $scope.noteNumber = $scope.notes.length;
        } else {
            //else set the note to empty array
            $scope.notes = [];
            $scope.noteNumber = 0;
        }
    } else {
        // Sorry! No Web Storage support..
        console.log("The browser does not support web storage")
    }

    //current note object - the note being edited
    $scope.currentNote = {
        noteName: "",
        noteContent: ""
    }

    //reset the current node object
    $scope.resetCurrentNote = function() {
            $scope.currentNote = {
                noteName: "",
                noteContent: "Enter Text Here..."
            }
    }

    //called when new note needs to be added
    $scope.addNewNote = function() {
        if($scope.savedNote) {
            $scope.savedNote = false;
            $scope.resetCurrentNote();
            //add an empty note as a starter for a new note
            $scope.notes.push($scope.currentNote);
        } else {
            // the current note is not saved
            alert("Please save note being used");
        }
    }

    //called when a note is selected to display the contents 
    $scope.displayNote = function(noteIndex) {
        //DEBUG LOGS
        //console.log(noteIndex);
        $scope.displayContent = true;
        $scope.currentNote = $scope.notes[noteIndex];
    }

    $scope.saveNote = function() {
        //check for the local storage support
        if (typeof(Storage) !== "undefined") {
            if($scope.currentNote.noteContent.length > 0) {
                $scope.currentNote.noteName = $scope.currentNote.noteContent.substring(0,20);
                
                //DEBUG LOGS
                // console.log($scope.notes);
                // console.log($scope.currentNote);
                // console.log($scope.notes);

                // Store
                console.log("JSON:" + JSON.stringify($scope.notes));
                localStorage.setItem("ALL_NOTES", JSON.stringify($scope.notes));

                $scope.resetCurrentNote();
                $scope.savedNote = true;
                $scope.displayContent = false;
            } else {
                console.log("Empty Note");
                alert("Pleast enter something for the note");
                $scope.savedNote = false;
            }
        } else {
            // Sorry! No Web Storage support..
        }
    }

/* METHODS FOR MOBILE */
    //called when new note needs to be added
    $scope.addNewNoteMobile = function() {
        if($scope.savedNote) {
            $scope.savedNote = false;
            $scope.resetCurrentNote();
            //add an empty note as a starter for a new note
            $scope.notes.push($scope.currentNote);
        } else {
            // the current note is not saved
            alert("Please save note being used");
        }
    }

     //called when a note is selected to display the contents 
    $scope.displayNoteMobile = function(noteIndex) {
        //DEBUG LOGS
        //console.log(noteIndex);
        $scope.displayNoteForMobile = true;
        $scope.displayContent = true;
        $scope.currentNote = $scope.notes[noteIndex];
    }

    $scope.saveNoteMobile = function() {
        //check for the local storage support
        if (typeof(Storage) !== "undefined") {
            $scope.displayNoteForMobile = false;
            if($scope.currentNote.noteContent.length > 0) {
                $scope.currentNote.noteName = $scope.currentNote.noteContent.substring(0,20);
                
                //DEBUG LOGS
                // console.log($scope.notes);
                // console.log($scope.currentNote);
                // console.log($scope.notes);

                // Store
                console.log("JSON:" + JSON.stringify($scope.notes));
                localStorage.setItem("ALL_NOTES", JSON.stringify($scope.notes));
                // console.log(localStorage.getItem(""ALL_NOTES""));
                $scope.resetCurrentNote();
                $scope.savedNote = true;
                $scope.displayContent = false;
            } else {
                console.log("Empty Note");
                alert("Pleast enter something for the note");
                $scope.savedNote = false;
            }
        } else {
            // Sorry! No Web Storage support..
        }
    }
}]);