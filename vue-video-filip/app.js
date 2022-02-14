const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'the final empire',
            author: 'brandon sandersen',
            age: 45,
            x: 0,
            y: 0,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss' },
                { title: 'the way of kings', author: 'patrick rothfuss' },
                { title: 'the little lam', author: 'patrick rothfuss' },
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')