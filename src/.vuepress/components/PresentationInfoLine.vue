<template>
  <li>{{text}} 
    <a 
      v-if="link" 
      :href="link"
      target="_blank"
      rel="noopener noreferrer">
      {{value}}
    </a>
    <span v-else>{{value}}</span>
  </li>
</template>

<script>
export default {
  name: "PresentationInfoLine",
  props: {
    text: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    }
  },
};
</script>

<style lang="scss" scoped></style>