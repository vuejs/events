<template>
  <div>
    test
    <div v-for="(yearPresentation, theme) in presentationFiltered" :key="theme">
      <h2>{{ theme }}</h2>
      <div v-for="(presentations, year) in yearPresentation" :key="`${theme}-${year}`">
        <!--<h3>{{ year }}</h3>-->
        <div v-for="presentation in presentations" :key="presentation.title">
          <PresentationItem :presentation="presentation" :year="year" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {presentationData} from '../data';
import PresentationItem from './PresentationItem';

export default {
  name: "PresentationList",
  components: {
    PresentationItem
  },
  data() {
    return {};
  },
  computed: {
    presentationFiltered() {
      return presentationData;
    }
  },
};
</script>

<style lang="scss" scoped></style>