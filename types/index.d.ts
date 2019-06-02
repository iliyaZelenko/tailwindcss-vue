// !!! В этом файле не использовать алиасы в путях (e.g. "~")

export interface PluginInterface {
  install (VueFuncConstructor): void
}
