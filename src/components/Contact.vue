<template>
  <div>
    <h1>Hello</h1>
    <h2>This is Contact me</h2>
  </div>
</template>
<script>

export default {
  name: 'Contact',
  data: () => ({
    rules: {
      required: (value) => !!value || 'Du skal indtaste en værdi.'
    }
  }),
  methods: {}
}
</script>
