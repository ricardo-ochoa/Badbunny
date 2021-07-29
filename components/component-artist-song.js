class componentArtist extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
      return ["ide", "tracksfeaturings", "nickname", "artistname", "img"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
      if (attr === "ide") {
        this.ide = newVal;
      }
      if (attr === "tracksfeaturings") {
        this.tracksfeaturings = newVal;
      }
      if (attr === "nickname") {
        this.nickname = newVal;
      }
      if (attr === "artistname") {
        this.artistname = newVal;
      }
      if (attr === "img") {
        this.img = newVal;
      }
      
    }
    getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = `
        <div class="${this.nickname} artist " id="artist">

          <div class="number-tracks">
          <p>${this.ide}</p> <p>${this.tracksfeaturings}</p>
          </div>

          <div class="artists-nickname">
              <p class='nickname'>${this.nickname}</p>
              <svg class='check-icon' width='44' height='41' viewBox='0 0 44 43' fill='coral' xmlns='http://www.w3.org/2000/svg'><path d='M10.8086 37.7344H14.793C15.1641 37.7344 15.418 37.832 15.6914 38.1055L18.543 40.918C20.8867 43.3008 23.0742 43.2812 25.4375 40.918L28.2695 38.1055C28.543 37.832 28.8164 37.7344 29.1875 37.7344H33.1719C36.4922 37.7344 38.0547 36.1914 38.0547 32.832V28.8477C38.0547 28.4766 38.1719 28.2227 38.4258 27.9492L41.2383 25.1172C43.6211 22.7539 43.6016 20.5664 41.2383 18.2031L38.4258 15.3711C38.1719 15.0977 38.0547 14.8242 38.0547 14.4531V10.4688C38.0547 7.14844 36.5117 5.58594 33.1719 5.58594H29.1875C28.8164 5.58594 28.543 5.48828 28.2695 5.21484L25.4375 2.40234C23.0742 0.0195312 20.8867 0.0390625 18.5234 2.40234L15.6914 5.21484C15.4375 5.48828 15.1641 5.58594 14.793 5.58594H10.8086C7.44922 5.58594 5.90625 7.10938 5.90625 10.4688V14.4531C5.90625 14.8242 5.80859 15.0977 5.53516 15.3711L2.72266 18.2031C0.359375 20.5664 0.359375 22.7539 2.72266 25.1172L5.53516 27.9492C5.80859 28.2227 5.90625 28.4766 5.90625 28.8477V32.832C5.90625 36.1719 7.46875 37.7344 10.8086 37.7344ZM19.9297 30.7227C19.2656 30.7227 18.7383 30.4492 18.2305 29.7852L13.6406 24.1602C13.3477 23.7891 13.1719 23.3594 13.1719 22.9297C13.1719 22.0508 13.8555 21.3281 14.7344 21.3281C15.2812 21.3281 15.7109 21.5234 16.1602 22.1289L19.8516 26.8555L27.6641 14.3359C28.0156 13.75 28.5039 13.457 29.0312 13.457C29.8906 13.457 30.6719 14.043 30.6719 14.9414C30.6719 15.3516 30.457 15.8008 30.2031 16.1914L21.5312 29.7852C21.1406 30.4102 20.5742 30.7227 19.9297 30.7227Z'/></svg>
          </div>

          <div class="artist-name">
              <p>${this.artistname}</p>
          </div>

        </div>
        ${this.getStyles()}
      `;
      return template;
    }
    getStyles() {
      return `
        <style>

        p{
          margin: 0;
        }

        .check-icon {
          display: none;
        }

        .Mt:hover{
          background-image: url("./src/artistas/myke.jpg");
          background-size: 100%;
        }
        .balvin:hover{
            background-image: url("./src/artistas/balvin.jpg");
            background-size: 100%;
        }
        .wisin:hover{
            background-image: url("./src/artistas/wisin.jpg");
            background-size: 100%;
        }
        .yandel:hover{
            background-image: url("./src/artistas/yandel.jpg");
            background-size: 100%;
        }
        .daddy:hover{
            background-image: url("./src/artistas/daddy.jpg");
            background-size: 100%;
        }
        .lunay:hover{
            background-image: url("./src/artistas/lunay.jpg");
            background-size: 100%;
        }
        .mariah:hover{
            background-image: url("./src/artistas/mariah.jpg");
            background-size: 100%;
        }
        .farina:hover{
            background-image: url("./src/artistas/farina.jpg");
            background-size: 100%;
        }
        .mikywoodz:hover{
            background-image: url("./src/artistas/mikywoodz.jpg");
            background-size: 100%;
        }
        .jhay:hover{
            background-image: url("./src/artistas/jhay.jpg");
            background-size: 100%;
        }
        .becerra:hover{
            background-image: url("./src/artistas/becerra.jpg");
            background-size: 100%;
        }
        .cazzu:hover{
            background-image: url("./src/artistas/cazzu.jpg");
            background-size: 100%;
        }
        .randy:hover{
            background-image: url("./src/artistas/randy.jpg");
            background-size: 100%;
        }
        .jowell:hover{
            background-image: url("./src/artistas/jowell.jpg");
            background-size: 100%;
        }
        .arca:hover{
            background-image: url("./src/artistas/arca.jpg");
            background-size: 100%;
        }
        .rauw:hover{
            background-image: url("./src/artistas/rauw.jpg");
            background-size: 100%;
        }
        .toki:hover{
            background-image: url("./src/artistas/toki.jpg");
            background-size: 100%;
        }
        .eladio:hover{
            background-image: url("./src/artistas/eladio.jpg");
            background-size: 100%;
        }

        .artist {
          width: 90px;
          height: 90px;
          border: 2px solid white;
          cursor: pointer;
          background-image: none;
          color: white;
          display: grid;
          align-content: space-between;
        }

        .artistselected {
          background: rgba(0, 0, 0, 0.8);
          
          background-size: 100%;
          color: coral;
          background-blend-mode:overlay;
        }

        .number-tracks{
          font-size: .7rem;
          display: flex;
          justify-content: space-between;
          margin: .3rem .3rem 0rem .3rem;
          font-weight: 300;
        }

        .artists-nickname-check{
          font-size: 3rem;
          display: flex;
          justify-content: center;
          margin-bottom: .75rem;
        }

        .artists-nickname {
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

        .artists-track {
          grid-column: 1 / 2;
          grid-row: 3 / 3;
          display: grid;
          gap: 5px;
          grid-template-columns: repeat(6,1fr);
          width: 600px;
          margin: 3rem 0 3rem 0;
          justify-self: center;
          color: #fff;
        }

        @media (max-width: 768px) {
          .artists {
              grid-template-columns: repeat(4,1fr);
              grid-template-rows: repeat(5,1fr);
              gap: 0.7rem;
              align-content: center;
              align-items: center;
          }
          .artist {
              width: 115px;
              height: 115px;
              display: grid;
          }
      
          .artists-track {
              grid-column: 1 / 2;
              grid-row: 3 / 3;
              display: grid;
              gap: 5px;
              grid-template-columns: repeat(3,1fr);
              width: auto;
              margin: 2rem;
              justify-self: center;
              color: #fff;
          }

        }

        </style>
      `;
    }
    render() {
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }


    connectedCallback() {
      this.render();

      const artist = this.shadowRoot.getElementById('artist'); 
      const check = this.shadowRoot.querySelector('.check-icon');
      const nickname = this.shadowRoot.querySelector('.nickname');

      artist.addEventListener('click', () => {
          artist.classList.toggle('artistselected');
      })

      artist.addEventListener("click", selectArtist =>  {
        if (artist.classList.contains( "artistselected" )) {
          nickname.style.display = 'none';
          check.style.display = 'block';
        } else {
          nickname.style.display = 'block';
          check.style.display = 'none';
        }
      });
      
    }
  }
  customElements.define("component-artist", componentArtist);

