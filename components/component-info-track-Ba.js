class componentInfoTrackBa extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
      return ["nickname", "artistname"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {

      if (attr === "nickname") {
        this.nickname = newVal;
      }
      if (attr === "artistname") {
        this.artistname = newVal;
      }
      
    }
    getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = `
      
      <div class="modal background">

      <div class="close">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4.51855 25.4463H21.4668C24.0596 25.4463 25.3926 24.0986 25.3926 21.5352V4.55762C25.3926 2.00879 24.0596 0.661133 21.4668 0.661133H4.51855C1.94043 0.661133 0.607422 1.97949 0.607422 4.55762V21.5352C0.607422 24.1133 1.94043 25.4463 4.51855 25.4463ZM4.5625 24.0254C2.90723 24.0254 2.01367 23.1611 2.01367 21.4619V4.63086C2.01367 2.94629 2.90723 2.06738 4.5625 2.06738H21.4229C23.0488 2.06738 23.9717 2.94629 23.9717 4.63086V21.4619C23.9717 23.1611 23.0488 24.0254 21.4229 24.0254H4.5625ZM8.12207 18.6494C8.3418 18.6494 8.50293 18.5762 8.66406 18.4004L13 14.0645L17.3359 18.4004C17.4971 18.5615 17.6729 18.6494 17.8926 18.6494C18.3027 18.6494 18.625 18.3271 18.625 17.9316C18.625 17.7119 18.5518 17.5508 18.3906 17.3896L14.04 13.0391L18.4053 8.67383C18.5664 8.49805 18.625 8.35156 18.625 8.13184C18.625 7.73633 18.3027 7.42871 17.8926 7.42871C17.7021 7.42871 17.541 7.4873 17.3652 7.66309L13 12.0137L8.66406 7.67773C8.48828 7.50195 8.3418 7.44336 8.12207 7.44336C7.71191 7.44336 7.38965 7.75098 7.38965 8.14648C7.38965 8.35156 7.46289 8.52734 7.62402 8.67383L11.9746 13.0391L7.62402 17.4043C7.46289 17.5508 7.38965 17.7266 7.38965 17.9316C7.38965 18.3271 7.71191 18.6494 8.12207 18.6494Z" fill="white"/>
        </svg>
      </div>

        <div class="frame" id="artist">
          <div class="merch-item">
            <div class="indication">
              <p>Selecciona máximo 2 artistas para el featuring</p>
            </div>

            <div class="medias">
                
                <component-artisttrack
                  nickname="Mt"
                  artistname="Myke Towers"
                  ide="01"
                  tracksfeaturings="01,05"
                  class="Mt artist"
                ></component-artisttrack>

                <component-artisttrack
                  nickname="Jb"
                  artistname="J Balvin"
                  ide="02"
                  tracksfeaturings="01,05"
                  class="Jb"
                  value="J Balvin"
                ></component-artisttrack>

                <component-artisttrack
                  nickname="W"
                  artistname="Wisin"
                  ide="03"
                  tracksfeaturings="01,03"
                  class="W artist"
                ></component-artisttrack>

                <component-artisttrack
                  nickname="Y"
                  artistname="Yandel"
                  ide="04"
                  tracksfeaturings="01,03"
                  class="Y artist"
                ></component-artisttrack>

                <component-artisttrack
                  nickname="Dy"
                  artistname="Daddy Yankee"
                  ide="05"
                  tracksfeaturings="01,03"
                  class="Dy artist"
                ></component-artisttrack>

                <component-artisttrack
                  nickname="Lu"
                  artistname="Lunay"
                  ide="06"
                  tracksfeaturings="01"
                  class="Lu artist"
                ></component-artisttrack>

            </div>

            <div class="play-zone">

              <p class="song-title">01-Barrio</p>
               <span class="song-artists" id="artistsNames"></span>
              
              <span id="trackBarrio" style="margin-top: 1rem;"> 
                <audio-player title=""
                  src="../src/Secret Job - Godmode.mp3"
                  bar-width="10"
                  bar-gap="5"
                  preload 
                ></audio-player>
              </span>

            </div>

            </div>

          </div>
        </div>
      </div>  
        ${this.getStyles()}
      `;
      return template;
      
    }
    getStyles() {
      return `
        <style>

        .song-title{
          margin: 1rem;
        }

        .frame {
          background-color: rgba(0, 0, 0,.5);
        }
        .play-zone {
          display: flex;
          grid-column: 1/2;
          grid-row: 4 / 4;
          margin: 2rem 3rem 3rem 3rem;
          color: #fff;
          display: block;
          text-align: center;
        }

        .btn-play {
          border: 2px solid white ;
          width: 150px;
          height: 50px;
          border-radius: 100px;
          display: flex;
          justify-content: center;
          align-content: center;
          margin: 0 auto;
          margin-top: 2rem;
          fill: #fff;
          color: #fff;
          cursor: pointer;
        }
      
        .btn-play:hover{
            border: 2px solid  rgb(204, 99, 60) ;
            background-color: coral;
            fill: #000!important;
        }

        #trackBarrio {
          margin-top: 1rem;
        }
        .close {
          z-index: 3;
          margin-top: 3rem;
          margin-bottom: 7rem;
          margin-right: 3rem;
          align-self: flex-end;
        }

        .modal{
          display: flex;
          // justify-content: center;
          // align-items: center;
          flex-direction: column;
          
          position: fixed;
          height: 100vh;
          width: 100vw;
          background-color: rgba(0,0,0,.85);
          top: 0;
          left: 0;
          z-index: 2;
          backdrop-filter: blur(5px);
        }

        .indication {
          color: white;
          justify-self: center;
          font-size: 1.8rem;
          text-align: center;
          font-weight: 500;
          margin-top: 2rem;
        }

        .Mt:hover{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FMt.jpg?alt=media&token=805f9038-f63d-4745-ae9a-eb57bb96604c);
          background-size: 100%;
        }
        .Jb:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FJb.jpg?alt=media&token=bd22e39e-4b92-4051-a995-17a55c605b76);
            background-size: 100%;
        }
        .W:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FW.jpg?alt=media&token=6edd8494-bbed-480d-87e9-0e94497c16ea);
            background-size: 100%;
        }
        .Y:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FY.jpg?alt=media&token=6e491704-7734-4ed0-9cee-489abb2101a0);
            background-size: 100%;
        }
        .Dy:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FDy.jpg?alt=media&token=9eb7d9c5-0544-4ba9-9227-752b39f3a21d);
            background-size: 100%;
        }
        .Lu:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FLu.jpg?alt=media&token=6fb29745-545a-4a34-a9af-e24b9bc934eb);
            background-size: 100%;
        }
        .M{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FM.jpg?alt=media&token=d7ce4bb2-33ac-4c0d-9109-51e26756cb7d);
            background-size: 100%;
        }
        .F{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FF.jpg?alt=media&token=b9b79392-3e3a-48a1-8e39-47c04bb5fb43);
            background-size: 100%;
        }
        .Mw{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FMw.jpg?alt=media&token=8f6fa6b0-21f4-4df5-bf74-a53da5473946);
            background-size: 100%;
        }
        .Jh{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FJh.jpg?alt=media&token=bcee7482-e552-4d1e-aab2-4e90c7fff7a8);
            background-size: 100%;
        }
        .Mb{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FMb.jpg?alt=media&token=f16c7e37-cb0a-40cf-953b-13ad2e526f66);
            background-size: 100%;
        }
        .C{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FC.jpg?alt=media&token=bb47c02e-8ccd-426d-b491-19a30750610e);
            background-size: 100%;
        }
        .Ra{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FRa.jpg?alt=media&token=08eb40ae-6266-40bc-b294-d7b686b91936);
            background-size: 100%;
        }
        .Jw{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FJw.jpg?alt=media&token=c247a9ce-a0f1-4dbf-b14a-ccb290db9d5a);
            background-size: 100%;
        }
        .A{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FA.jpg?alt=media&token=3d08d6a8-7cef-428e-b84d-3fe17a77e011);
            background-size: 100%;
        }
        .Rw{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FRw.jpg?alt=media&token=49c5a5f6-db7a-4a0a-9f47-0a2e441997a7);
            background-size: 100%;
        }
        .To{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FTo.jpg?alt=media&token=eee64f88-3546-414c-9e90-8696f9bebe66);
            background-size: 100%;
        }
        .Ec{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FEc.jpg?alt=media&token=33b7f439-49a8-4a6c-948a-2eb53280d90b);
            background-size: 100%;
        }
        
        a:link {
          text-decoration: none;
          color: white;
        }

        a:hover {
          color: salmon!important;
        }

        a:visited {
          color: white;
        }

        .artist-img{
          width: 300px;
          margin: 1rem;
          height: 300px;
        }

        .medias{
          display: grid;
          grid-template-columns: repeat(6,1fr);
          margin: 1rem;
          justify-items: center;
          padding: 0rem 2rem 0rem 2rem;
          gap: 3px;
        }
                
        }

        .merch-title-item {
          display: flex;
          justify-content: space-between;
          margin: 1rem;
        }
        
        h3{
          text-align: center;
          font-size: 1.6rem;
          font-weight: 400;
          margin: .5rem;
        }

        .instagram-name{


        }

        .btn-availability{
          width: 10rem;
          margin: 0 auto;
          border: 2px solid white;
          text-align: center;
          margin-bottom: 1rem; 
          background-color: salmon;
        }

        .btn-availability p{
          margin: .5rem;
          font-weight: 400;
          font-size: 1rem;
        }

        .frame {
          margin: 0 auto;
          width: 687px;
          border: 10px solid white;
          cursor: pointer;
          background-image: none;
          color: white;
          // display: grid;
          // align-content: space-between;
        }

        .artists-pic {
          font-size: 2.8rem;
          display: flex;
          justify-content: center;
        }

        .artist-name{
          font-size: .7rem;
          display: flex;
          justify-content: center;
          margin-bottom: .3rem;
          font-weight: 300;
        }
        

        @media (max-width: 860px) {

          .medias{
            display: grid;
            grid-template-columns: repeat(3,1fr);
            margin: 1rem 4rem 1rem 4rem;
            justify-items: center;

            gap: 11px;
          }

          .artist-img{
            width: 200px;
            height: 200px;
          }

          .frame {
            width: 500px;
          }


        }

        @media (max-width: 600px) {
  
          .artist-img{
            width: 240px;
            height: 240px;
          }
          .frame {
            width: 360px;
          }
          .medias{
            margin: 0rem;
            justify-items: center;
            
            gap: 4px;
            
          }
          .close {
            margin-top: 1rem;
            margin-bottom: 1rem;
            margin-right: 1rem;
          }

          .play-zone {

            margin: 0 0rem 2rem 0rem;

          }
        }

        @media (max-width: 500px) {
  
          .artist-img{
            width: 240px;
            height: 240px;
          }

          .frame {
            width: 350px;
          }


          .medias{
            margin: 0rem;
            justify-items: center;
            padding: 0rem 0rem 0rem 0rem;
            gap: 4px;
            margin: 1rem 1rem 1rem 1.5rem;
          }
          .close {
            margin-top: 1rem;
            margin-bottom: 1rem;
            margin-right: 1rem;
          }
          .indication {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 375px) {
  
          .artist-img{
            width: 240px;
            height: 240px;
          }

          .frame {
            width: 300px;
          }

          .medias{
            margin: 0rem;
            justify-items: center;
            padding: 0rem 0rem 0rem 0rem;
            gap: 4px;
            
          }
          .close {
            margin-top: 1rem;
            margin-bottom: 1rem;
            margin-right: 1rem;
          }

          .play-zone {

            margin: 0 0rem 1rem 0rem;

        }

        }

        </style>
      `;
    }

    render() {
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    
    close(){
      const modal = document.querySelector("component-infotrackba");
      document.body.removeChild(modal);
    }

    SongName(){
      this.trackName = this.shadowRoot.getElementById('artistsNames');
      this.trackName.value="Bad Bunny x Tainy";
      this.shadowRoot.getElementById('artistsNames').innerHTML=this.trackName.value;
    }

    checked(){
      const Myke = this.shadowRoot.querySelector(".Mt"); 
      const Jb = this.shadowRoot.querySelector(".Jb"); 
      const W = this.shadowRoot.querySelector(".W"); 
      const Y = this.shadowRoot.querySelector(".Y"); 
      const Dy = this.shadowRoot.querySelector(".Dy"); 
      const Lu = this.shadowRoot.querySelector(".Lu"); 

      const name = this.shadowRoot.getElementById('artistsNames')

      Myke.addEventListener('click', () => {
        Myke.classList.toggle('artistselected'); 
        
        if (Myke.classList[2] === "artistselected") {
          name.innerHTML += " x " + Myke.artistname;
        } else {
          name.innerHTML = name.value;
        }

      });

      Jb.addEventListener('click', () => {
        Jb.classList.toggle('artistselected');

        if (Jb.classList[1] === "artistselected") {
          name.innerHTML += " x " + Jb.artistname;
        } else {
          name.innerHTML = name.value;
        }
      });

      W.addEventListener('click', () => {
        W.classList.toggle('artistselected');
        if (W.classList[2] === "artistselected") {
          name.innerHTML += " x " + W.artistname;
        } else {
          name.innerHTML = name.value;
        }
      });
      Y.addEventListener('click', () => {
        Y.classList.toggle('artistselected')
        if (Y.classList[2] === "artistselected") {
          name.innerHTML += " x " + Y.artistname;
        } else {
          name.innerHTML = name.value;
        }
      });
      Dy.addEventListener('click', () => {
        Dy.classList.toggle('artistselected');
        if (Dy.classList[2] === "artistselected") {
          name.innerHTML += " x " + Dy.artistname;
        } else {
          name.innerHTML = name.value;
        }
      });
      Lu.addEventListener('click', () => {
        Lu.classList.toggle('artistselected');
        if (Lu.classList[2] === "artistselected") {
          name.innerHTML += " x " + Lu.artistname;
        } else {
          name.innerHTML = name.value;
        }
      });
    }

    prueba(){
      const Astistas = this.shadowRoot.querySelectorAll('artist');
      const container = this.shadowRoot.querySelector(".medias"); 
  
      Astistas.addEventListener('click', (e) => {
          console.log("oli")
      });
    }

    deleteName(){
      this.shadowRoot.getElementById('somediv').innerHTML= "";
    }

    ValueName(){
      this.shadowRoot.querySelector(".Mt").value;
    }
    


    connectedCallback() {
      this.render();
      this.SongName();
      this.checked();

      this.shadowRoot.querySelector('.modal').addEventListener('click', (e) => {
        if (e.target.classList[0] === "modal"){
          this.close(true)
        }
        if (e.target.nodeName === "svg"){
          this.close(true)
        }
      });

    }

    disconnectedCallback() {
      
    }
  }

customElements.define("component-infotrackba", componentInfoTrackBa);
