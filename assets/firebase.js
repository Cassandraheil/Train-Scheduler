 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAy2S3KquO6N5FmVLOt9kPW3GcPGC96vas",
    authDomain: "train-scheduler-a476c.firebaseapp.com",
    databaseURL: "https://train-scheduler-a476c.firebaseio.com",
    projectId: "train-scheduler-a476c",
    storageBucket: "train-scheduler-a476c.appspot.com",
    messagingSenderId: "668512772501",
    appId: "1:668512772501:web:299e9c4dee462da86ed69c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    
    var database = firebase.database();
        

    $("#submit").on("click", function(event){
        event.preventDefault();

        var name = $(".train-name").val().trim()
        var destination = $(".destination").val().trim()
        var firstTime = $(".train-time").val().trim()
        var frequency = $(".frequency").val().trim()
        // console.log(name) 


        database.ref().push({        ///if something doesn't work check and make sure i didnt reverse these ex: train-name: name,
            name: name,
            destination: destination,
            firstTime: firstTime,
            frequency: frequency
        });

        // console.log("train name", name)

        //clear previous input
        $(".train-name").val("");
        $(".destination").val("");
        $(".train-time").val("");
        $(".frequency").val("");
        // console.log("train name is...", name)
       
    });


    database.ref().on("child_added", function(childSnapshot) {
        // console.log(childSnapshot.val())

        var newName = childSnapshot.val().name;
        var newDestination= childSnapshot.val().destination;
        var newTime = childSnapshot.val().firstTime;
        var newFrequency = childSnapshot.val().frequency;

        console.log(newName);
        console.log(newDestination);
        console.log(newTime);
        console.log(newFrequency);

        //moment.js stuff
        var momentTime = newTime;

        var momentFrequency = newFrequency;

        var momentFirstTime = moment(momentTime, "HH:mm").subtract(1,"years");

        var momentsubtracted = moment().diff(moment(momentFirstTime), "minutes")

        var momentRemainder = momentsubtracted % momentFrequency;

        var momentAway = momentFrequency - momentRemainder;

        var nextTrain = moment().add(momentAway, "minutes")

        //putting it on the page
        var newRow = $("<tr>").append(
            $("<td>").text(newName),
            $("<td>").text(newDestination),
            $("<td>").text(momentAway),
            $("<td>").text(newFrequency),
            $("<td>").text(moment(nextTrain).format("hh:mm"))
        )

        $("#table > tbody").append(newRow);
  

      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });
