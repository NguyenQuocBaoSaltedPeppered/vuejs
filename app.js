const app = Vue.createApp({
    // datas, functions go here
    // template: '<h2>Template here!</h2>'
    data() {
        return {
            url: "https://www.google.com",
            showBook: true,
            books: [
                { title: 'The Final Empire', author: 'Brandon Sanderson', price: '80', isFav: true},
                { title: 'Name of the wind', author: 'Patrick Rothfuss', price: '180', isFav: false},
                { title: 'Harry Potter', author: 'J.K. Rowling', price: '280', isFav: true}
            ],
        }
    },
    methods: {
        handleShowBook() {
            this.showBook = !this.showBook;
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        },
    }
})

app.mount('#app')