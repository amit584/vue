const app = Vue.createApp({
    data() {
        return {
            title: 'the final Empire',
            author: 'amit shavit',
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        }
    }
})
app.mount('#app')
