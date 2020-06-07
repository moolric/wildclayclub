<template>
  <NuxtLink
    :to="tileLink"
    tag="div"
    :class="tileClasses"
  >
    <div class="tile_name" v-html="tileAttr.name" />
    <div v-if="tileAttr.status" class="tile_status">{{ tileAttr.status }}</div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    item: { type: Object, default: () => {} }
  },
  data () {
    return {
      test: 'stuff'
    }
  },
  created () {
    if (this.item.slug) {
      const suburb = require(`~/content/suburb/${this.item.slug}.md`)
      this.suburb = suburb
    }
  },
  computed: {
    tileLink () {
      return this.item.slug ? `${this.item.type}/${this.item.slug}` : ''
    },
    tileClasses () {
      const space = this.item.space ? `space-${this.item.space}` : ''
      const type = this.item.type || ''
      const area = this.item.area || ''
      return `tile ${type} ${area} ${space} tile--${this.item.slug}`
    },
    tileAttr () {
      if (this.suburb) {
        return this.suburb.attributes
      } else {
        return {
          name: this.item.name || this.item.content
        }
      }
    }
  }
}
</script>
