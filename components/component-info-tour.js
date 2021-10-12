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

      <div class="close">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4.51855 25.4463H21.4668C24.0596 25.4463 25.3926 24.0986 25.3926 21.5352V4.55762C25.3926 2.00879 24.0596 0.661133 21.4668 0.661133H4.51855C1.94043 0.661133 0.607422 1.97949 0.607422 4.55762V21.5352C0.607422 24.1133 1.94043 25.4463 4.51855 25.4463ZM4.5625 24.0254C2.90723 24.0254 2.01367 23.1611 2.01367 21.4619V4.63086C2.01367 2.94629 2.90723 2.06738 4.5625 2.06738H21.4229C23.0488 2.06738 23.9717 2.94629 23.9717 4.63086V21.4619C23.9717 23.1611 23.0488 24.0254 21.4229 24.0254H4.5625ZM8.12207 18.6494C8.3418 18.6494 8.50293 18.5762 8.66406 18.4004L13 14.0645L17.3359 18.4004C17.4971 18.5615 17.6729 18.6494 17.8926 18.6494C18.3027 18.6494 18.625 18.3271 18.625 17.9316C18.625 17.7119 18.5518 17.5508 18.3906 17.3896L14.04 13.0391L18.4053 8.67383C18.5664 8.49805 18.625 8.35156 18.625 8.13184C18.625 7.73633 18.3027 7.42871 17.8926 7.42871C17.7021 7.42871 17.541 7.4873 17.3652 7.66309L13 12.0137L8.66406 7.67773C8.48828 7.50195 8.3418 7.44336 8.12207 7.44336C7.71191 7.44336 7.38965 7.75098 7.38965 8.14648C7.38965 8.35156 7.46289 8.52734 7.62402 8.67383L11.9746 13.0391L7.62402 17.4043C7.46289 17.5508 7.38965 17.7266 7.38965 17.9316C7.38965 18.3271 7.71191 18.6494 8.12207 18.6494Z" fill="white"/>
        </svg>
      </div>

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
          // justify-content: center;
          // align-items: center;
          flex-direction: column;
          position: fixed;
          height: 100vh;
          width: 100vw;
          background-color: rgba(0,0,0,.85);
          top: 0;
          left: 0;
          z-index: 2;
          backdrop-filter: blur(5px);
        }

        .close {
          z-index: 3;
          margin-top: 3rem;
          margin-bottom: 7rem;
          margin-right: 3rem;
          align-self: flex-end;
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
          text-align: center;
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

        @media (max-width: 425px) {
          .close {
            margin-top: 1rem;
            margin-right: 1rem;
            margin-bottom: 1rem;
          }
  
          .artist-img{
            width: 240px;
            height: 240px;
          }

          .frame {
            width: 270px;
          }
          
          h3{
            font-size: 2rem;
          }

          .place {
            font-size: 1rem;
          }

          .btn-availability p{
            margin: .5rem;
            font-weight: 400;
            font-size: 1rem;
            padding: 0;
          }
        }

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
        if (e.target.nodeName === "svg"){
          this.close(true)
        }
      });

      
    }
  }
  customElements.define("component-infotour", componentInfoTour);

