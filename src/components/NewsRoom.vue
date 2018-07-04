<template>
    <div class="container">
        <h1>Newsroom</h1>
        <div class="row">
            <div v-for="(item, index) in newsroom.articles" class="">
                <div class="col offset-1">
                    <div class="card mt-4" style="width: 20rem;">
                        <img v-bind:src="newsroom.articles[index].urlToImage" alt="" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">{{ newsroom.articles[index].title }}</h5>
                            <p class="card-text">{{ newsroom.articles[index].description }}</p>
                            <a v-bind:href="newsroom.articles[index].url" class="btn btn-primary">Read the article.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <pre>{{newsroom}}</pre>
    </div>
</template>

<script>
import API from '@/lib/api'

export default {
    name: 'NewsRoom',
    data() {
        return {
            newsroom: {}
        };
    },
    
    mounted() {
        API.getHeadlines().then(result => {
            this.newsroom = result;
        });
    }
}
    
</script>