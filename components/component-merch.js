class componentMerch extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
      return ["price", "name", "img"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
      if (attr === "price") {
        this.price = newVal;
      }
      if (attr === "name") {
        this.name = newVal;
      }
      if (attr === "img") {
        this.img = newVal;
      }
      
    }
    getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = `
        <div class="frame" id="artist">

          <div class="merch-item">
            <div class="merch-title-item">
            <h3>Stock</h3> <h3>${this.price}</h3>
            </div>
            <div class="artists-nickname">
                <img class="merch-img" src="${this.img}" alt="">
            </div>
            <div class="merch-name">
                <p>${this.name}</p>
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

        p{
          font-weight: 300;
          font-size: 1.17em;
        }

        .merch-img{
          width: 300px;
        }

        .merch-title-item {
          display: flex;
          justify-content: space-between;
          margin: 1rem;
        }
        h3{
          margin: 0;
        }

        .merch-name{
          text-align: center;
          margin: 1 rem;
        }

        .frame {
          width: 400px;
          border: 10px solid white;
          cursor: pointer;
          background-image: none;
          color: white;
          display: grid;
          align-content: space-between;
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

        @media (max-width: 768px) {


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
  customElements.define("component-merch", componentMerch);

