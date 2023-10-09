import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { createProPlugin, dropdown } from '@formkit/pro'
import { genesisIcons } from '@formkit/icons'

const pro = createProPlugin('fk-2d4d62c61', {
  dropdown,
})

createApp(App)
  /*
    FormKit with no styling. When using the genesis theme, the problem
    does not persist. You can uncomment to compare.
  */
  .use(plugin, defaultConfig({
    // icons: {
    //   ...genesisIcons,
    // },
    // theme: 'genesis',
    plugins: [
      pro,
      /*
        Plugin to make default selectIcon close.
      */
      (node) => {
        node.props.selectIcon = 'close'

        // node.on('created', () => {
        //   node.props.selectIcon = 'close'
        // })
      }
    ]
  }))
  .mount('#app')
