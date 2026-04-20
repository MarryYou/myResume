import DefaultTheme from 'vitepress/theme'
import './style.css'
import ExperienceCard from './components/ExperienceCard.vue'
import SkillGrid from './components/SkillGrid.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component('ExperienceCard', ExperienceCard)
    app.component('SkillGrid', SkillGrid)
  }
}
