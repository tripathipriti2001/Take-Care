const firebaseConfig = {
    apiKey: "AIzaSyDwc9T_jMP1Ust-vH1yfu8HlCrRZ_AGtV8",
    authDomain: "firebasics-01.firebaseapp.com",
    projectId: "firebasics-01",
    storageBucket: "firebasics-01.appspot.com",
    messagingSenderId: "975869999815",
    appId: "1:975869999815:web:df7a2b28ea59236ba21ce2",
    measurementId: "G-DF1SXLBWXS"
};
firebase.initializeApp(firebaseConfig);
const auth =  firebase.auth();
let database = firebase.database();
let username;
var marker, circle;
auth.onAuthStateChanged((user)=>{
    if(!user){
        location.replace("../index.html");
    }
    else{
        username = user.email;
        let dummyname = username.split("@");
        let name = dummyname[0].split(".");
        firebase.database().ref(name[0]).on("value",(snapshot)=> {
            var map = L.map('map').setView([15.3911, 100.608406], 6);
            var osm = L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=6XR54qpIYrcOOOHtNeJg', {
                attribution: '&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a> contributors'
            });
            osm.addTo(map);
            if(marker) {
                map.removeLayer(marker)
            }
            if(circle) {
                map.removeLayer(circle)
            }
            marker = L.marker([snapshot.val().latitude, snapshot.val().longitude]);
            circle = L.circle([snapshot.val().latitude, snapshot.val().longitude], {radius: snapshot.val().accuracy});
            var featureGroup = L.featureGroup([marker, circle]).addTo(map);
            map.fitBounds(featureGroup.getBounds());
        });
    }
});