<template>
  <div>
    <select label="Theme" v-model="value.theme">
      <option value="">Choose</option>
      <option v-for="item in themes">{{item}}</option>
    </select>
    <select label="Year" v-model="value.year">
      <option value="">Choose</option>
      <option v-for="item in years">{{item}}</option>
    </select>
    <select label="Author" v-model="value.author">
      <option value="">Choose</option>
      <option v-for="item in getItemsForPresentationKey('author')">{{item}}</option>
    </select>
    <select label="Event" v-model="value.event">
      <option value="">Choose</option>
      <option v-for="item in getItemsForPresentationKey('event', 'name')">{{item}}</option>
    </select>
    <select label="Country" v-model="value.country">
      <option value="">Choose</option>
      <option v-for="item in getItemsForPresentationKey('country')">{{item}}</option>
    </select>
    <select label="Language" v-model="value.language">
      <option value="">Choose</option>
      <option v-for="item in getItemsForPresentationKey('sourceLanguage')">{{item}}</option>
    </select>
  </div>
</template>

<script>
import {presentationData} from '../data';
export default {
  name: "PresentationFilters",
  props: {
    value: {
      type: Object,
      required: true
    },
  },
  computed: {
    themes() {
      return Object.keys(presentationData);
    },
    years() {
      let years = [];
      Object.values(presentationData).forEach(presentationByYear => {
        // presentationByYear look like {2019: [...], 2020: [...]}
        // So basically we concat the keys of presentationByYear with already found years and put it in a set to avoid duplcate
        years = [...new Set(years.concat(Object.keys(presentationByYear)))]
      })
      return years
    }
  },
  data() {
    return {};
  },
  methods: {
    getItemsForPresentationKey(key, subKey=null) {
      const items = new Set();
      Object.values(presentationData).forEach(presentationsByYear => {
        // presentationByYear look like {2019: [...], 2020: [...]}

        Object.values(presentationsByYear).forEach(presentations => {
          presentations.forEach(presentation => {
            // presentation is a presentation object as declared in json file
            if(!subKey && presentation[key]) {
              return items.add(presentation[key])
            }
            else if(presentation[key] && presentation[key][subKey]) {
              items.add(presentation[key][subKey])
            }
          })
        })
      })
      return items
    }
  }
};
</script>

<style lang="scss" scoped></style>