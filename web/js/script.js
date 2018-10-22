var products = [
	{
		"item": "Спортивные штаны STEK",
        "price": " 940 грн",
        "src": "imagesp/Steck.jpg"
	},
	{
		"item": "Спортивные штаны Cargo",
        "price": " 999 грн ",
        "src": "imagesp/Cargo.jpg"
	},
	{
		"item": "Спортивные штаны Sector88",
        "price": " 870 грн ",
        "src": "imagesp/Sector.jpg"
	}
]
new Vue({
    el: '#app',
    data: {
        items: []
    },
    mounted: function(){
        this.items = products;
    },
});