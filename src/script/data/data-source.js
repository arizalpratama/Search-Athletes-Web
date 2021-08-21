class DataSource {
    static searchPlayer(keyword) {
        return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${keyword}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.player) {
                    return Promise.resolve(responseJson.player);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }
}

export default DataSource;