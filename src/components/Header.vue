<template>
    <header id="header">
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Newsroom</a>
        <form class="form-inline">
          <input v-model="query" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" @click="emitSearch">Search</button>
        </form>
        </nav>
    </header>
</template>

<script>
import  {EventBus } from '@/lib/eventbus';

export default {
    data() {
        return {
            query: ''
        }
    },
    methods: {
        emitSearch() {
            EventBus.$emit('search', this.query);
        }
    }
}
</script>