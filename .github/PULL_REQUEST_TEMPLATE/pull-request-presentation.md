---
name: Presentation PR
about: Share a new presentation
title: ''
labels: ''
assignees: ''
---

Thank you for submitting a presentation.

To submit a presentation you need to add a `.json` file that contain your data at: `src/.vuepress/data/presentations/\[theme\]/\[year\]/presentation-title.json`

The json format is the following, please copy it fully even if some fields are not filled:

```json
{
  "slides": "",
  "author": "",
  "sourceLanguage": "",
  "city": "",
  "country": "",
  "vueVersion": "",
  "event": {
    "name": "",
    "link": ""
  },
  "gitRepository": "",
  "videoLink": "",
  "reachSpeaker": {
    "twitter": "",
    "github": "",
    "vueDiscord": "",
    "email": ""
  },
  "description": ""
}
```
