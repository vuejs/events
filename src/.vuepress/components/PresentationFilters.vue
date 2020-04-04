<template>
  <div>
    <div style="margin-top: 20px;">
      <label for="title-input">Title:</label>
      <input id="title-input" class="input-css" v-model="value.title" placeholder="Type to filter title that contains your search" />
    </div>
    <div style="margin-top: 20px;">
      <div>
        <select v-model="value.theme" class="select-css">
          <option value="">Theme</option>
          <option v-for="item in themes">{{item}}</option>
        </select>
        <select v-model="value.year" class="select-css">
          <option value="">Year</option>
          <option v-for="item in years">{{item}}</option>
        </select>
        <select v-model="value.author" class="select-css">
          <option value="">Author</option>
          <option v-for="item in getItemsForPresentationKey('author')">{{item}}</option>
        </select>
      </div>
      <div style="margin-top: 10px;">
        <select v-model="value.event" class="select-css">
          <option value="">Event</option>
          <option v-for="item in getItemsForPresentationKey('event', 'name')">{{item}}</option>
        </select>
        <select v-model="value.country" class="select-css">
          <option value="">Country</option>
          <option v-for="item in getItemsForPresentationKey('country')">{{item}}</option>
        </select>
        <select v-model="value.language" class="select-css">
          <option value="">Language</option>
          <option v-for="item in getItemsForPresentationKey('sourceLanguage')">{{item}}</option>
        </select>
      </div>
    </div>
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

<style lang="css" scoped>
  .select-css {
    margin-right: 20px;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    box-sizing: border-box;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
  }
  .select-css::-ms-expand {
    display: none;
  }
  .select-css:hover {
    border-color: #888;
  }
  .select-css:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
  .select-css option {
    font-weight:normal;
  }


  .input-css {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
</style>
