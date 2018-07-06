<template>
    <div id="app">
      <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header';
import NewsRoom from '@/components/NewsRoom'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    Header,
    NewsRoom
  }
}
</script>

<style>

</style>
