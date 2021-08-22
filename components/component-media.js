class componentMedia extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
      return ["nickname", "name", "link"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
      if (attr === "nickname") {
        this.nickname = newVal;
      }
      if (attr === "name") {
        this.name = newVal;
      }
      if (attr === "link") {
        this.link = newVal;
      }
    }
    getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = `
        <a href="${this.link}" target="_blank">
          <div class="${this.nickname} artist">

            <div class="number-tracks">
            <p></p> <p></p>
            </div>

            <div class="artists-nickname">
                <p class='nickname'>${this.nickname}</p>
                </div>

            <div class="artist-name">
                <p>${this.name}</p>
            </div>

          </div>
        </a>
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

        a{
          text-decoration: none;
        }

      .Ig:hover{
          background: rgb(252,176,69);
          background: linear-gradient(20deg, rgba(252,176,69,1) 9%, rgba(253,29,29,1) 44%, rgba(131,58,180,1) 80%);
          background-size: 100%;
      }
      .Fb:hover{
          background: #3508fa;
          background-size: 100%;
      }
      .Tw:hover{
          background: #17ccf9;
          background-size: 100%;
      }
      .Yt:hover{
          background: #f91717;
          background-size: 100%;
      }
      .Sp:hover{
          background: #00b816;
          background-size: 100%;
      }
      .Ap:hover{
          background: rgb(250,36,61);
      background: linear-gradient(0deg, rgba(250,36,61,1) 0%, rgba(251,91,115,1) 100%);
          background-size: 100%;
      }
      .Dz:hover{
          background: rgb(252,176,69);
          background: linear-gradient(60deg, rgba(252,176,69,1) 13%, rgba(253,29,29,1) 34%, rgba(85,23,143,1) 58%, rgba(13,179,15,1) 88%);
          background-size: 100%;
      }
      .Td:hover{
          background: #000;
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

        .number-tracks{
          font-size: .7rem;
          display: flex;
          justify-content: space-between;
          margin: .3rem .3rem 0rem .3rem;
          font-weight: 300;
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


        </style>
      `;
    }
    render() {
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }


    connectedCallback() {
      this.render();
      

      function instagramPage() {
        console.log("instagram");
      }

    }
  }
  customElements.define("component-media", componentMedia);

