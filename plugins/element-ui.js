import Vue from 'vue'
import Element from 'element-ui/lib/element-ui.common'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/display.css'
export default () => {
  Vue.use(Element, { locale })
}
