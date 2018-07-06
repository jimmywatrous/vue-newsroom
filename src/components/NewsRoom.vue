<template>
    <div class="container">
        <div class="row">
            <div v-for="(item, index) in newsroom.articles" class="col">
                <div class="card mt-4 mx-auto" style="width: 20rem;">
                    <div class="card-header">
                        <span class="card-text text-muted">{{ newsroom.articles[index].source.name }}</span>
                    </div>
                    <img v-bind:src="newsroom.articles[index].urlToImage" alt="" class="card-img-top">
                    <div class="card-body">
                        <a v-bind:href="newsroom.articles[index].url" class="card-title">
                            <h5>{{ newsroom.articles[index].title }}</h5>
                        </a>
                        <p class="card-text">{{ newsroom.articles[index].description }}</p>
                        
                    </div>
                    </div>
            </div>
        </div>
        <pre>{{newsroom}}</pre>
    </div>
</template>

<script>
import API from '@/lib/api'
import { EventBus } from '@/lib/eventbus'



export default {
    name: 'NewsRoom',
    data() {
        return {
            newsroom: null
        };
    },
    
    
    mounted() {
        API.getHeadlines().then(result => {
            this.newsroom = result;
        });
        EventBus.$on('search', query => {
            this.queryArticles(query)
        })
        
    },
    
    methods: {
        queryArticles(query) {
            API.queryHeadlines(query).then(result => {
                this.newsroom = result;
            })
        }
    }
}
    
</script>