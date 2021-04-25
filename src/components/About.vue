<template>
  <div>
    <h1>Hello</h1>
    <h2>This is About me</h2>
  </div>
</template>
<script>

export default {
  name: 'About',
  data: () => ({
    rules: {
      required: (value) => !!value || 'Du skal indtaste en værdi.'
    }
  }),
  methods: {}
}
</script>
