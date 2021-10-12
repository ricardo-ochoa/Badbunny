// import "./components/component-info-track.js";
// import "./components/component-artist-song.js";
// import "./components/audio-player.js";

// function SelectBarrioArtits(){
//     firebase.database().ref('tracks/01/artists').once('value',
//         function(AllTracks){
//             AllTracks.forEach(
//                 function(Tracks){ 
//                     var name = Tracks.val().name;
//                     var nickname = Tracks.val().nickname;
//                     var ide = Tracks.val().id;
//                     var tracks =  Tracks.val().tracks;
                
//                     addArtistsItems(nickname,name,ide,tracks)
//                     console.log(name,ide);
//                 }
//             )
//             allBarrioArtists.push(addArtistsItems);
          
//         });
// }

// const modalTracks = document.createElement("component-infotrack");

// function addArtistsItems(nickname,name,ide,tracks){
//     modalTracks.nickname = nickname;
//     modalTracks.artistname = name;
//     modalTracks.ide = ide;
//     modalTracks.tracks = tracks;
// }





// const featuring = ["Myke Towers", "J Balvin", "Wisin", "Yandel", "Daddy Yankee", "Lunay"]

// addGlobalEventListener("click", e => {
//     if (e.target.matches('artist')) {
//         artist.classList.toggle('artistselected');
//     }
// })

// function addGlobalEventListener(type, selector, callback) {
//     document.addEventListener(type, e => {
//         if (e.target.matches(selector)) callback(e)
//     })
// }

// function check() {
//     artist.classList.toggle('artistselected');
// };


// artist.addEventListener('click', check, false);

class CustomSelect {
    constructor(originalSelect) {
      this.originalSelect = originalSelect;
      this.customSelect = document.createElement("div");
      this.customSelect.classList.add("select");
  
      this.originalSelect.querySelectorAll("option").forEach((optionElement) => {
        const itemElement = document.createElement("div");
  
        itemElement.classList.add("select__item");
        itemElement.textContent = optionElement.textContent;
        this.customSelect.appendChild(itemElement);
  
        if (optionElement.selected) {
          this._select(itemElement);
        }
  
        itemElement.addEventListener("click", () => {
          if (
            this.originalSelect.multiple &&
            itemElement.classList.contains("select__item--selected")
          ) {
            this._deselect(itemElement);
          } else {
            this._select(itemElement);
          }
        });
      });
  
      this.originalSelect.insertAdjacentElement("afterend", this.customSelect);
      this.originalSelect.style.display = "none";
    }
  
    _select(itemElement) {
      const index = Array.from(this.customSelect.children).indexOf(itemElement);
  
      if (!this.originalSelect.multiple) {
        this.customSelect.querySelectorAll(".select__item").forEach((el) => {
          el.classList.remove("select__item--selected");
        });
      }
  
      this.originalSelect.querySelectorAll("option")[index].selected = true;
      itemElement.classList.add("select__item--selected");
    }
  
    _deselect(itemElement) {
      const index = Array.from(this.customSelect.children).indexOf(itemElement);
  
      this.originalSelect.querySelectorAll("option")[index].selected = false;
      itemElement.classList.remove("select__item--selected");
    }
  }
  
  document.querySelectorAll(".custom-select").forEach((selectElement) => {
    new CustomSelect(selectElement);
  });
  