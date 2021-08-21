class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
       .container
        {
        /* background-color: wheat; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
        }
       
       .field-search {
        background-color: #00c8eb;
        border-radius: 15px;
        text-align: center;
        padding: 20px;
        /* background-color: cornsilk; */
        box-shadow: 2px 3px 21px rgba(0, 0, 0, 0.26); 
        }

        .field-search-input {
            background-color: #fcfcfc;
            padding: 13px;
            border: none;
            border-radius: 7px;
            width: 700px;
            color: black;
            outline: none;
            font-size: 20px;
            float: right;
        }

        .newButton {
            padding: 10px 20px;
            margin-left: 10px;
            margin-top: 10px;
            background-color: #eb0000;
            border: none;
            color: wheat;
            font-size: 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.2s ease; 
            float: center;  
        }

        .newButton:hover
        {
            background-color: #ff7300;
        }
       }
       </style>
       <div class="container">
       <div id="field-search" class="field-search">
           <input placeholder="Search athlete's.." id="searchElement" class="field-search-input" type="search">
           <button id="searchButtonElement" class="newButton" type="submit">Search</button>
       </div>
       </div>
       `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);