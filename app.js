const app = Vue.createApp({
    data() {
        return {
            id: 1,
            name: 'Jon Snow',
            title: 'King in the North',
            house: 'Stark',
            gender: 'male'
        }
    },
    methods: {
        changeCharacter() {

            const randomId = Math.floor(Math.random() * 4) + 1

            console.log(randomId);

            if(randomId === 2) {
                this.id = 2,
                this.name = "Sansa Stark",
                this.title = "The Lady of Winterfell",
                this.house = "Stark",
                this.gender = "female"
            } else if(randomId === 3) {
                this.id = 3,
                this.name = 'Brandon Stark',
                this.title = 'The Three Eyed Raven',
                this.house = 'Stark',
                this.gender = 'male'
            } else if(randomId === 4) {
                this.id = 4,
                this.name = 'Arya Stark',
                this.title = 'No one',
                this.house = 'Stark',
                this.gender = 'female'
            } else if(randomId === 1) {
                this.id = 1,
                this.name = 'Jon Snow',
                this.title = 'King in the North',
                this.house = 'Stark',
                this.gender = 'male'
            }
        }
    }
})

app.mount('#app')