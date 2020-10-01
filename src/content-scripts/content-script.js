import Vue from 'vue'
import Widget from './Widget.vue'
import Styles from './Styles.vue'
import queryMatches from './parser'

Vue.config.productionTip = false

const content = document.getElementsByClassName('mainline-top')
const style = document.getElementsByClassName('__layout')
const query = document.getElementsByClassName('search-form-input')[0].value
if(queryMatches(query)) {
  new Vue({
    render: h => h(Widget, {
      props: {
        query,
        usePanel: query.includes("use panel")
      }
    }),
  }).$mount(content[0])
}

new Vue({
  render: h => h(Styles, {
    props: {
      query,
    }
  }),
}).$mount(style[0])