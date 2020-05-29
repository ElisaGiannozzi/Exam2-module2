const app = new Vue ({
    el: '#app', 
    data: {
        sources: []
    },
    created () {
        fetch('https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/sources?language=en&apiKey=6a263bbf656948fb932c3e509acaaf7d')
        .then(response => response.json())
        .then(json => {
            this.sources = json.sources
        })
    }
}) 

