const firebaseConfig = {
    apiKey: "AIzaSyAwz8o4Dfg0zi1FppzFwmw6hKFZNMERHc4",
    authDomain: "project-100-e3422.firebaseapp.com",
    projectId: "project-100-e3422",
    storageBucket: "project-100-e3422.appspot.com",
    messagingSenderId: "303284582301",
    appId: "1:303284582301:web:f02a2f24f1488938ac6174"
  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name",room_name);

    window.location = "index.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name -" + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "index.html";
}
