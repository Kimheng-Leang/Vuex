import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from "vuex";
//create vuex store
const store = createStore({
    state(){
        return {
            user:{
                name:"Kimheng", //type String
                gender: "M",
                phoneNumber:"0123456789",
                id:"e20170417"
            },
            posts:[
                {
                    title:"New title",
                    content:"Blah blah",
                    postedAt: "09/4/2021 15:55:20",
                    postedBy:"e20170417",
                    id:"1"
                },
                {
                    title:"New title 1",
                    content:"Blah blah 1",
                    postedAt: "09/4/2021 16:55:20",
                    postedBy:"e20170417",
                    id:"2"
                }

            ],
            comments:[
                {
                    content:"Wow...",
                    commentAt:"09/4/2021 15:57:20",
                    commentBy:"e20170417",
                    postId:"e20170417",
                    id:"1234"
                },
                {
                    content:"Wow...1",
                    commentAt:"09/4/2021 16:57:20",
                    commentBy:"e20170417",
                    postId:"e20170417",
                    id:"12345"
                },
                {
                    content: "wow ... amazing ...111",
                    commentedAt: "09/04/2021 15:57:20",
                    commentedBy: "asdfa-asdfa-asdfa",
                    postId: "asdfb-asdfa-asdfa",
                    id: "ueueuy-owiiw-iwiww"
                }

            ]
        }
    },
    mutations:{

    },
    actions:{

    },
    getters:{
        getPosts(state){
            return state.posts
        },
        getComments(state){
            return state.comments
        }
    }
})
const app=createApp(App) // Create new vue js instance
app.use(store) //attach our new store to this vue js instance
app.mount('#app') //mount vuejs instance with template
