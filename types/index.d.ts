// !!! В этом файле не использовать алиасы в путях (e.g. "~")
import Vue from 'vue'

export interface PluginInterface {
  install (VueFuncConstructor, options: OptionsInterface): void
}

export interface OptionsInterface {
}

export interface VuePrototypePluginInterface {
}

declare module 'vue/types/vue' {
  interface Vue {
    $tiptapVuetify: VuePrototypePluginInterface
  }
}
