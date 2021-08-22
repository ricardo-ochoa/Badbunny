import "./components/modal-tracks.js";
import "./components/component-track.js";
import "./components/component-artist.js";
import "./components/component-media.js";
import "./components/component-modal.js";
import "./components/component-info-artist.js";
import "./components/component-merch.js";
import "./components/component-info-tour.js";



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

export function selectArtists(){
    firebase.database().ref('artists').once('value',
    function(AllArtists){
        AllArtists.forEach(
            function(Artists){ 
                var name = Artists.val().name;
                var instagram = Artists.val().instagram;
                var tracks = Artists.val().tracks;
                var nickname = Artists.val().nickname;
                var ide = Artists.val().id;

                var instagram_link = Artists.val().instagram_link;
                var spotify_link = Artists.val().spotify_link;
                var youtube_link = Artists.val().youtube_link;
                var apple_link = Artists.val().apple_link;
                
                addArtists(name,instagram,nickname,tracks,ide,instagram_link,apple_link,youtube_link,spotify_link);
            
                
            }
        )
        allArtists.push(addArtists); 
    });
    
}

 function addArtists(name,instagram,nickname,tracks,ide,instagram_link,apple_link,youtube_link,spotify_link){
    let artistContainer = document.querySelector(".artists");
    const componentArtist = document.createElement("component-artist");

    componentArtist.artistname = name;
    componentArtist.nickname = nickname;
    componentArtist.tracksfeaturings = tracks;
    componentArtist.ide = ide;

    artistContainer.appendChild(componentArtist);


    // ---> Modal Artist info <--- //
    componentArtist.addEventListener('click', (e) => {

        const modalArtist = document.createElement("component-infoartist");
        modalArtist.nickname = nickname;
        modalArtist.instagram = instagram;
        modalArtist.instagram_link = instagram_link;
        modalArtist.apple_link = apple_link;
        modalArtist.youtube_link = youtube_link;
        modalArtist.spotify_link = spotify_link;

        document.body.appendChild(modalArtist);
    });
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
                var city = Tours.val().city;
                var place = Tours.val().place;
                var hour = Tours.val().hour;
                
                addTours(name,date,year,nickname,city,place,hour);
                
            }
        )
        allTours.push(addTours);
        
    });
    
}

function addTours(name,date,year,nickname,city,place,hour){
    let tourContainer = document.querySelector(".tours");
    const componentArtist = document.createElement("component-artist");

    componentArtist.artistname = name;
    componentArtist.nickname = nickname;
    componentArtist.tracksfeaturings = year;
    componentArtist.ide = date;

    tourContainer.appendChild(componentArtist);

    // ---> Modal Tour info <--- //
    componentArtist.addEventListener('click', (e) => {

        const modalTour = document.createElement("component-infotour");
        modalTour.nickname = nickname;
        modalTour.date = date;
        modalTour.year = year;
        modalTour.city = name;
        modalTour.place = place;
        modalTour.hour = hour;

        document.body.appendChild(modalTour);
    });

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
                var link = Media.val().link;
                addMedia(name,nickname,link);
                
            }
        )
        allMedia.push(addMedia);
        
    });   
}

function addMedia(name,nickname,link){
    let mediaContainer = document.querySelector(".main-soicalmedia");
    const componentMedia = document.createElement("component-media");

    componentMedia.name = name;
    componentMedia.nickname = nickname;
    componentMedia.link = link;

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

// ---Modals Artists--- //



// ---Load--- //

window.onload = SelectAllTracks(); selectArtists(); selectTours(); selectMedia(); selectMerch();