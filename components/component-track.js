

class componentTrack extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
      return ["id", "producer", "nickname", "artistname", "img"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
      if (attr === "id") {
        this.id = newVal;
      }
      if (attr === "producer") {
        this.producer = newVal;
      }
      if (attr === "nickname") {
        this.nickname = newVal;
      }
      if (attr === "trackname") {
        this.trackname = newVal;
      }
      if (attr === "img") {
        this.img = newVal;
      }
      // if (attr === "selected") {
      //   this.selected = newVal;
      // }

      
    }
    getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = `
      <div class="${this.img}" id="track1">
        <div class="number-producer">
            <p>${this.id}</p> <p>${this.producer}</p>
        </div>
        <div class="nickname">
            <p>${this.nickname}</p>
        </div>
        <div class="track-name">
            <p>${this.trackname}</p>
        </div>
      </div>
        ${this.getStyles()}
      `;
      return template;
    }
    getStyles() {
      return `
        <style>

        .01 {
          grid-column: 1 / 2;
          grid-row: 1 / 2;
        }
        .02 {
          grid-column: 2 / 3;
          grid-row: 1 / 2;
        }
        .03 {
          grid-column: 2 / 3;
          grid-row: 2 / 3;
        }
        .04 {
          grid-column: 3 / 4;
          grid-row: 2 / 3;
        }
        .05 {
          grid-column: 4 / 5;
          grid-row: 2 / 3;
        }
       
        .01,.02,.03,.04,.05 {
          background-color: coral;
          width: 160px;
          height: 160px;
          mix-blend-mode: luminosity;
          border: 4px solid white;
          color: white;
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
        }
        .number-producer {
          display: flex;
          justify-content: space-between;
          font-weight: 400;
          mix-blend-mode: normal;
        }
        .nickname {
          display: flex;
          justify-content: center;
          font-size: 6rem;
          margin: 0;
          font-weight: 500;
        }
        .track-name {
          display: flex;
          justify-content: center;
          margin: 0;
          font-weight: 300;
          font-size: 1.2rem;
          font-variant: normal;
        }
        </style>
      `;
    }
    render() {
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }


    connectedCallback() {
      this.render();
      
    }
  }
  customElements.define("component-track", componentTrack);

