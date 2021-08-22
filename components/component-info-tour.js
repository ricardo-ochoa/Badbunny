class componentInfoTour extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
      return ["year", "date", "nickname", "city", "place", "hour"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
      if (attr === "year") {
        this.year = newVal;
      }
      if (attr === "date") {
        this.date = newVal;
      }
      if (attr === "nickname") {
        this.nickname = newVal;
      }
      if (attr === "city") {
        this.city = newVal;
      }
      if (attr === "place") {
        this.place = newVal;
      }
      if (attr === "hour") {
        this.hour = newVal;
      }
      
    }
    getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = `
      <div class="modal background">

        <div class="frame" id="artist">

            <div class="artists-pic ">
              <div class="artist-img ${this.nickname}">
                <div class="number-tracks">
                    <p>${this.date}</p> <p>${this.year}</p>
                </div>
    
                <div class="artists-nickname">
                    <p class="nickname">${this.nickname}</p>
                </div> 
              </div>
            </div> 

            <div class="medias">
                <h3>${this.city}</h3>
                <p class="place"><span>${this.place}</span>, <span>${this.hour} hrs.</span> </p>

                <div class="btn-availability">
                  <p>Coming soon</p>
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

        .nickname{
          margin: 0;
          font-size: 11rem;
          font-weight: 500;
          padding: 0;
          line-height: 8rem;
        }

        .number-tracks, p {
          margin-top: .5rem;
          font-weight: 400;
          padding: .2rem .2rem 0rem .2rem;
        }

        .artists-nickname {
          display: flex;
          justify-content: center;
          
        }

        .Ba{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FBa.jpg?alt=media&token=02f975b2-83c7-4214-90e2-58a9ae342559);
          background-size: 100%;
          opacity: 90%;
        }
        .Ch{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FCh.jpg?alt=media&token=8b7381e4-39e2-49ca-9c15-fff5fd3936dd);
          background-size: 100%;
          opacity: 90%;
        }
        .Co{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FCo.jpg?alt=media&token=aaf2cad5-984d-4fa2-ab4e-237f7b76077a);
          background-size: 100%;
          opacity: 90%;
        }
        .Cu{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FCu.jpg?alt=media&token=e544f56f-cd75-4635-b9f2-52de25248720);
          background-size: 100%;
          opacity: 90%;
        }
        .Hu{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FHu.jpg?alt=media&token=d7847b29-b539-4d31-938b-c7c7b25a3f06);
          background-size: 100%;
          opacity: 90%;
        }
        .La{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FLa.jpg?alt=media&token=49351e5b-f9e7-40bf-a742-f95a81eb5b2c);
          background-size: 100%;
          opacity: 90%;
        }
        .Lv{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FLv.jpg?alt=media&token=8a04bbcf-e0e9-40dd-888e-3f0306fe3e3b);
          background-size: 100%;
          opacity: 90%;
        }
        .Ly{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FLy.jpg?alt=media&token=d2179e1c-d913-44df-b9fe-8f3e4ca7cfeb);
          background-size: 100%;
          opacity: 90%;
        }
        .Mi{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FMi.jpg?alt=media&token=48efbdea-1808-49f5-bff2-05d2ac0dae0b);
          background-size: 100%;
          opacity: 90%;
        }
        .My{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FMy.jpg?alt=media&token=c959a32f-577d-4ccc-ba37-5f6db5e44408);
          background-size: 100%;
          opacity: 90%;
        }
        .Ny{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FNy.jpg?alt=media&token=c460a26e-4a96-4a74-94e6-feedfea061f5);
          background-size: 100%;
          opacity: 90%;
        }
        .Pa{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FPa.jpg?alt=media&token=ccd9c581-e1dd-4146-97f8-c3b36d02b434);
          background-size: 100%;
          opacity: 90%;
        }
        .Po{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FPo.jpg?alt=media&token=bc922552-0f89-48d2-b1a9-2cf39caecce3);
          background-size: 100%;
          opacity: 90%;
        }
        .Sd{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FSd.jpg?alt=media&token=a904a591-c7be-4e92-9c9c-a9fd79c09004);
          background-size: 100%;
          opacity: 90%;
        }
        .Ta{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FTa.jpg?alt=media&token=f9236231-f282-4b3e-a700-4573110ee6cb);
          background-size: 100%;
          opacity: 90%;
        }
        .Mx{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2Fmx.jpg?alt=media&token=e997edeb-c774-49c3-ac50-529294723240);
          background-size: 100%;
          opacity: 90%;
        }

        .number-tracks{
          font-size: 1.8rem;
          display: flex;
          justify-content: space-between;
          margin: .0rem .3rem 0rem .3rem;
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
          display: flex;
          flex-direction: column;
          margin: 1rem;
          align-items: center;
        }

        .place{
          font-size: 1.3rem;
          font-weight: 300;
          margin-top: 0;
          padding: 0;
        }

        .merch-title-item {
          display: flex;
          justify-content: space-between;
          margin: 1rem;
        }
        
        h3{
          text-align: center;
          font-size: 2rem;
          font-weight: 500;
          margin: .5rem;
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
          margin: .7rem;
          font-weight: 400;
          font-size: 1.3rem;
          padding: 0;
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
            width: 250px;
            background-size: 100%;
          }
          .Mt{
            background-size: 110%;
          }

        }

        </style>
      `;
    }
    render() {
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    close(){
      const modal = document.querySelector("component-infotour");
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
  customElements.define("component-infotour", componentInfoTour);

