import './player-item.js';

class PlayerList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set players(players) {
        this._players = players;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._players.forEach(player => {
            const playerItemElement = document.createElement("player-item");
            playerItemElement.player = player;
            this.shadowDOM.appendChild(playerItemElement);
        })
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
             .placeholder {
                   font-weight: lighter;
                   color: rgba(0,0,0,0.5);
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
               }
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("player-list", PlayerList);