class componentInfoArtists extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
      return ["instagram", "nickname", "instagram_link", "apple_link", "spotify_link", "youtube_link"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
      if (attr === "instagram") {
        this.instagram = newVal;
      }
      if (attr === "nickname") {
        this.nickname = newVal;
      }
      if (attr === "instagram_link") {
        this.instagram_link = newVal;
      }
      if (attr === "apple_link") {
        this.apple_link = newVal;
      }
      if (attr === "spotify_link") {
        this.spotify_link = newVal;
      }
      if (attr === "youtube_link") {
        this.youtube_link = newVal;
      }
      
    }
    getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = `
      <div class="modal background">
        <div class="frame" id="artist">
          <div class="merch-item">
            <div class="artists-pic ">
              <div class="artist-img ${this.nickname}">
              </div>
            </div> 
            <div class="instagram-name">
                <a href="${this.instagram_link}" target="_blank" >
                  <h3>${this.instagram}</h3>
                </a>
            </div>
            <div class="medias">
              <component-media
                link="${this.apple_link}"
                nickname="Ap"
                name="Apple Music">
              </component-media>
              <component-media
                link="${this.spotify_link}"
                nickname="Sp"
                name="Spotify">
              </component-media>
              <component-media
                link="${this.youtube_link}"
                nickname="Yt"
                name="Youtube">
              </component-media>
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

        .modal{
          display: flex;
          justify-content: center;
          align-items: center;
          
          position: fixed;
          height: 100vh;
          width: 100vw;
          background-color: rgba(0,0,0,.85);
          top: 0;
          left: 0;
          z-index: 2;
          backdrop-filter: blur(5px);
        }

        .Mt{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FMt.jpg?alt=media&token=805f9038-f63d-4745-ae9a-eb57bb96604c);
          background-size: 100%;
        }
        .Jb{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FJb.jpg?alt=media&token=bd22e39e-4b92-4051-a995-17a55c605b76);
            background-size: 100%;
        }
        .W{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FW.jpg?alt=media&token=6edd8494-bbed-480d-87e9-0e94497c16ea);
            background-size: 100%;
        }
        .Y{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FY.jpg?alt=media&token=6e491704-7734-4ed0-9cee-489abb2101a0);
            background-size: 100%;
        }
        .Dy{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FDy.jpg?alt=media&token=9eb7d9c5-0544-4ba9-9227-752b39f3a21d);
            background-size: 100%;
        }
        .Lu{
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
          grid-template-columns: repeat(3,1fr);
          margin: 1rem;
          justify-items: center;
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
          width: 330px;
          border: 10px solid white;
          cursor: pointer;
          background-image: none;
          color: white;
          display: grid;
          align-content: space-between;
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

        @media (max-width: 768px) {

          .frame {
            width: 280px;
          }

          .artist-img{
            width: 200px;
          }
        }

        </style>
      `;
    }
    render() {
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    close(){
      const modal = document.querySelector("component-infoartist");
      document.body.removeChild(modal);
    }

    connectedCallback() {
      this.render();

      this.shadowRoot.querySelector('.modal').addEventListener('click', (e) => {
        if (e.target.classList[0] === "modal"){
          this.close(true)
        }
      });
      
    }
  }
  customElements.define("component-infoartist", componentInfoArtists);

