<template>
  <div>
    <PresentationFilters :value="filters" />
    <div v-for="(yearPresentation, theme) in presentationFiltered" :key="theme">
      <h2>{{ theme }}</h2>
      <div v-for="(presentations, year) in yearPresentation" :key="`${theme}-${year}`">
        <!--<h3>{{ year }}</h3>-->
        <!-- put a message that say that no presentation with current filter are available and user need to change filters to see presentation in this theme ? -->
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
import PresentationFilters from './PresentationFilters';

export default {
  name: "PresentationList",
  components: {
    PresentationItem
  },
  data() {
    return {
      filters: {
        theme: "",
        year: "",
        author: "",
        event: "",
        country: "",
        language: "",
        title: "",
      }
    };
  },
  computed: {
    presentationFiltered() {
      // The filter loop over themes then years then presentations to filter them. With this logic we iterate only once on all presentations. The logic look like this:
      // Is theme in the theme filtered ? 
      //    yes -> Is the year in the year filtered ?
      //        yes -> is the presentation has the same value that the filter ?
      //            yes -> display this presentation
      //            no -> remove this presentation 
      //        no -> remove all the presentation of this year
      //    no -> remove all presentation of this theme
      return this.filterByTheme(presentationData, this.filters);
    }
  },
  methods: {
    filterByTheme(presentationByTheme, filters) {
      // presentationByTheme is presentationData object
      let allowed;
      // If we want to filter by theme we assign it. If not we assign all the key to not filter it
      if(filters["theme"]) {
        allowed = [filters["theme"]]
      } else {
        allowed = Object.keys(presentationByTheme);
      }
      // This code basically just filter by key
      return Object.keys(presentationByTheme)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = this.filterByYear(presentationByTheme[key], filters);
          return obj;
        }, {});
    },
    filterByYear(presentationByYear, filters) {
      // presentationByYear look like {2019: [...], 2020: [...]}
      // If we want to filter by year we assign it. If not we assign all the key to not filter it
      let allowed;
      if(filters["year"]) {
        allowed = [filters["year"]]
      } else {
        allowed = Object.keys(presentationByYear);
      }
      // we filter presentation by year and when we set the presentations data we filter them directly to avoid multiple loop
      return Object.keys(presentationByYear)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = this.filterPresentations(presentationByYear[key], filters);
          return obj;
        }, {});
    },
    filterPresentations(presentations, filters) {
      // prepare filter by multiple value
      return presentations.filter(presentation => {
        return this.presentationMatchFilter(presentation, filters)
      })

    },
    presentationMatchFilter(presentation, filters) {
      if (filters["author"] && filters["author"] !== presentation["author"]) {
        return false;
      }
      if (filters["country"] && filters["country"] !== presentation["country"]) {
        return false;
      }
      if (filters["language"] && filters["language"] !== presentation["language"]) {
        return false;
      }
      if (filters["event"] && filters["event"] !== presentation["event"]["name"]) {
        return false;
      }
      if (filters["title"] && !presentation["title"].toLowerCase().includes(filters["title"].toLowerCase())) {
        return false;
      }
      return true;
    }
  }
};
</script>
