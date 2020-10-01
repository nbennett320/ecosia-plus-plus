<template>
  <div id="ew--container">
    <Panel 
      v-if="usePanel"
      :query="query"
    />
    <Card 
      v-else
      :query="query"
    />
  </div>
</template>

<script>
import { Panel, Card } from '../components'
export default {
  name: "Widget",
  components: {
    Panel,
    Card
  },
  props: {
    query: String,
    usePanel: Boolean
  }
}
</script>

<style>
@import '../assets/css/styles.css';
#ew--container {
  padding: 0;
}
</style>