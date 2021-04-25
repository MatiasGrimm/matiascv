<template>
  <div>
    <h1>Hello</h1>
    <h2>This is Projects page</h2>
  </div>
</template>
<script>

export default {
  name: 'Projects',
  data: () => ({
    rules: {
      required: (value) => !!value || 'Du skal indtaste en værdi.'
    }
  }),
  methods: {}
}
</script>
