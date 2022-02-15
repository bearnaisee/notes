const app = Vue.createApp({
    data() {
        return {
            url: "https://ucl.dk",
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: '', isFav: true},
                { title: 'the way of kings', author: 'brandon sanderson', img: '', isFav: true},
                { title: 'the finale empire', author: 'brandon sanderson', img: '', isFave: false}
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if (data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(item){
            item.isFav = !item.isFav
        }

    },
    computed: { // computed data er afhængig af andre data
        filteredBooks(){
            return this.books.filter((item) => item.isFav)
        }
    }
})

app.mount('#app')