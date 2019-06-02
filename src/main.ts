import { PluginInterface } from '../types'
import Tailwind from '~/Tailwind'

export const TailwindCssVue = new (class Plugin implements PluginInterface {
  installed: boolean = false

  install (VueFuncConstructor) {
    VueFuncConstructor.prototype.$tailwind = new Tailwind().extract

    this.installed = true
  }
})()
