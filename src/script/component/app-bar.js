class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
           }
           :host {
               display: block;
               width: 100%;
               background-color: cornflowerblue;
               color: white;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           }
           h2 {
               padding: 16px;
           }
           .jumbotron {
            font-size: 20px;
            padding: 60px;
            background-color: #00c8eb;
            text-align: center;
            color: white;
         }
       </style>
       <div class ="jumbotron"> 
     <header>
      <h1>Athlete's Finder</h1>
        </div>
    </header>`; 
    }
}

customElements.define("app-bar", AppBar);