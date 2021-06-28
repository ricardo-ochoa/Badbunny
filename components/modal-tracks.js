import "./component-artist.js";
import "./btn-play.js";

class modalTracks extends HTMLElement {
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
        <div class="DivBackground" id="DivBackground">
            <div class="DivTrack">
              <h2 class="indication">Selecciona máximo 2 artistas para el featuring</h2>

              <div class="artists-track">
              </div>

              <btn-play></btn-play>

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
        }

        .DivBackground {
            width: 100%;
            height: 100%;
            background-color: var(--primary-background);
            position: fixed;
            top: 0px;
            left: 0px;
            z-index: 3;
            display: none;
        } 
        
        .DivTrack {
            display: grid;
            grid-template-columns: repeat(1,1fr);
            width: 700px;
            height: 600px;
            margin: 20vh auto 0 auto;
            padding: 10px;
            box-sizing: border-box;
            border: 10px solid white;
            background-color: var(--primary-background);
        }

        .indication {
          color: white;
          grid-column: 1 / 3;
          grid-row: 1 / 2;
          justify-self: center;
          font-size: 1.8rem;
          width: 60%;
          text-align: center;
          font-weight: 500;
          margin-top: 2rem;
        }

        .artists-track {
          grid-column: 1 / 2;
          grid-row: 2 / 3;
          display: grid;
          gap: 5px;
          grid-template-columns: repeat(6,1fr);
          width: 600px;
          margin: 3rem 0 3rem 0;
          justify-self: center;
          color: #fff;
        }



        @media (max-width: 615px) {
            .DivTrack {
                grid-column: 1 / 4;
                grid-row: 1 / 4;
            }
        }

        @media (max-width: 768px) {
            .DivBackground {
                display: grid;
                grid-template-columns: repeat(3,1fr);
                grid-template-rows: repeat(4,1fr);
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0px;
                left: 0px;
            }

            .DivTrack {
                grid-column: 2 / 3;
                grid-row: 2 / 3;
                width: 500px!important;
                height: auto;
                margin: 10rem auto;
                padding: 0;
                background-color: var(--primary-background);
            }

            .indication {
              color: white;
              grid-column: 1 / 3;
              grid-row: 2 / 2;
              justify-self: center;
              font-size: 2rem;
              width: auto;
              margin: 1rem;
              text-align: center;
              font-weight: 500;
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

    open() {
      this.shadowRoot.querySelector(".DivBackground").style.display = "block"
    }
    close() {
      this.shadowRoot.querySelector(".DivBackground").style.display = "none"
    }
    

    connectedCallback() {
      this.render();

      const DivBackground = this.shadowRoot.getElementById('DivBackground');
      
      DivBackground.addEventListener('click', e => {
        if (e.target === DivBackground) this.close();
      })

      
      
    }
    

  }
  customElements.define("modal-tracks", modalTracks);
