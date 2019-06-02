export default class Tailwind {
  private breakpoints = ['sm', 'md', 'lg', 'xl']
  private pseudoSelectors = ['hover', 'focus', 'active']

  extract = (argument: {
    default?: string
    sm: string
    md: string
    lg: string
    hover: string
    focus: string
    active: string
  }) => {
    const resultClasses: string[] = []
    const prefixes = [...this.breakpoints, ...this.pseudoSelectors]

    if (argument.default) {
      resultClasses.push(...this.classesStrToArr(argument.default))
    }

    prefixes.forEach(prefix => {
      if (argument[prefix]) {
        const withPrefix = this.classesStrToArr(argument[prefix])
          .map(className => `${prefix}:${className}`)

        resultClasses.push(...withPrefix)
      }
    })

    return resultClasses.join(' ')
  }

  private classesStrToArr (str: string): string[] {
    return str.split(' ')
  }
}
