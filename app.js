const app = Vue.createApp({
    // datas, functions go here
    // template: '<h2>Template here!</h2>'
    data() {
        return {
            showBook: true,
            title: 'The Final Empire from data of vue app',
            author: 'Brandon Sanderson',
            price: '80',
            bought: 1000,
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = 'Words of Randiance';
            this.title = title;
        },
        handleShowBook() {
            this.showBook = !this.showBook;
        }
    }
})

app.mount('#app')