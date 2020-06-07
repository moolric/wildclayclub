<template>
  <article class="suburb">
    <div class="suburb__info">
      <h1>{{ suburb.attributes.name }}</h1>
      <div>Status: {{ suburb.attributes.status }}</div>
      <div v-html="suburb.html"></div>
    </div>
  </article>
</template>
<script>
export default {
  data () {
    return {
      suburb: {}
    }
  },
  created () {
    const suburb = require(`~/content/suburb/${this.$route.params.slug}.md`)
    this.suburb = suburb
  }
}
</script>
