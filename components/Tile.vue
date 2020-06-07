<template>
  <NuxtLink
    :to="tileLink"
    tag="div"
    :class="tileClasses"
  >
    <div
      class="tile_name"
      v-html="tileLabel"
    />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    item: { type: Object, default: () => {} }
  },
  async asyncData (item) {
    try {
      const suburb = await require(`~/content/suburb/${item.slug}.md`)
      return {
        suburb
      }
    } catch (err) {
      return false
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
      return `tile ${type} ${area} ${space}`
    },
    tileLabel () {
      console.log(this.suburb)
      if (this.suburb) {
        return this.suburb.name
      } else {
        return this.item.name || this.item.content
      }
    }
  }
}
</script>
