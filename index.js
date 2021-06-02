let DivBackground= document.createElement("div");
let DivTrack = document.createElement("div");
let DivIndication = document.createElement('div');
let ArtistsTrack = document.createElement('div');

let Artist = document.createElement('div');
let NumberTracks = document.createElement('div');
let NickName = document.createElement('div');
let ArtistName = document.createElement('div');

let PlayZone = document.createElement('div');
let SongName = document.createElement('div');
let SongArtists = document.createElement('div');
let BtnPlay =  document.createElement('div');

function openDialog(url, width) {

    DivBackground.className="DivBackground";
    DivBackground.id="DivBackground";

    DivTrack.className="DivTrack main-track";
    DivTrack.id="DivTrack";
    DivTrack.style.width= width+"px";

    DivIndication.className="indication";
    DivIndication.innerHTML = "<p>Selecciona máximo 2 artistas para el featuring</p>";

    ArtistsTrack.className="artists-track";

    Artist.className="artist-1 artist";

    NumberTracks.className="number-tracks";
    NumberTracks.innerHTML = "<p>01</p> <p>1·3·5</p>";

    NickName.className="artists-nickname";
    NickName.innerHTML = "<P>Mt</P>";

    ArtistName.className="artist-name";
    ArtistName.innerHTML = "<p>Myke Towers</p>";
    
    PlayZone.className="play-zone";

    SongName.className="song-title";
    SongName.innerHTML = "<p>01-Barrio</p>";

    SongArtists.className="song-artists";
    SongArtists.innerHTML = "<p>Bad Bunny  <span> x </span>  Tainy </p>";
    
    BtnPlay.className="btn-play";
    BtnPlay.innerHTML = "<svg class='icon-play' viewBox='0 0 21 21'><path d='M10.3867 20.0664C15.7285 20.0664 20.123 15.6719 20.123 10.3301C20.123 4.98828 15.7285 0.603516 10.3867 0.603516C5.04492 0.603516 0.650391 4.98828 0.650391 10.3301C0.650391 15.6719 5.04492 20.0664 10.3867 20.0664ZM14.2148 10.8965L8.52148 14.207C8.0625 14.4805 7.51562 14.2363 7.51562 13.748V6.93164C7.51562 6.44336 8.08203 6.19922 8.52148 6.45312L14.2148 9.79297C14.625 10.0371 14.6348 10.6523 14.2148 10.8965Z'/></svg> <p class='escuchar'>Escuchar</p>";
    
    document.body.appendChild(DivBackground);
    DivBackground.appendChild(DivTrack);
    DivTrack.appendChild(DivIndication);
    DivTrack.appendChild(ArtistsTrack);
    ArtistsTrack.appendChild(Artist);
    
    Artist.appendChild(NumberTracks);
    Artist.appendChild(NickName);
    Artist.appendChild(ArtistName);

    DivTrack.appendChild(PlayZone);
    PlayZone.appendChild(SongName);
    PlayZone.appendChild(SongArtists);
    PlayZone.appendChild(BtnPlay);


}

function removeDialog(){
    let DivBackground= document.getElementById("DivBackground");
    document.body.removeChild(DivBackground);
}

DivBackground.addEventListener('click', e => {
        if (e.target === DivBackground) removeDialog();
})


Artist.addEventListener("click", selectArtist =>  {
    Artist.classList.toggle('artistselected');
});

Artist.addEventListener("click", selectArtist =>  {
    if (Artist.classList.contains( "artistselected" )) {
        NickName.innerHTML = "<svg class='check-icon' width='44' height='41' viewBox='0 0 44 43' fill='coral' xmlns='http://www.w3.org/2000/svg'><path d='M10.8086 37.7344H14.793C15.1641 37.7344 15.418 37.832 15.6914 38.1055L18.543 40.918C20.8867 43.3008 23.0742 43.2812 25.4375 40.918L28.2695 38.1055C28.543 37.832 28.8164 37.7344 29.1875 37.7344H33.1719C36.4922 37.7344 38.0547 36.1914 38.0547 32.832V28.8477C38.0547 28.4766 38.1719 28.2227 38.4258 27.9492L41.2383 25.1172C43.6211 22.7539 43.6016 20.5664 41.2383 18.2031L38.4258 15.3711C38.1719 15.0977 38.0547 14.8242 38.0547 14.4531V10.4688C38.0547 7.14844 36.5117 5.58594 33.1719 5.58594H29.1875C28.8164 5.58594 28.543 5.48828 28.2695 5.21484L25.4375 2.40234C23.0742 0.0195312 20.8867 0.0390625 18.5234 2.40234L15.6914 5.21484C15.4375 5.48828 15.1641 5.58594 14.793 5.58594H10.8086C7.44922 5.58594 5.90625 7.10938 5.90625 10.4688V14.4531C5.90625 14.8242 5.80859 15.0977 5.53516 15.3711L2.72266 18.2031C0.359375 20.5664 0.359375 22.7539 2.72266 25.1172L5.53516 27.9492C5.80859 28.2227 5.90625 28.4766 5.90625 28.8477V32.832C5.90625 36.1719 7.46875 37.7344 10.8086 37.7344ZM19.9297 30.7227C19.2656 30.7227 18.7383 30.4492 18.2305 29.7852L13.6406 24.1602C13.3477 23.7891 13.1719 23.3594 13.1719 22.9297C13.1719 22.0508 13.8555 21.3281 14.7344 21.3281C15.2812 21.3281 15.7109 21.5234 16.1602 22.1289L19.8516 26.8555L27.6641 14.3359C28.0156 13.75 28.5039 13.457 29.0312 13.457C29.8906 13.457 30.6719 14.043 30.6719 14.9414C30.6719 15.3516 30.457 15.8008 30.2031 16.1914L21.5312 29.7852C21.1406 30.4102 20.5742 30.7227 19.9297 30.7227Z'/></svg>";
        
    } else {
        NickName.innerHTML = "<P>Mt</P>";
        
    }
});
