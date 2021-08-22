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
        <div class="${this.nickname} artist ">

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
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FMt.jpg?alt=media&token=805f9038-f63d-4745-ae9a-eb57bb96604c);
          background-size: 100%;
        }
        .Jb:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FJb.jpg?alt=media&token=bd22e39e-4b92-4051-a995-17a55c605b76);
            background-size: 100%;
        }
        .W:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FW.jpg?alt=media&token=6edd8494-bbed-480d-87e9-0e94497c16ea);
            background-size: 100%;
        }
        .Y:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FY.jpg?alt=media&token=6e491704-7734-4ed0-9cee-489abb2101a0);
            background-size: 100%;
        }
        .Dy:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FDy.jpg?alt=media&token=9eb7d9c5-0544-4ba9-9227-752b39f3a21d);
            background-size: 100%;
        }
        .Lu:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FLu.jpg?alt=media&token=6fb29745-545a-4a34-a9af-e24b9bc934eb);
            background-size: 100%;
        }
        .M:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FM.jpg?alt=media&token=d7ce4bb2-33ac-4c0d-9109-51e26756cb7d);
            background-size: 100%;
        }
        .F:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FF.jpg?alt=media&token=b9b79392-3e3a-48a1-8e39-47c04bb5fb43);
            background-size: 100%;
        }
        .Mw:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FMw.jpg?alt=media&token=8f6fa6b0-21f4-4df5-bf74-a53da5473946);
            background-size: 100%;
        }
        .Jh:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FJh.jpg?alt=media&token=bcee7482-e552-4d1e-aab2-4e90c7fff7a8);
            background-size: 100%;
        }
        .Mb:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FMb.jpg?alt=media&token=f16c7e37-cb0a-40cf-953b-13ad2e526f66);
            background-size: 100%;
        }
        .C:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FC.jpg?alt=media&token=bb47c02e-8ccd-426d-b491-19a30750610e);
            background-size: 100%;
        }
        .Ra:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FRa.jpg?alt=media&token=08eb40ae-6266-40bc-b294-d7b686b91936);
            background-size: 100%;
        }
        .Jw:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FJw.jpg?alt=media&token=c247a9ce-a0f1-4dbf-b14a-ccb290db9d5a);
            background-size: 100%;
        }
        .A:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FA.jpg?alt=media&token=3d08d6a8-7cef-428e-b84d-3fe17a77e011);
            background-size: 100%;
        }
        .Rw:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FRw.jpg?alt=media&token=49c5a5f6-db7a-4a0a-9f47-0a2e441997a7);
            background-size: 100%;
        }
        .To:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FTo.jpg?alt=media&token=eee64f88-3546-414c-9e90-8696f9bebe66);
            background-size: 100%;
        }
        .Ec:hover{
            background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/artists%2FEc.jpg?alt=media&token=33b7f439-49a8-4a6c-948a-2eb53280d90b);
            background-size: 100%;
        }


        .Ba:hover{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FBa.jpg?alt=media&token=02f975b2-83c7-4214-90e2-58a9ae342559);
          background-size: 100%;
        }
        .Ch:hover{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FCh.jpg?alt=media&token=8b7381e4-39e2-49ca-9c15-fff5fd3936dd);
          background-size: 100%;
        }
        .Co:hover{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FCo.jpg?alt=media&token=aaf2cad5-984d-4fa2-ab4e-237f7b76077a);
          background-size: 100%;
        }
        .Cu:hover{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FCu.jpg?alt=media&token=e544f56f-cd75-4635-b9f2-52de25248720);
          background-size: 100%;
        }
        .Hu:hover{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FHu.jpg?alt=media&token=d7847b29-b539-4d31-938b-c7c7b25a3f06);
          background-size: 100%;
        }
        .La:hover{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FLa.jpg?alt=media&token=49351e5b-f9e7-40bf-a742-f95a81eb5b2c);
          background-size: 100%;
        }
        .Lv:hover{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FLv.jpg?alt=media&token=8a04bbcf-e0e9-40dd-888e-3f0306fe3e3b);
          background-size: 100%;
        }
        .Ly:hover{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FLy.jpg?alt=media&token=d2179e1c-d913-44df-b9fe-8f3e4ca7cfeb);
          background-size: 100%;
        }
        .Mi:hover{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FMi.jpg?alt=media&token=48efbdea-1808-49f5-bff2-05d2ac0dae0b);
          background-size: 100%;
        }
        .My:hover{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FMy.jpg?alt=media&token=c959a32f-577d-4ccc-ba37-5f6db5e44408);
          background-size: 100%;
        }
        .Ny:hover{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FNy.jpg?alt=media&token=c460a26e-4a96-4a74-94e6-feedfea061f5);
          background-size: 100%;
        }
        .Pa:hover{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FPa.jpg?alt=media&token=ccd9c581-e1dd-4146-97f8-c3b36d02b434);
          background-size: 100%;
        }
        .Po:hover{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FPo.jpg?alt=media&token=bc922552-0f89-48d2-b1a9-2cf39caecce3);
          background-size: 100%;
        }
        .Sd:hover{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FSd.jpg?alt=media&token=a904a591-c7be-4e92-9c9c-a9fd79c09004);
          background-size: 100%;
        }
        .Ta:hover{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2FTa.jpg?alt=media&token=f9236231-f282-4b3e-a700-4573110ee6cb);
          background-size: 100%;
        }
        .Mx:hover{
          background-image: url(https://firebasestorage.googleapis.com/v0/b/badbunny-ep.appspot.com/o/tours%2Fmx.jpg?alt=media&token=e997edeb-c774-49c3-ac50-529294723240);
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
          background: rgba(0, 0, 0, 0.6);
          
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
          .artists, .tours {
              grid-template-columns: repeat(4,1fr);
              grid-template-rows: repeat(5,1fr);
              gap: 0.7rem;
              align-content: center;
              align-items: center;
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

    modal(expandState){
      
    }


    connectedCallback() {
      this.render();

      this.shadowRoot.querySelector('.artist').addEventListener('click', (e) => {
      this.modal(true)
    });



    }
  }
  customElements.define("component-artist", componentArtist);

