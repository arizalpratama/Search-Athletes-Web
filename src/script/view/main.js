import '../component/player-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const playerListElement = document.querySelector("player-list");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchPlayer(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult =  results => {
        playerListElement.players = results;
    };

    const fallbackResult = message => {
        playerListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;