import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { createProPlugin, dropdown } from '@formkit/pro'

const pro = createProPlugin('fk-2d4d62c61', {
  dropdown,
})

createApp(App)
  /*
    FormKit with no styling.
  */
  .use(plugin, defaultConfig({
    plugins: [
      pro,
      /*
        Plugin to make default selectIcon close.
      */
      (node) => {
        node.props.selectIcon = 'close'
      }
    ]
  }))
  .mount('#app')
