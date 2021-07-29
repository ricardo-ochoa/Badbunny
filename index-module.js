import "./components/modal-tracks.js";
import "./components/component-track.js";
import "./components/component-artist.js";
import "./components/component-media.js";
import "./components/component-merch.js";

const url = "https://badbunny-ep-default-rtdb.firebaseio.com/.json?callback=gotData";


var firebaseConfig = {
    apiKey: '<your-api-key>',
    authDomain: 'badbunny-ep.firebaseapp.com',
    databaseURL: 'https://badbunny-ep-default-rtdb.firebaseio.com/',
    storageBucket: 'gs://badbunny-ep.appspot.com'
  };

  firebase.initializeApp(firebaseConfig);

// ---Tracks--- //

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
        allItems.push(addItems);
        
    });
}

function addItems(trackname,number,producer,nickname){
    let tracksContainer = document.querySelector(".main-tracks");
    const componentTrack = document.createElement("component-track");

    componentTrack.trackname = trackname;
    componentTrack.number = number;
    componentTrack.producer = producer;
    componentTrack.nickname = nickname;
    componentTrack.className = nickname;

    tracksContainer.appendChild(componentTrack);
}

const allItems = [];


// ---Artistas--- //

function selectArtists(){
    firebase.database().ref('artists').once('value',
    function(AllArtists){
        AllArtists.forEach(
            function(Artists){ 
                var name = Artists.val().name;
                var instagram = Artists.val().instagram;
                var tracks = Artists.val().tracks;
                var nickname = Artists.val().nickname;
                var ide = Artists.val().id;
                
                addArtists(name,instagram,nickname,tracks,ide);

            }
        )
        allArtists.push(addArtists);
        
    });
    
}

function addArtists(name,instagram,nickname,tracks,ide){
    let artistContainer = document.querySelector(".artists");
    const componentArtist = document.createElement("component-artist");

    componentArtist.artistname = name;
    componentArtist.nickname = nickname;
    componentArtist.tracksfeaturings = tracks;
    componentArtist.ide = ide;


    artistContainer.appendChild(componentArtist);

}

const allArtists = [];


// ---Tours--- //

function selectTours(){
    firebase.database().ref('tour').once('value',
    function(AllTours){
        AllTours.forEach(
            function(Tours){ 
                var name = Tours.val().name;
                var date = Tours.val().date;
                var year = Tours.val().year;
                var nickname = Tours.val().nickname;
                
                addTours(name,date,year,nickname);
                
            }
        )
        allTours.push(addTours);
        
    });
    
}

function addTours(name,date,year,nickname){
    let tourContainer = document.querySelector(".tours");
    const componentArtist = document.createElement("component-artist");

    componentArtist.artistname = name;
    componentArtist.nickname = nickname;
    componentArtist.tracksfeaturings = year;
    componentArtist.ide = date;


    tourContainer.appendChild(componentArtist);

}

const allTours = [];



// ---Social media--- //

function selectMedia(){
    firebase.database().ref('media').once('value',
    function(AllMedia){
        AllMedia.forEach(
            function(Media){ 
                var name = Media.val().name;
                var nickname = Media.val().nickname;
                addMedia(name,nickname);
                
            }
        )
        allMedia.push(addMedia);
        
    });
    
}

function addMedia(name,nickname){
    let mediaContainer = document.querySelector(".main-soicalmedia");
    const componentMedia = document.createElement("component-media");

    componentMedia.name = name;
    componentMedia.nickname = nickname;

    mediaContainer.appendChild(componentMedia);
}

const allMedia = [];

// ---Merch--- //

function selectMerch(){
    firebase.database().ref('merch').once('value',
    function(AllMerch){
        AllMerch.forEach(
            function(Media){ 
                var name = Media.val().name;
                var price = Media.val().price;
                addMerch(name,price);
                console.log(name);
            }
        )
        allMerch.push(addMerch);
        
    });
    
}

function addMerch(name,price){
    let merchContainer = document.querySelector(".mercha");
    // const componentMerch = document.createElement("component-merch");
    


    merchContainer.name = name;
    merchContainer.price = price;

    // merchContainer.appendChild(componentMerch);

}

const allMerch = [];


// ---Load--- //

window.onload = SelectAllTracks(); selectArtists(); selectTours(); selectMedia(); selectMerch();
