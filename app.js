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
            x: 0,
            y: 0,
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = 'Words of Randiance';
            this.title = title;
        },
        handleShowBook() {
            this.showBook = !this.showBook;
        },
        handleMouseEvent(e, data) {
            console.log(e, e.type);
            if(data)
            {
                console.log(data);
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
})

app.mount('#app')