class BtnPlay extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
      return ["title"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
      if (attr === "title") {
        this.title = newVal;
      }
    }
    getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = `
              <div class="play-zone">
                <p class="song-title">01-Barrio</p>
                <p class="song-artists" id="artistsNames">Bad Bunny  <span> x </span>  Tainy </p>
                <div class="btn-play">
                    <svg class="icon-play" viewBox="0 0 21 21"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3867 20.0664C15.7285 20.0664 20.123 15.6719 20.123 10.3301C20.123 4.98828 15.7285 0.603516 10.3867 0.603516C5.04492 0.603516 0.650391 4.98828 0.650391 10.3301C0.650391 15.6719 5.04492 20.0664 10.3867 20.0664ZM14.2148 10.8965L8.52148 14.207C8.0625 14.4805 7.51562 14.2363 7.51562 13.748V6.93164C7.51562 6.44336 8.08203 6.19922 8.52148 6.45312L14.2148 9.79297C14.625 10.0371 14.6348 10.6523 14.2148 10.8965Z"/>
                        
                    </svg>
                    <p class="escuchar">Escuchar</p>
                </div>
              </div>
        ${this.getStyles()}
      `;
      return template;
    }
    getStyles() {
      return `
        <style>
        :host {
          --primary-background: rgba(0, 0, 0, 0.9);
            margin: 0 auto;

            display: flex;
            grid-column: 1/2;
            grid-row: 3 / 4;
        }

        .play-zone {
          display: flex;
          grid-column: 1/2;
          grid-row: 3 / 4;
          margin: 0 3rem 3rem 3rem;
          color: #fff;
          display: block;
          text-align: center;
        }

        ____

        .song-title{
          font-size: 1.4rem;
          font-weight: 500;
          margin-bottom: .8rem;
      }
      .song-artists {
          font-weight: 300;
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
      
      .icon-play{
          width: 30px;
          margin: 0 .5rem 0 0;
      }
      
      .escuchar {
          align-self: center;
          font-weight: 400;
          font-size: 1.1rem;
          color: white;
      }
      
      .escuchar:hover{
          color: #000;
      }


        @media (max-width: 768px) {

            .play-zone {
              display: flex;
              grid-column: 1 / 2;
              grid-row: 4 / 4;
              color: #fff;
              display: block;
              text-align: center;
              margin: 1rem 1rem 2rem 1rem;
            }
        }


        </style>
      `;
    }
    render() {
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    open() {
      this.shadowRoot.querySelector(".DivBackground").style.display = "block"
    }
    close() {
      this.shadowRoot.querySelector(".DivBackground").style.display = "none"
    }
    

    connectedCallback() {
      this.render();

      
    }
    

  }
  customElements.define("btn-play", BtnPlay);

  