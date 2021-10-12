class componentModal extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
      return ["instagram", "name", "img"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
      if (attr === "instagram") {
        this.instagram = newVal;
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
        <div class="modal">
            
        </div>
        ${this.getStyles()}
      `;
      return template;
    }
    getStyles() {
      return `
        <style>

        .modal{
          display: none;
          justify-content: center;
          align-items: center;

          position: fixed;
          height: 100vh;
          width: 100vw;
          background-color: rgba(0,0,0,.9);
          top: 0;
          left: 0;
          z-index: 2;
          backdrop-filter: blur(5px);
        }

        @media (max-width: 768px) {

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
  customElements.define("component-modal", componentModal);

