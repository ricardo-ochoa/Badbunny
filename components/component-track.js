

class componentTrack extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
      return ["number", "producer", "nickname", "artistname", "img"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
      if (attr === "number") {
        this.number= newVal;
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
      
    }
    getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = `
      <div class="${this.img} ${this.nickname}">
        <div class="number-producer">
            <p>${this.number}</p> <p>${this.producer}</p>
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

        p{
          margin: 0;
        }
       
        .Ba,.D,.Bu,.N,.Ny {
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
          font-weight: 300;
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

        .Ba:hover{
          background-image: url("https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tracks%2Fbarrio.gif?alt=media&token=2b531c1c-a0c7-40da-8b7e-61834747e820");
          background-size: 100%;
          mix-blend-mode: normal;
        }
        .D:hover{
          background-image: url("https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tracks%2Fdimelo.gif?alt=media&token=1aecff4c-d066-4758-b4c3-65ece24f9a5e");
          background-size: 100%;
          mix-blend-mode: normal;
        }
        .Bu:hover{
          background-image: url("https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tracks%2Fbuenostiempos.gif?alt=media&token=4419bf29-5fc7-46e6-bd3b-368ea924fad5");
          background-size: 100%;
          mix-blend-mode: normal;
        }
        .N:hover{
          background-image: url("https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tracks%2Fnotaloka.gif?alt=media&token=5ff17bb2-b8e8-46d2-85df-d2b41692788b");
          background-size: 100%;
          mix-blend-mode: normal;
        }
        .Ny:hover{
          background-image: url("https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tracks%2Fny.gif?alt=media&token=ec50066d-1af5-498b-bade-346b0af9bba1");
          background-size: 100%;
          mix-blend-mode: normal;
        }

        @media (max-width: 860px) {

          .Ba,.D,.Bu,.N,.Ny {
            width: 130px;
            height: 130px;
          }

          .nickname {
            font-size: 5rem;
          }
          .track-name {
            font-size: 1rem;
          }
    
      }

      @media (max-width: 400px) {
        .Ba,.D,.Bu,.N,.Ny {
          width: 100px;
          height: 100px;
        }
        .nickname {
          font-size: 4rem;
          margin-bottom: -.15rem;
        }
        .track-name {
          font-size: .8rem;
          font-weight: 400;
        }
        .number-producer {
          font-size: .9rem;
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
      
    }
  }
  customElements.define("component-track", componentTrack);

