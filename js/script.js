var categores = [
    {
        "name": "Штани",
        "src": "imagesp/Штаны.jpg",
        "id":"1"
    },
    {
        "name": "Футболки",
        "src": "imagesp/Футболки.jpg",
        "id":"2"
    },
    {
        "name": "Рюкзаки",
        "src": "imagesp/Рюкзаки.jpg",
        "id":"3"
    },
    {
        "name": "Куртки",
        "src": "imagesp/Куртки.jpg",
        "id":"4"
    },
    {
        "name": "Взуття",
        "src": "imagesp/Кроссовки.jpg",
        "id":"5"
    },
    {
        "name": "Світшоти",
        "src": "imagesp/Свитшоты.jpg",
        "id":"6"
    }
]
var tovar = [
    {
        "name": "Cargo Black",
        "src": "imagesp/Cargo.jpg",
        "price": "590 грн",
        "id":"1"
    },
    {
        "name": "Sector Blue",
        "src": "imagesp/Sector.jpg",
        "price": "690 грн",
        "id":"1"
    },
    {
        "name": "Levis Gray",
        "src": "imagesp/Футболка1.jpg",
        "price": "390 грн",
        "id":"2"
    },
    {
        "name": "Black Mychemol Romate",
        "src": "imagesp/Футболка2.jpg",
        "price": "870 грн",
        "id":"2"
    },
    {
        "name": "Adidas Blue/Black",
        "src": "imagesp/Рюкзаки1.jpg",
        "price": "590 грн",
        "id":"3"
    },
    {
        "name": "Vans Blue",
        "src": "imagesp/Рюкзаки2.jpg",
        "price": "250 грн",
        "id":"3"
    },
    {
        "name": "Nike Blue",
        "src": "imagesp/Куртканайксиняя.jpg",
        "price": "750 грн",
        "id":"4"
    },
    {
        "name": "Nike Black Parka",
        "src": "imagesp/Куртканайксиняя.jpg",
        "price": "999 грн",
        "id":"4"
    },
    {
        "name": "Nike Black/White",
        "src": "imagesp/Кросы1.jpg",
        "price": "980 грн",
        "id":"5"
    },
    {
        "name": "Asics White",
        "src": "imagesp/Кросы2.jpg",
        "price": "1500 грн",
        "id":"5"
    },
    {
        "name": "Adidas Gray",
        "src": "imagesp/Свитшот1.jpg",
        "price": "550 грн",
        "id":"6"
    },
    {
        "name": "Pobedov Blue",
        "src": "imagesp/Свитшот2.jpg",
        "price": "780 грн",
        "id":"6"
    }
]
new Vue({
    el: '#app',
    data: {
        categores: [],
        tovar: [],
        search: '',
        searchResult: []
    },
    mounted: function(){
        this.categores = categores;
        this.tovar = tovar;
    },
    methods: {
        onSubmit: function(){
            this.tovar.forEach(element => {
                if (element.name.toUpperCase().includes(this.search.toUpperCase())) {
                    this.searchResult.push(element);
                }
            });
            this.tovar = this.searchResult;
        },
    },
    computed: {
        filteredItems: function() {
            if (!this.search) {
                return this.tovar;
            }
            return this.tovar.filter(element => {
                return element.name.toUpperCase().includes(this.search.toUpperCase());
            });
        },
    }
});