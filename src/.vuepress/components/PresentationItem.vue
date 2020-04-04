<template>
  <div>
    <h4>{{presentation.title}} ({{year}}) <span class="author-by">by {{presentation.author}}</span></h4>
    <ul>
      <PresentationInfoLine text="Slides:" :value="presentation.slides" :link="presentation.slides" />
      <PresentationInfoLine text="Source Language:" :value="presentation.sourceLanguage" />
      <PresentationInfoLine text="City:" :value="`${presentation.city}, ${presentation.country}`" />
      <PresentationInfoLine text="Event:" :value="presentation.event.name" :link="presentation.event.link" />
      <PresentationInfoLine text="Git:" :value="presentation.gitRepository" :link="presentation.gitRepository" />
      <PresentationInfoLine text="Video:" :value="presentation.video" :link="presentation.video" />
      <PresentationInfoLine text="Source Language:" :value="presentation.sourceLanguage" />
      <li>Reach Speaker: 
        <ul>
          <PresentationInfoLine text="Twitter:" :value="presentation.reachSpeaker.twitter" :link="presentation.reachSpeaker.twitter" />
          <PresentationInfoLine text="Github:" :value="presentation.reachSpeaker.github" :link="presentation.reachSpeaker.github" />
          <PresentationInfoLine text="Vue Discord:" :value="presentation.reachSpeaker.vueDiscord" />
          <PresentationInfoLine text="Email:" :value="presentation.reachSpeaker.email" />
        </ul>
      </li>
    </ul>
    <strong>Description:</strong>
    <p>{{presentation.description}}</p>
  </div>
</template>

<script>
import PresentationInfoLine from './PresentationInfoLine';

export default {
  name: "PresentationItem",
  components: {
    PresentationInfoLine,
  },
  props: {
    presentation: {
      type: Object,
      required: true
    },
    year: {
      type: String,
      required: true
    }
  },
  computed: {
    presentationWithMeta() {
      const presentationWithMeta = {};
      Object.entries(this.presentation).forEach(([key, value]) => {
        if(["description"].includes(key)) {
          return;
        }

      })
    }
  }
};
</script>

<style lang="css" scoped>
.author-by {
  float: right;
}
</style>
