<template>
  <div :class="itemClasses(item)">
    <div
      class="title_name"
      v-html="item.name || item.content"
    />
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, default: () => {} }
  },
  async asyncData({ item }) {
    try {
      console.log('slug', item.slug);
      let suburb = await import(`~/content/suburb/${item.slug}.md`);
      console.lo
      return {
        suburb: {
          ...suburb.attributes
        }
      };
    } catch (err) {
      error({ statusCode: 404, message: 'This post could not be found' })
    }
  },
  methods: {
    itemClasses (item) {
      const space = item.space ? `space-${item.space}` : ''
      const type = item.type || ''
      const area = item.area || ''
      return `tile ${type} ${area} ${space}`
    }
  }
}
</script>
