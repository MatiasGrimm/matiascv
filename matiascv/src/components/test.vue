<template>
  <div>
    <h2>This is test</h2>
  </div>
</template>
<script>

export default {
  name: 'test',
  data: () => ({
    rules: {
      required: (value) => !!value || 'Du skal indtaste en værdi.'
    }
  }),
  methods: {}
}
</script>
