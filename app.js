const app = Vue.createApp({
    // datas, functions go here
    // template: '<h2>Template here!</h2>'
    data() {
        return {
            showBook: true,
            books: [
                { title: 'The Final Empire', author: 'Brandon Sanderson', price: '80'},
                { title: 'Name of the wind', author: 'Patrick Rothfuss', price: '180'},
                { title: 'Harry Potter', author: 'J.K. Rowling', price: '280'}
            ],
        }
    },
    methods: {
        handleShowBook() {
            this.showBook = !this.showBook;
        },
    }
})

app.mount('#app')