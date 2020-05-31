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
            fetch('https://newsapi.org/v2/everything?sources='+selectedSource+'&apiKey=6a263bbf656948fb932c3e509acaaf7d')
            .then(response => response.json())
            .then(json => {
                if (selectedSource === 0) {
                    $().alert('no available articles');
                } else { 
                    this.articles = json.articles
                }
            })
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




