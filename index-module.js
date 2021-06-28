import "./components/modal-tracks.js";
import "./components/component-track.js";




const url = "https://badbunny-ep-default-rtdb.firebaseio.com/.json?callback=gotData";


var firebaseConfig = {
    apiKey: '<your-api-key>',
    authDomain: 'badbunny-ep.firebaseapp.com',
    databaseURL: 'https://badbunny-ep-default-rtdb.firebaseio.com/',
    storageBucket: 'gs://badbunny-ep.appspot.com'
  };

  firebase.initializeApp(firebaseConfig);


function SelectAllTracks(){
    firebase.database().ref('tracks').once('value',
    function(AllTracks){
        AllTracks.forEach(
            function(Tracks){
                var trackname = Tracks.val().trackname;
                var number = Tracks.val().number;
                var producer = Tracks.val().producer;
                var nickname = Tracks.val().nickname;

                addItems(trackname,number,producer,nickname);
            }
        )
    });
}

window.onload = SelectAllTracks;

function addItems(trackname,number,producer,nickname){
console.log(trackname,number,producer,nickname);

}



// // conect to server
// window
//   .fetch(url)
//     // procesar la respuesta y convertirla a json
//   .then((respuesta) => respuesta.json())
//     //JSON-> DATA-> Renderizar la info al browser
//   .then((tracks) => {
//     tracks.forEach(item => {
//     console.log(item.id);
//    });
//   });





// let modalTracks = document.createElement("modal-tracks");

// let track1 = document.getElementById("track1");
// let track2 = document.getElementById("track2");
// let track3 = document.getElementById("track3");
// let track4 = document.getElementById("track4");
// let track5 = document.getElementById("track5");

// const modalTrack1 = document.querySelector("modal-tracks");
// const modalTrack2 = document.querySelector(".track2");
// const modalTrack3 = document.querySelector("modal-tracks");
// const modalTrack4 = document.querySelector("modal-tracks");
// const modalTrack5 = document.querySelector("modal-tracks");

// track1.addEventListener('click', () => {
//     modalTrack1.open()
// })

// track2.addEventListener('click', () => {
//     modalTrack2.open()
// })




{/* <component-artist
img = "${"nickname"}";
artistnumber = "01"
tracksfeaturings = "1·3·5"
nickname = "Mt"
artistname = "Myke Towers"
></component-artist> */}

{/* <btn-play></btn-play> */}