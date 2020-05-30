const app = new Vue ({
    el: '#app', 
    data: {
        sources: [],
        selected: '',
        articles: [], 
    },
    methods: {
        getSelected: function () {
            let selectedSource = this.selected.id; 
            console.log(selectedSource); 
        }

    },
   
    created () {
        fetch('https://newsapi.org/v2/sources?language=en&apiKey=6a263bbf656948fb932c3e509acaaf7d')
        .then(response => response.json())
        .then(json => {
            this.sources = json.sources
        })

    }    
}) 




